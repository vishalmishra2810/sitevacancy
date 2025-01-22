import { useRef, useState } from 'react';

const FaqsCard = (props: any) => {
    const answerElRef: any = useRef();
    const [state, setState] = useState(false);
    const [answerH, setAnswerH] = useState('0px');
    const { faqsList, idx } = props;

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight;
        setState(!state);
        setAnswerH(`${answerElH + 20}px`);
    };

    return (
        <div className="space-y-3 mt-5 overflow-hidden border-b" key={idx} onClick={handleOpenAnswer}>
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {state ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                )}
            </h4>
            <div ref={answerElRef} className="duration-300" style={state ? { height: answerH } : { height: '0px' }}>
                <div>
                    <p className="text-gray-500">{faqsList.a}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqsList = [
        {
            q: 'What is Site Vacancy?',
            a: 'Site Vacancy is a job-searching platform that connects job seekers with employers, offering opportunities across various industries and locations.'
        },
        {
            q: 'How can I search for jobs on Site Vacancy?',
            a: 'You can use the search bar on our homepage to filter jobs by keywords, location, or job type. Advanced filters are also available for a more specific search.'
        },
        {
            q: 'Do I need an account to apply for jobs?',
            a: 'Yes, creating an account allows you to save job listings, apply for jobs, and receive personalized recommendations.'
        },
        {
            q: 'How can I create a profile?',
            a: 'Click on the "Sign Up" button, provide your details, upload your resume, and complete your profile to start applying for jobs.'
        },
        {
            q: 'Are there fees for using Site Vacancy?',
            a: 'No, Site Vacancy is completely free for job seekers. Employers may have the option to purchase premium services.'
        },
        {
            q: 'How can I ensure my resume is seen by employers?',
            a: 'Make sure your profile is complete and up-to-date, and consider using keywords related to the jobs you’re applying for.'
        },
        {
            q: 'Can I save jobs to apply later?',
            a: 'Yes, you can save jobs by clicking the "Save Job" button on any listing. You can find your saved jobs in your profile.'
        },
        {
            q: 'How do I contact an employer after applying?',
            a: 'If the employer allows direct contact, their details will be shared after you’ve submitted your application.'
        },
        {
            q: 'What types of jobs can I find on Site Vacancy?',
            a: 'Site Vacancy lists full-time, part-time, freelance, remote, and internship opportunities across various fields.'
        },
        {
            q: 'How do I report a fraudulent job posting?',
            a: 'If you suspect a job listing is fraudulent, use the "Report Job" option on the listing or contact our support team immediately.'
        }
    ];

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mb-60 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">Frequently Asked Questions</h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {faqsList.map((item, idx) => (
                    <FaqsCard idx={idx} faqsList={item} key={idx} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;