import { useQuery } from "react-query"
import axios from "axios"
import { InstancesResponse } from "$types/invidious"
import { useMemo } from "react"
import useInstanceStore from "$store/useInstanceStore"
import { V1Stats } from "$types/api"
import { notifications } from "@mantine/notifications"
import { IconCheck, IconX } from "@tabler/icons-react"

interface UseInstanceReturnType {
  instance: string
  setInstance: (instance: string) => Promise<void>
  instances: InstancesResponse
  instancesLoading: boolean
}

export default function useInstance(): UseInstanceReturnType {
  const instance = useInstanceStore.use.instance()
  const storeInstance = useInstanceStore.use.setInstance()

  const setInstance = async(instance: string): Promise<void> => {
    notifications.show({
      id: "set-instance",
      loading: true,
      title: "Checking instance",
      message: "Checking if the instance is valid and available...",
      autoClose: false,
      withCloseButton: false
    })
    try {
      const { data: stats, config } = await axios.get<V1Stats>("/api/v1/stats", {
        baseURL: instance
      })

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (stats.software.name !== "invidious") {
        throw new Error("INVALID_INSTANCE")
      }

      // We already set the baseURL in the axios request,
      // so we can assume that the baseURL is present
      storeInstance(config.baseURL as string)
      notifications.update({
        id: "set-instance",
        color: "green",
        title: "Instance set",
        message: `You are now using \`${instance}\` as invidious instance.`,
        icon: <IconCheck />,
        autoClose: 10000,
        withCloseButton: true
      })
    } catch (e) {
      notifications.update({
        id: "set-instance",
        title: "Error!",
        message: "INVALID_INSTANCE",
        color: "red",
        icon: <IconX />
      })
    }
  }

  const { data: instances, isLoading: instancesLoading } = useQuery(["invidiousInstances"], async() => {
    const { data } = await axios.get<InstancesResponse>("https://api.invidious.io/instances.json")
    return data
  })

  const httpsInstances = useMemo(() => {
    // We only want HTTPS instances that have the API enabled
    if (!instances) {
      return []
    }

    return instances.filter((instance) => {
      const instanceData = instance[1]
      return instanceData.type === "https" && instanceData.api
    })
  }, [instances])

  return {
    instances: httpsInstances,
    instancesLoading,
    instance,
    setInstance
  }
}
