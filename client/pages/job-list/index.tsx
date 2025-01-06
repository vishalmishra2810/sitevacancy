import Header from '@/common/header/Header';
import JobList from '@/components/job/JobList';
import React from 'react';

function Jobs() {
    return (
        <div className="remove-scrollBar flex flex-col w-full h-[100vh]">
            <Header />
            <JobList />
        </div>
    );
}
export default Jobs;
