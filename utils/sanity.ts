import { createClient } from "@sanity/client";

//check if local then don't use cdn
const isLocal = process.env.NODE_ENV === "development";


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: isLocal ? false : true,
  token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN,
});
