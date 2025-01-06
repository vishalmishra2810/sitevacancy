import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const RichTextEditor = dynamic(() => import('./Editor'), { ssr: false });

function JobPost() {
    return (
        <div className="bg-gray-400">
            <main className="main bg-white px-6 md:px-16 py-6">
                <div className="w-full max-w-xl mx-auto">
                    <form action="" method="post">
                        <h1 className="text-2xl mb-2">Post new job</h1>

                        <div className="job-info border-b-2 py-2 mb-5">
                            {/* Title */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="job-title">
                                    Title
                                </label>
                                <input
                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                                    type="email"
                                    id="job-title"
                                    name="job-title"
                                    placeholder="Frontend Developer"
                                    autoFocus
                                />
                            </div>

                            {/* Link to apply */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="apply-link">
                                    Link to Apply
                                </label>
                                <input
                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                                    type="email"
                                    id="apply-link"
                                    name="apply-link"
                                    placeholder="https://www.djangoproject.com/apply"
                                />
                            </div>

                            <div className="md:flex md:justify-between">
                                {/* Job Type */}
                                <div className="w-full md:w-3/12 mb-4 md:mb-0">
                                    <label className="block text-gray-700 text-sm mb-2" htmlFor="job-type">
                                        Job Type
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                                            id="job-type"
                                            name="job-type"
                                        >
                                            <option>Full-time</option>
                                            <option>Part-Time</option>
                                            <option>Freelance</option>
                                            <option>Contract</option>
                                        </select>

                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg
                                                className="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="w-full md:w-8/12 mb-4 md:mb-0">
                                    <label className="block text-gray-700 text-sm mb-2" htmlFor="location">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                                        id="location"
                                        name="location"
                                        placeholder="Schwerin"
                                    />

                                    <div>
                                        <label className="text-gray-600 flex items-center" htmlFor="remote">
                                            <input className="mr-2 leading-tight" type="checkbox" id="remote" />
                                            <span className="text-sm">Work can be done remotely</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="description">
                                    Description
                                </label>
                                <RichTextEditor />
                            </div>

                            <div className="flex flex-wrap -mx-3">
                                {/* Company */}
                                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                    <label className="block text-gray-700 text-sm mb-2" htmlFor="company">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                                        id="company"
                                        name="company"
                                        placeholder="Company"
                                    />
                                </div>

                                {/* Company Website */}
                                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                    <label className="block text-gray-700 text-sm mb-2" htmlFor="company-website">
                                        Company Website
                                    </label>
                                    <input
                                        type="text"
                                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                                        id="company-website"
                                        name="company-website"
                                        placeholder="https://www.djangoproject.com/"
                                    />
                                </div>
                            </div>

                            {/* Logo Image */}
                            <div className="mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="company-logo">
                                    Logo Image
                                </label>
                                <input
                                    type="file"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="company-logo"
                                    name="company-logo"
                                />
                            </div>
                        </div>

                        <div className="payment mb-6">
                            <h4 className="mb-2">Payment</h4>
                            <p className="bg-gray-200 py-3 text-center text-sm">
                                <span>
                                    <i className="far fa-credit-card"></i>
                                </span>
                                All jobs cost <strong>€300</strong> for 30 days.
                            </p>
                        </div>

                        {/* Submit */}
                        <div>
                            <button
                                className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded"
                                type="submit"
                            >
                                Create job
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default JobPost;
