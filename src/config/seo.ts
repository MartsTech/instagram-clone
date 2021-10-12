import { DefaultSeoProps } from "next-seo";

export const baseUrl = "https://instagram-clone-martstech.vercel.app";

export const defaultSEO: DefaultSeoProps = {
  title: "Instagram Clone",
  description:
    "Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Instagram Clone",
    images: [
      {
        url: `${baseUrl}/meta/icon.png`,
        alt: "Instagram Clone",
      },
    ],
  },
};
