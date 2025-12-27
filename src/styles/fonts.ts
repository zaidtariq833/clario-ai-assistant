import { Geist, Inter } from "next/font/google";

export const geistMedium = Geist({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-geist-medium",
});

export const geistRegular = Geist({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-geist-regular",
});

export const geistSemiBold = Geist({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-geist-semibold",
});

export const geistBold = Geist({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-geist-bold",
});

export const interRegular = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter-regular",
});

export const interSemiBold = Inter({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-inter-semibold",
});

export const interMedium = Inter({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-inter-medium",
});

export const interLight = Inter({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-inter-light",
});
