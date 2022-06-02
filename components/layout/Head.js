import NextHead from "next/head";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Charlotte Lucas | js frameworks | CA
      </title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
