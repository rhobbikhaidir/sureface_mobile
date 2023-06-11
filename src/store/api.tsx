import {
    getUniqueId,
    getBrand,
    getModel,
    getSystemName,
    getSystemVersion,
    getVersion
  } from 'react-native-device-info'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/query/react'
import CONSTANT from '../modules/constant' 
import { UserProps } from 'modules/types'
import { getTimeZone } from 'react-native-localize'

const baseQuery = fetchBaseQuery({
  baseUrl: CONSTANT.URL_BASE,
  prepareHeaders: (headers, { getState }) => {
    const user = getState() as { user: UserProps }

    if (user && user.user && user.user.token) {
      headers.set('Authorization', `Bearer ${user.user.token}`)
    }
  }
})

const fetchBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions)
  return result
}


export const headers = async (
    {
      useContentType = true,
      contentType = 'application/json'
    }: {
      useContentType?: boolean
      contentType?: string
    } = { useContentType: true, contentType: 'application/json' }
  ) => {
    const header = new Headers()
  
    header.append('Accept-Language', CONSTANT.DEFAULT_LANGUAGE)
    header.append('Access-Control-Allow-Origin', '*')
    header.append('X-AppVersion', getVersion())
    header.append('X-DeviceId', (await getUniqueId()).toString())
    header.append('X-DeviceManufacturer', getBrand())
    header.append('X-DeviceModel', getModel(),)
    header.append('X-OSName', getSystemName())
    header.append('X-OSVersion', getSystemVersion())
    header.append('X-TimeZone', getTimeZone())
    // header.append('X-Notes', `Browser: ${browserName} v${fullBrowserVersion}`)
  
    if (useContentType) {
      header.append('Content-Type', contentType)
    }
  
    return header
  }


  export const API = createApi({
    reducerPath: 'API',
    baseQuery: fetchBase,
    endpoints: () => ({})
  })
  
