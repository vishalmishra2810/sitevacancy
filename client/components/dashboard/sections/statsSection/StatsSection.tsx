const StatsSection = () => {

    const stats = [
        {
            data: "35K",
            desc: "Customers consectetur adipiscing elit."
        },
        {
            data: "10K+",
            desc: "Downloads efficitur id eu nulla facilisis turpis"
        },
        {
            data: "40+",
            desc: "Countries maximus sit amet auctor sed,"
        },
        {
            data: "30M+",
            desc: "Total revenue consectetur adipiscing elit"
        },
    ]

    return (
        <section className="py-28 ">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl xl:mx-auto xl:text-center">
                    <h3 className="text-primaryBlack text-3xl font-OpenSans font-semibold sm:text-4xl">
                        Our customers are always happy
                    </h3>
                    <p className="mt-3 text-primaryBlack">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="sm:max-w-[15rem]">
                                    <h4 className="text-4xl text-PrimaryBlack font-semibold">{item.data}</h4>
                                    <p className="mt-3 text-primaryBlack font-medium">{item.desc}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default StatsSection;