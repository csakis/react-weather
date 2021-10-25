import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import {weatherApi} from "./async/getWeatherByCityName";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});
