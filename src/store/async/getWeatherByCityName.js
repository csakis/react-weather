// import {createAsyncThunk} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_KEY} from "../../../env/";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (builder) => ({
    getWeatherByCityName: builder.query({
      query: (name) => `weather?q=${name}&appid=${API_KEY}`,
    }),
    getForecastByCityName: builder.query({
      query: (name) => `forecast?q=${name}&appid=${API_KEY}`,
    }),

  }),

});

export const {useGetWeatherByCityNameQuery, useGetForecastByCityNameQuery} = weatherApi;
