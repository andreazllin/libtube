import { FunctionComponent } from "react"
import { Text, Group, SimpleGrid } from "@mantine/core"
import VideoCard from "$components/VideoCard"
import { useQuery } from "react-query"
import { V1Trending } from "$types/api/endpoints/v1Trending"
import useInstance from "$hooks/useInstance"
import { api } from "$api"

const Home: FunctionComponent = () => {
  const { instance } = useInstance()

  const { data: trending, isLoading: trendingLoading } = useQuery<V1Trending>(["trendingVideos"], async() => {
    const res = await api.trending.v1Trending({ baseURL: instance })

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
