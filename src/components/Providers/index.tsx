import { FunctionComponent, PropsWithChildren } from "react"
import QueryWrapper from "./QueryWrapper"
import MantineWrapper from "./MantineWrapper"

const Providers: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <MantineWrapper>
      <QueryWrapper>
        {children}
      </QueryWrapper>
    </MantineWrapper>
  )
}

export default Providers
