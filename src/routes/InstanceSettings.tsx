import Instances from "$components/Instances"
import useInstance from "$hooks/useInstance"
import { Button, Group, Stack, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { FunctionComponent, useEffect } from "react"

type SetInstanceForm = {
  instanceUrl: string
}

const InstanceSettings: FunctionComponent = () => {
  const { instance, setInstance } = useInstance()

  const { onSubmit, setValues, getInputProps } = useForm<SetInstanceForm>({
    initialValues: {
      instanceUrl: instance
    }
  })

  useEffect(() => {
    setValues({
      instanceUrl: instance
    })
  }, [instance, setValues])

  const handleSubmit = async(values: SetInstanceForm): Promise<void> => {
    await setInstance(values.instanceUrl)
  }

  return (
    <Stack>
      <form onSubmit={onSubmit(handleSubmit)}>
        <Group spacing={"xs"}>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Instance URL ex.: https://invidious.andrealin.it"
            // icon={<IconSearch size={sizes.icon} />}
            aria-label="Instance url"
            {...getInputProps("instanceUrl")}
          />
          <Button type="submit">
            Set instance
          </Button>
        </Group>
      </form>
      <Instances />
    </Stack>
  )
}

export default InstanceSettings
