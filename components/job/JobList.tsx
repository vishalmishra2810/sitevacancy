import React from 'react';
import JobDetails from './jobDetails/JobDetails';
import LeftSideBar from './leftSideBar/LeftSideBar';

function JobList() {
    return (
        <div className="w-[var(--max-width)] mx-auto p-[24px]">
            <div className="flex">
                <LeftSideBar />
                <JobDetails jobs={[]} />
            </div>
        </div>
    );
}

export default JobList;
