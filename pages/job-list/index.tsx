import Header from "@/common/header/Header";
import JobList from "@/components/job/JobList";
import JobListing from "@/response/jobListing";
import { fetchJobs } from "@/service/jobListing";
import { GetServerSideProps } from "next";
import React from "react";

interface JobsProps {
  jobs: JobListing[];
}
function Jobs({ jobs }: JobsProps) {
  return (
    <>
      <Header />
      <JobList jobs={jobs} />
    </>
  );
}
export const getServerSideProps: GetServerSideProps<JobsProps> = async () => {
  try {
    const jobs = await fetchJobs();
    return {
      props: { jobs },
    };
  } catch (error) {
    return {
      props: {
        jobs: [], // Return an empty array or handle the error as needed
      },
    };
  }
};

export default Jobs;
