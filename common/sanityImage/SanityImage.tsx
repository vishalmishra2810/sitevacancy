import Image from "next/image";
import React from "react";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/utils/sanity";

function SanityImage({ img }: any) {
  const imageProps: any = useNextSanityImage(client, img);
  return (
    <Image
      {...imageProps}
      width={50}
      height={50}
      placeholder="blur"
      sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,40vw"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wr4f+gAAAABJRU5ErkJggg=="
    />
  );
}

export default SanityImage;
