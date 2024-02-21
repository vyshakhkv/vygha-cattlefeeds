import React from 'react';
import './Home.css';
import BannerImage from '../../assets/banner/banner-img.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    // Icons
    const faChartIcon = <FontAwesomeIcon icon={faChartLine} />
    const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />
    const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />

    return (
        <>
            <section id="home">
                <div className="banner_image"></div>
                <div className="container">
                    <div className="banner_outer">
                        <div className="col">
                            <h3 className="title">
                                VYGHA POULTRY <span>& CATTLE FEEDS</span>
                            </h3>
                            <p>Nourishing Livestock with Maize Power Since 2003, from the heart of Wayanad, Kerala, to farms across the nation</p>
                        </div>
                        <div className="col">
                            <div className="sub_banner_image">
                                <img src={BannerImage} alt="Banner_image" />
                            </div>
                            <div className="banner_style_1 banner_style_2">
                                {faShieldIcon}
                                <h4>100 % Natural</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
