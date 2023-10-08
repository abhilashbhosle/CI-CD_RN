import { configureStore } from "@reduxjs/toolkit";
import counterRducer from '../HomeController'

export const store = configureStore({
    reducer: {
        counter: counterRducer,
      },
});