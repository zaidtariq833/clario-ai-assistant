import {
  geistMedium,
  geistRegular,
  geistSemiBold,
  interLight,
  interMedium,
  interRegular,
  interSemiBold,
} from "@/styles/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
