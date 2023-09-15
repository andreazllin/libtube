import { FunctionComponent } from "react";
import { QueryClient, QueryClientProvider, QueryClientProviderProps } from "react-query";

export const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 2 } } })

interface Props extends Omit<QueryClientProviderProps, "client"> { }

const QueryWrapper: FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  return (
    <QueryClientProvider
      client={queryClient}
      {...props}
    >
      {children}
    </QueryClientProvider>
  )
}

export default QueryWrapper
