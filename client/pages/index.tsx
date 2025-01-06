import Dashboard from '@/components/dashboard/Dashboard';
import Head from 'next/head';

export default function Home() {

    return (
        <>
            <Head>
                <title>SiteVacancy - Find Your Dream Job</title>
                <meta
                    name="description"
                    content="Explore a wide range of job opportunities, including front-end, back-end, AI, and more on our job site. Start your job search today!"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/siteVacancyFav.svg" />

                {/* Structured Data for Google */}
                {/* <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.yourjobsite.com/",
            "name": "Your Job Site",
            "description": "Discover a variety of job listings, including front-end, back-end, AI, and more. Start your job search today!",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.yourjobsite.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }`
                    }}
                /> */}

                {/* Open Graph Meta Tags for Social Sharing */}
                <meta property="og:title" content="SiteVacancy - Find Your Dream Job" />
                <meta
                    property="og:description"
                    content="Discover a variety of job listings, including front-end, back-end, AI, and more. Start your job search today!"
                />
                <meta property="og:image" content="/siteVacancy.svg" />
                <meta property="og:url" content="https://www.sitevacancy.com/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags for Social Sharing */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SiteVacancy - Find Your Dream Job" />
                <meta
                    name="twitter:description"
                    content="Explore a wide range of job opportunities, including front-end, back-end, AI, and more on our job site. Start your job search today!"
                />
                <meta name="twitter:image" content="/siteVacancy.svg" />
            </Head>
            <Dashboard />
        </>
    );
}
