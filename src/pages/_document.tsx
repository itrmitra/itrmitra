import { Html, Head, Main, NextScript } from "next/document";
import { cn } from "../lib/utils";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-100 text-secondary min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
