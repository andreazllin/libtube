import { useQuery } from "react-query"
import axios from "axios"
import { InstancesResponse } from "$types/invidious"
import { useMemo } from "react"

interface UseInstanceReturnType {
  instances: InstancesResponse
  instancesLoading: boolean
}

export default function useInstance(): UseInstanceReturnType {
  const { data: instances, isLoading: instancesLoading } = useQuery(["invidiousInstances"], async() => {
    const { data } = await axios.get<InstancesResponse>("https://api.invidious.io/instances.json")
    console.log(data)
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
    }) || []
  }, [instances])

  return {
    instances: httpsInstances,
    instancesLoading
  }
}
