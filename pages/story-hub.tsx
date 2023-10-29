import Header from '@/common/header/Header';
import StoryHub from '@/components/story/story';
import React from 'react';

function faq() {
    return (
        <div className="remove-scrollBar flex flex-col w-full h-[100vh] bg-secondaryWhite">
            <Header />
            <StoryHub />
        </div>
    );
}

export default faq;
