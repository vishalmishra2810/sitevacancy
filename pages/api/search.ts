import { client } from "@/utils/sanity";

export default async function handler(req: any, res: any) {
  const { query } = req.query;
  try {
    const articles = await client.fetch(`*[_type == 'jobListing' && jobTitle match '${query}*']`);
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while searching." });
  }
}
