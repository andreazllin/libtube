import { FunctionComponent } from "react"
import { Card, Group, Stack, AspectRatio, Skeleton } from "@mantine/core"

const VideoCardSkeleton: FunctionComponent = () => {
  return (
    <Card
      component="a"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <Skeleton>
          <AspectRatio ratio={16 / 9} style={{
            position: "relative"
          }}>
          </AspectRatio>
        </Skeleton>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Skeleton height={24} mt={6} width="90%" radius="xl" />
      </Group>

      <Stack spacing={0}>
        <Skeleton height={18} mt={6} width="30%" radius="xl" />
        <Skeleton height={18} mt={6} width="50%" radius="xl" />
      </Stack>
    </Card>
  )
}

export default VideoCardSkeleton
