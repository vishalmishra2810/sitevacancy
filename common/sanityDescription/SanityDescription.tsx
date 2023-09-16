import React from "react";
import { PortableText } from "@portabletext/react";

function SanityDescription({
  description,
  limit,
}: {
  description: any;
  limit: number;
}) {
  return (
    <PortableText
      value={description?.slice(0, limit)}
    />
  );
}

export default SanityDescription;
