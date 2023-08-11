import { sizes } from "$constants/sizes"
import useInstance from "$hooks/useInstance"
import { Paper, Table, Skeleton, ActionIcon } from "@mantine/core"
import { IconApi } from "@tabler/icons-react"
import { FunctionComponent } from "react"

const Instances: FunctionComponent = () => {
  const { instances, instancesLoading, setInstance } = useInstance()

  return (
    <Skeleton visible={instancesLoading}>
      <Paper p={"lg"}>
        <Table verticalSpacing={"sm"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Version</th>
              <th>Health</th>
              <th>Location</th>
              <th align="center">Set</th>
            </tr>
          </thead>
          <tbody>
            {
              instances.map(([name, data]) => {
                return (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>{data.stats?.software.version}</td>
                    <td>{data.monitor?.["30dRatio"].ratio}%</td>
                    <td>{data.flag} - {data.region}</td>
                    <td>
                      <ActionIcon onClick={() => setInstance(data.uri)}>
                        <IconApi size={sizes.icon} />
                      </ActionIcon>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Paper>
    </Skeleton>
  )
}

export default Instances
