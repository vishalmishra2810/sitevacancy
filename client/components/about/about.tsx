import React from 'react'

function About() {
    return (
        <div><section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        About <span className="text-purple-700">SiteVacancy</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        SiteVacancy is your trusted platform for finding the perfect job or the right talent.
                        Our mission is to bridge the gap between employers and job seekers, offering a seamless and
                        efficient experience. Whether you're searching for your dream job or building your dream team,
                        SiteVacancy has you covered.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            To create a world where everyone has equal opportunities to find the right job,
                            regardless of location, background, or industry.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            We aim to connect talent with opportunities by leveraging the latest technology
                            and offering a user-friendly platform to simplify recruitment.
                        </p>
                    </div>
                </div>
                <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                    <a
                        href="/job-list"
                        className="bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-purple-800"
                    >
                        Browse Jobs
                    </a>
                    <a
                        href="/contact"
                        className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section></div>
    )
}

export default About