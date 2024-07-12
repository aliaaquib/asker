import { type ClassValue, clsx } from "clsx";
import { type Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
}

export function constructMetadata({
  title = "Asker - Chat with your documents",
  description = "Asker is a SAAS product which allows you to have conversations with any PDF documents. ",
  image = "/thumbnail.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "reactjs",
      "nextjs",
      "vercel",
      "react",
      "ai",
      "artificial-intelligence",
      "machine-learning",
      "ai-chat",
      "shadcn",
      "shadcn-ui",
      "radix-ui",
      "cn",
      "clsx",
      "asker",
      "realtime-chat",
      "summarize-pdf",
      "pdf-ai",
      "langchain",
      "openai",
      "neon-db",
      "sonner",
      "zustand",
      "zod",
      "sql",
      "postgresql",
      "aiven",
      "lucide-react",
      "next-themes",
      "postcss",
      "prettier",
      "react-dom",
      "tailwindcss",
      "tailwindcss-animate",
      "ui/ux",
      "js",
      "javascript",
      "typescript",
      "eslint",
      "html",
      "css",
    ] as Array<string>,
    authors: {
      name: "Aaquib Ali",
      url: "https://github.com/aliaaquib",
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@imaaquibali",
    },
    // metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    // ...(noIndex && {
    //   robots: {
    //     index: false,
    //     follow: false,
    //   },
    // }),
  };
}
