import Footer from '@/common/footer/Footer';
import Header from '@/common/header/Header';
import FAQ from '@/components/faq/FAQ';
import React from 'react';

function faq() {
    return (
        <div className="remove-scrollBar flex flex-col w-full h-[100vh] bg-secondaryWhite">
            <Header />
            <FAQ />
            <Footer />
        </div>
    );
}

export default faq;
