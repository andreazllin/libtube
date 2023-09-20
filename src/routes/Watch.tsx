import useInstance from "$hooks/useInstance"
import { Button, Group, Text } from "@mantine/core"
import axios from "axios"
import { FunctionComponent, useState } from "react"
import VideoPlayer from "$components/VideoPlayer"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

const Watch: FunctionComponent = () => {
  const { videoId } = useParams()
  const { instance } = useInstance()
  const [pip, setPip] = useState(false)
  const { data: videoData, isLoading: videoLoading, error: videoError } = useQuery(["video", videoId], async() => {
    const res = await axios.get(`/api/v1/videos/${videoId}`, {
      baseURL: instance
    })
    console.log(res.data)
    return res.data
  })

  if (videoLoading && !videoData) {
    return (
      <>
        <Group position="center">
          <Text>Loading...</Text>
        </Group>
      </>
    )
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
        {videoData?.title}
      </Text>

      <Button onClick={() => {
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
