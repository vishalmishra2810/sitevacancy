import Footer from '@/common/footer/Footer';
import Header from '@/common/header/Header';
import Contact from '@/components/contact/contact';
import React from 'react';

function contact() {
    return (
        <div className="remove-scrollBar flex flex-col w-full h-[100vh] bg-secondaryWhite">
            <Header />
            <Contact/>
            <Footer />
        </div>
    );
}

export default contact
