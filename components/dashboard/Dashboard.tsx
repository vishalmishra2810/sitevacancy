import Footer from '@/common/footer/Footer';
import React from 'react';
import ApplySections from './sections/applySection/ApplySection';
import CategorySection from './sections/catergorySection/CategorySection';
import ConnectUs from './sections/connectUsSection/ConnectUs';
import ExcitingJob from './sections/excitingJobSection/ExcitingJob';
import ExploreSection from './sections/exploreSection/ExploreSection';
import FeatureSection from './sections/featureSection/FeatureSection';
import PostJobSection from './sections/postJobSection/PostJobSection';
import TestimonialSection from './sections/testimonialSection/TestimonialSection';
import TopSection from './sections/topSection/TopSection';

function Dashboard() {
    return (
        <div className="remove-scrollBar flex flex-col w-full h-[100vh] bg-secondaryWhite">
            <TopSection />
            <ApplySections />
            <FeatureSection />
            <CategorySection />
            <PostJobSection />
            <ExcitingJob />
            <ExploreSection />
            <TestimonialSection />
            <ConnectUs />
            <Footer />
        </div>
    );
}

export default Dashboard;
