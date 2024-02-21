import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone, faWheatAwn, faIndustry, faTag } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AboutImage from '../../assets/about/about_img.jpg';
import MaizeImage from '../../assets/about/corn.png';

export default function About() {
    const phoneNumber = '+919567192388';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

    return (
        <>
            <section id="about">
                <div class="container">
                    <div className="title_headling">
                        <h3>Discover Vygha Cattle Feed: Your Trusted Source Since 2003</h3>
                        <p>For nearly two decades, Vygha Cattle Feed has been a reliable name in providing top-quality cattle feed, specifically crafted with Maize Power. Our journey began in 2003, and since then, we have remained committed to delivering excellence in livestock nutrition.</p>
                    </div>
                    <div className="about_box_wrapper">
                        <div className="about_box">
                            <div className="about_icon">
                                <FontAwesomeIcon icon={faWheatAwn} style={{ color: "#ddc41d", }} />
                            </div>
                            <div className="about_content">
                                <h5>Harvesting Premium Maize Selection</h5>
                                <p>Our process begins with meticulous harvesting and selection of the finest quality Maize. We ensure that only the best, nutrient-rich Maize kernels make their way to our facility</p>
                            </div>
                        </div>
                        <div className="about_box">
                            <div className="about_icon green_icon">
                                <FontAwesomeIcon icon={faIndustry} style={{ color: "#3dcb15", }} />
                            </div>
                            <div className="about_content">
                                <h5>Precise Factory Milling and Packaging</h5>
                                <p>At our state-of-the-art factory, these superior Maize are expertly milled to perfection, transforming them into high-quality maize powder. This powder is then carefully packed to preserve its freshness and nutritional value</p>
                            </div>
                        </div>
                        <div className="about_box">
                            <div className="about_icon blue_icon">
                                {faTruckFastIcon}
                            </div>
                            <div className="about_content">
                                <h5>Efficient Delivery</h5>
                                <p>Once packaged, our Maize Power cattle feed is promptly dispatched using our reliable transportation network, ensuring that it reaches your farm in the most efficient and timely manner, ready to enhance the well-being of your livestock</p>
                            </div>
                        </div>
                    </div>

                    <div className="about_box_details">
                        <div className="about_col">
                            <div className="about_image">
                                <img src={AboutImage} alt="about" className="about_main" />
                            </div>
                            <div className="img_info__box">
                                <h6 className="img_info__title">Contact US</h6>
                                <p><span className='logoName'>VYGHA POULTRY AND CATTLE FEEDS</span>
                                    <br />
                                    16/433
                                    <br />
                                    Mylambadi post
                                    <br />
                                    Meenagadi,
                                    Wayanad,
                                    673591
                                </p>
                                <a href={`tel:${phoneNumber}`}>{faPhoneIcon} <span>+91 9567 1923 88</span></a>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
                                </a>

                            </div>
                        </div>
                        <div className="about_col more_space">
                            <h3>Our Maize powder</h3>
                            <p>Experience the difference that Vygha Cattle Feed can make for your cattle. Join the ranks of satisfied farmers who have witnessed the transformative effects of our products. Order now and ensure that your livestock receives the nutrition they deserve, delivered with the convenience of our own transportation facility. Trust Vygha—where experience meets excellence in cattle nutrition.</p>

                            <div className="grid_info">
                                <div className="icon"><FontAwesomeIcon icon={faTag} /></div>
                                <div className="detail">
                                    <p>25 Kg (when Packed) </p>
                                </div>
                            </div>
                            <div className="grid_info">
                                <div className="icon green_icon"><FontAwesomeIcon icon={faTag} /></div>
                                <div className="detail">
                                    <p>50 Kg (when Packed)</p>
                                </div>
                            </div>
                            <div>
                                <img src={MaizeImage} width="300px" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
