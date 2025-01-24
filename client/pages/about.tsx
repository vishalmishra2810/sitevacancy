import Footer from '@/common/footer/Footer';
import Header from '@/common/header/Header';
import About from '@/components/about/about';
import React from 'react';

function about() {
    return (
        <div className="remove-scrollBar flex flex-col w-full h-[100vh] bg-secondaryWhite">
            <Header />
            <About/>
            <Footer />
        </div>
    );
}

export default about
