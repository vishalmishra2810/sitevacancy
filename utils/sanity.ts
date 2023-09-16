import { createClient } from "@sanity/client";

//check if local then don't use cdn
const isLocal = process.env.NODE_ENV === "development";

export const client = createClient({
  projectId: "6gj2z5og",
  dataset: "production",
  useCdn: isLocal ? false : true,
  token:
    "skV78n6tr7GYFIHcimKMgLiSeKAHsQyl1UJXZAf3BhGbRXD1zFsGK85jCeOu8u6ghcErQXI0LX81w6oaRoWSUeha8VoOG3UWrxflov0jbFWmkEPthyxeYx0Gj61v7KEy1v0ECGkg1cnKsYO4knogHSsZIlFdIfaYn7rsThdltPZq25nVuXLB",
});
