import { FunctionComponent } from "react"
import { Card, Image, Text, Badge, Group, Stack } from '@mantine/core'
import { Video } from "$types/common"
import { secondsToDuration } from "$helpers/time"

type Data = "title" | "author" | "viewCountText" | "videoId" | "publishedText" | "lengthSeconds" | "videoThumbnails"
type Props = Pick<Video, Data>

const VideoCard: FunctionComponent<Props> = ({
  title,
  author,
  viewCountText,
  videoId,
  publishedText,
  lengthSeconds,
  videoThumbnails
}) => {
  return (
    <Card
      component="a"
      href={`https://youtube.com/watch?v=${videoId}`}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section style={{
        position: "relative"
      }}>
        <Badge
          color="gray"
          variant="light"
          style={{
            position: "absolute",
            zIndex: 1,
            bottom: 10,
            right: 10
          }}
        >
          {secondsToDuration(lengthSeconds)}
        </Badge>
        <Image
          withPlaceholder
          src={videoThumbnails[1].url}
          height={160}
          alt="Norway"
        />

      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
      </Group>

      <Stack spacing={0}>
        <Text size="sm" color="dimmed">
          {author}
        </Text>
        <Text size="sm" color="dimmed">
          {viewCountText} • {publishedText}
        </Text>
      </Stack>
    </Card>
  )
}

export default VideoCard
