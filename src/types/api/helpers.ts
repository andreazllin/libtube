/* eslint-disable @typescript-eslint/no-explicit-any */
import { Require } from "$types/utils"
import { AxiosRequestConfig, AxiosResponse } from "axios"

type RequestOptions<ResponseDataType> = Require<AxiosRequestConfig<ResponseDataType>, | "baseURL">

export type ApiResponse<ResponseDataType, RequestBodyDataType> = Promise<AxiosResponse<ResponseDataType, RequestBodyDataType>>

export type ApiEndpoint<ResponseDataType, RequestCustomParams = undefined, RequestBodyDataType = any> =
  RequestCustomParams extends undefined
  ? (options: RequestOptions<RequestBodyDataType>) => ApiResponse<ResponseDataType, RequestBodyDataType>
  // If RequestCustomParams is defined, then we need to have params as function argument
  : (options: RequestOptions<RequestBodyDataType>, params: RequestCustomParams) => ApiResponse<ResponseDataType, RequestBodyDataType>
