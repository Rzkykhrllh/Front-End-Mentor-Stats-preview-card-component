import React from 'react'
import "../pages/index.css"

function CardPages() {
    return (
        <section className="flex h-screen justify-center items-center" id="mySection">

            <div className="card flex flex-row rounded-3xl">
                <div className="kiri max-w-komunis w-full">
                    <div>

                        <h1 className="font-bold text-4xl text-left text-white mb-8">Get <span className=" text-purple-700 font">insights</span> that help
                            your business grow.</h1>

                        <p className=" text-gray-200">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall officiency</p>
                    </div>

                    <div className="flex justify-between mt-16">
                        <div>
                            <h2>10k+</h2>
                            <p>COMPANIES</p>
                        </div>

                        <div>
                            <h2>314</h2>
                            <p>Templates</p>
                        </div>

                        <div>
                            <h2>12M+</h2>
                            <p>Queries</p>
                        </div>
                    </div>
                </div>


                <div className="kanan">
                    <h2>Kanan</h2>
                </div>
            </div>


        </section>
    )
}

export default CardPages
