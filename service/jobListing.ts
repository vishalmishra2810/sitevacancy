import { client } from "@/utils/sanity";

export async function fetchJobs() {
  try {
    const query = '*[_type == "jobListing"]'; // Define your query
    const jobListings = await client.fetch(query);
    return jobListings;
  } catch (error) {
    throw error;
  }
}
