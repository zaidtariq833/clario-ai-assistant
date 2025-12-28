import {
  geistMedium,
  geistRegular,
  geistSemiBold,
  interLight,
  interMedium,
  interRegular,
  interSemiBold,
} from "@/styles/fonts";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "react-responsive-modal/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div
        className={`
      ${geistMedium.variable} 
      ${geistRegular.variable} 
      ${geistSemiBold.variable} 
      ${interRegular.variable} 
      ${interSemiBold.variable} 
      ${interMedium.variable} 
      ${interLight.variable}
    `}
      >
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
