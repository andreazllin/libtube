import { FunctionComponent, PropsWithChildren } from "react"
import ReactPlayer, { ReactPlayerProps } from "react-player"
import { Box } from "@mantine/core"
interface Props extends ReactPlayerProps {
  url: string
}

const VideoPlayer: FunctionComponent<Props> = ({
  url,
  ...props
}) => {
  return (
    <>
      <ReactPlayer
        url={url}
        controls={true}
        {...props}
        style={{
          position: "absolute"
        }}
        wrapper={Wrapper}
      />
    </>
  )
}

const Wrapper: FunctionComponent<PropsWithChildren> = ({
  children
}) => {
  return(<>
    <Box sx={() => ({
      width: "100%",
      position: "relative"
    })}>
      {/* <Overlay color="#000" opacity={0.75} zIndex={0}>
        <Button></Button>
      </Overlay> */}
      {children}
    </Box>
  </>
  )
}

export default VideoPlayer
