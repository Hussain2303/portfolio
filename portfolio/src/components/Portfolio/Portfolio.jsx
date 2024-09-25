import React from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import MDS from "../../img/mds.webp"
import Portal from "../../img/Portal.webp"
import Education from "../../img/education.webp"
import Port from "../../img/port.webp"
import Netflix from "../../img/netflix.webp"
import useTheme from '../../context/Context';

const portFolioDate = [
    {
        img: MDS,
        title: "Ecommerce Store",
        link: "https://mds-delights.netlify.app/"
    },
    {
        img: Portal,
        title: "Student Portal Full",
        link: "https://daniyalportal.netlify.app/"
    },
    {
        img: Education,
        title: "IELTS Website",
        link: "https://www.linkedin.com/posts/daniyalsohail169_webdevelopment-frontenddeveloper-reactjs-activity-7220541707119960064-VPvf?utm_source=combined_share_message&utm_medium=member_desktop"
    },
    {
        img: Port,
        title: "Portfolio Wbesite",
        link: "https://www.linkedin.com/posts/daniyalsohail169_react-js-portfolio-website-activity-7221283345320583168-JglY?utm_source=combined_share_message&utm_medium=member_desktop"
    },
    {
        img: Netflix,
        title: "Netflix UI",
        link: "https://www.instagram.com/reel/C6EZUNpIPBK/?igsh=cGNhanRldGR1YzJ4"
    },

]

function Portfolio() {

    const { themeMode } = useTheme()

    return (
        <div className="portfolio" >

            <span style={{ color: themeMode === "dark" ? "#00FFFF" : "" }} data-aos="slide-right">Portfolio</span>


            <div className="portfolioContainer">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1} // Initially show 1 slide per view
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1050: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {portFolioDate.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="portBox">
                                <div className="imgbox">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="portCont">
                                    <span style={{ color: themeMode === "dark" ? "white" : "" }}> {item.title}</span>
                                    {item.link !== " " ?
                                        (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <button>Visit</button>
                                            </a>
                                        ) : (
                                            <button>Soon</button>
                                        )
                                    }


                                </div>
                            </div>


                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}

export default Portfolio