import React from 'react';
import ApplySections from './sections/applySection/ApplySection';
import CategorySection from './sections/catergorySection/CategorySection';
import ExploreSection from './sections/exploreSection/ExploreSection';
import FeatureSection from './sections/featureSection/FeatureSection';
import PostJobSection from './sections/postJobSection/PostJobSection';
import TestimonialSection from './sections/testimonialSection/TestimonialSection';
import TopSection from './sections/topSection/TopSection';
import OurCustomer from './sections/ourCustomer/OurCustomer';
import Footer from '@/common/footer/Footer';
import StatsSection from './sections/statsSection/StatsSection';

function Dashboard() {
    return (
        <div className="remove-scrollBar flex flex-col w-full h-[100vh] bg-secondaryWhite">
            <TopSection />
            <CategorySection />
            <PostJobSection />
            <ApplySections />
            <StatsSection />
            <FeatureSection />
            <TestimonialSection />
            <ExploreSection />
            <OurCustomer />
            <Footer />
        </div>
    );
}

export default Dashboard;
