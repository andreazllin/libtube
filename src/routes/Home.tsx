import { FunctionComponent } from "react"
import { Text, Group, SimpleGrid } from "@mantine/core"
import VideoCard from "$components/VideoCard"
import { useQuery } from "react-query"
import { V1Trending } from "$types/api"
import axios from "axios"
import useInstance from "$hooks/useInstance"

const Home: FunctionComponent = () => {
  const { instance } = useInstance()

  const { data: trending, isLoading: trendingLoading } = useQuery<V1Trending>(["trendingVideos"], async() => {
    const res = await axios.get<V1Trending>("/api/v1/trending", {
      baseURL: instance
    })
    console.log(res.data)
    return res.data
  })

  if (trendingLoading) {
    return (
      <>
        <Group position="center">
          <Text>Loading...</Text>
        </Group>
      </>
    )
  }

  if (!trending) {
    return (
      <Text>No data received (???)</Text>
    )
  }

  return (
    <>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "lg", cols: 3, spacing: "md" },
          { maxWidth: "md", cols: 2, spacing: "md" },
          { maxWidth: "xs", cols: 1, spacing: "sm" }
        ]}
      >
        {
          trending.map((video) => {
            return (
              <VideoCard
                key={video.videoId}
                title={video.title}
                author={video.author}
                viewCountText={video.viewCountText}
                videoId={video.videoId}
                publishedText={video.publishedText}
                lengthSeconds={video.lengthSeconds}
                videoThumbnails={video.videoThumbnails}
              />
            )
          })
        }
      </SimpleGrid>
      {/* <Divider my="xl" size="sm" /> */}
    </>
  )
}

export default Home
