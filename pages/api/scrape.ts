import cheerio from "cheerio";
import axios from "axios";

export default async function handler(req: any, res: any) {
  const url = "https://example.com/careers";
  const response = await axios.get(url);
  const html = response.data;
  const $ = cheerio.load(html);

  const jobs: any = [];

  $(".job-post").each((index, element) => {
    const title = $(element).find(".job-title").text().trim();
    const location = $(element).find(".job-location").text().trim();
    const date = $(element).find(".job-date").text().trim();
    const description = $(element).find(".job-description").text().trim();

    jobs.push({ title, location, date, description });
  });

  res.status(200).json(jobs);
}
