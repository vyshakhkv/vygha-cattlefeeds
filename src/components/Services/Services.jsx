import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins,faCow,faHandshake,faHeartPulse,faSeedling,faThumbsUp,faTruckArrowRight} from '@fortawesome/free-solid-svg-icons';



export default function Services() {

    // Icons
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
    const faCopyIcon = <FontAwesomeIcon icon={faCopy} />
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
  return (
    <>
     <div id="services">
        <div className="container">
            <div className="title_headling">
                <h3>Why Choose Vygha Cattle Feed?</h3>
            </div>
            <div className="service_wrapper">
                <div className="service_box">
                    <div className="service_icon blue_icon"><FontAwesomeIcon icon={faCow} /></div>
                    <h4 className="number">01</h4>
                    <div className="service_content">
                        <h5>Unmatched Maize Power</h5>
                        <p>Our cattle feed is fortified with the nutritional power of maize. We source, process, and refine maize to perfection, ensuring that your cattle receive the finest, most nourishing feed available.</p>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon"><FontAwesomeIcon icon={faHandshake} /></div>
                    <h4 className="number">02</h4>
                    <div className="service_content">
                        <h5>A Legacy of Trust</h5>
                        <p>Vygha Cattle Feed has earned the trust of farmers, ranchers, and agriculturalists nationwide. Our commitment to consistent quality has made us a go-to choice for those seeking optimal livestock nutrition</p>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon"><FontAwesomeIcon icon={faHeartPulse} /></div>
                    <h4 className="number">03</h4>
                    <div className="service_content">
                        <h5> Holistic Nutrition</h5>
                        <p>Our cattle feed is carefully formulated to provide a balanced blend of essential nutrients, vitamins, and minerals. Vygha Cattle Feed supports the overall health, growth, and performance of your livestock</p>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon"><FontAwesomeIcon icon={faSeedling} /></div>
                    <h4 className="number">04</h4>
                    <div className="service_content">
                        <h5>Ethical and Sustainable</h5>
                        <p>We take pride in our ethical sourcing practices and commitment to sustainability. When you choose Vygha, you're not only making a smart choice for your cattle but also contributing to responsible and environmentally conscious agriculture</p>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon"><FontAwesomeIcon icon={faTruckArrowRight} />
</div>
                    <h4 className="number">05</h4>
                    <div className="service_content">
                        <h5>Transportation Facility</h5>
                        <p>At Vygha, we understand the importance of convenience. That's why we've invested in our own transportation facility to ensure the timely and efficient delivery of our products to your doorstep. Your cattle's nutrition is just a call away</p>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon blue_icon"><FontAwesomeIcon icon={faThumbsUp} /></div>
                    <h4 className="number">06</h4>
                    <div className="service_content">
                        <h5>Proven Experience</h5>
                        <p>With a history dating back to 2003, Vygha Cattle Feed has garnered invaluable experience and expertise in creating nutritionally superior cattle feed. Our long-standing presence in the industry is a testament to our dedication to quality</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
