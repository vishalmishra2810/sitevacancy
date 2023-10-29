import Footer from '@/common/footer/Footer';
import Header from '@/common/header/Header';
import JobPostForm from '@/components/jobPost/JobPost';
import React from 'react';

function post() {
    return (
        <div className="remove-scrollBar flex flex-col w-full h-[100vh] bg-secondaryWhite">
            <Header />
            <JobPostForm />
            <Footer />
        </div>
    );
}

export default post;
