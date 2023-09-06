import { FunctionComponent } from "react"
import { Card, Image, Text, Badge, Group, Stack, AspectRatio } from '@mantine/core'
import { Video } from "$types/common"
import { secondsToDuration } from "$helpers/time"
import { useNavigate } from "react-router-dom"

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
  const navigate = useNavigate()
  return (
    <Card
      component="a"
      onClick={() => navigate(`/watch/${videoId}`)}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <AspectRatio ratio={16 / 9} style={{
          position: "relative"
        }}>
          <div>
            <Badge
              color="dark"
              variant="filled"
              style={{
                position: "absolute",
                zIndex: 1,
                bottom: 10,
                right: 10
              }}
            >
              {secondsToDuration(lengthSeconds)}
            </Badge>
          </div>

          <Image
            withPlaceholder
            src={videoThumbnails[1].url}
            alt="Norway"
            fit="contain"
          />
        </AspectRatio>
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
