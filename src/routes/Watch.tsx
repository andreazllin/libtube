import useInstance from "$hooks/useInstance"
import { Button, Group, Text } from "@mantine/core"
import { FunctionComponent, useState } from "react"
import VideoPlayer from "$components/VideoPlayer"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { api } from "$api"
import { V1Videos } from "$types/api/endpoints/v1Videos"
import { useNavigate } from "react-router-dom"

const Watch: FunctionComponent = () => {
  const { videoId } = useParams()
  const { instance } = useInstance()
  const navigate = useNavigate()
  const [pip, setPip] = useState(false)

  const { data: videoData, isLoading: videoLoading, error: videoError } = useQuery<V1Videos>(["video", videoId], async() => {
    const res = await api.videos.v1Videos({
      baseURL: instance
      // We can assume that videoId is defined as string because of
      // the type of useParams and enabled is set to true if videoId is defined
    }, { id: videoId as string })

    return res.data
  }, {
    enabled: !!videoId
  })

  if (videoLoading) {
    return (
      <>
        <Group position="center">
          <Text>Loading...</Text>
        </Group>
      </>
    )
  }

  if (!videoData) {
    navigate("/")
    return
  }

  return (
    <>
      <pre>
        {JSON.stringify(videoError, null, 2)}
      </pre>

      <VideoPlayer
        url={videoData.formatStreams[videoData.formatStreams.length - 1].url}
        pip={pip}
      />

      <Text weight={600} size={"xl"}>
        {videoData.title}
      </Text>

      <Button onClick={(): void => {
        setPip(value => !value)
      }}>
        Toggle PiP
      </Button>

      {/* <pre>
        {JSON.stringify(videoData.formatStreams, null, 2)}
        {JSON.stringify(videoData, null, 2)}
      </pre> */}
    </>
  )
}

export default Watch
