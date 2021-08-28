import React from 'react'
import { useState, useEffect } from 'react';
import "../pages/index.css"
import images from "../images/image-header-desktop.jpg"
import imagesMobile from "../images/image-header-mobile.jpg"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


function CardPages() {

    const {height, width} = useWindowDimensions();
    console.log(`height : ${height} | width : ${width}`);

    return (
        <section className={styles.section} id="mySection">

            <div className="flex flex-col m-6 card md:flex-row rounded-3xl ">
                <div className="order-2 w-full my-auto py-auto md:max-w-xl md:px-16 md:order-first">
                    <div>
                        <h1 className="px-8 mb-4 text-2xl font-bold text-center text-white md:text-4xl md:text-left mt-9 md:mb-8">Get <span className="text-purple-700 font">insights</span> that help
                            your business grow.</h1>
                        <p className="px-8 text-center text-gray-400 md:text-left">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall officiency</p>
                    </div>

                    <div className="flex flex-col justify-between px-8 mt-10 text-center md:text-left mb-7 md:mb-0 md:flex-row md:mt-16 gap-9">
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
                    <div className="img-wrapper md:rounded-r-3xl rounded-t-3xl">
                        <img src={(width> 767) ? images : imagesMobile } alt="images" className="h-full rounded-t-3xl md:rounded-r-3xl"/>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default CardPages

const styles = {
    section : "flex min-h-screen justify-center items-center"
}