import React from 'react'
import "./Tracking.css";
import  Header  from '../components/Header'
import TrackingImage from "../assets/Images/tracking-favicon.png";

const Tracking = () => {
    return (
        <>
            <title>Ecommerce Project- Tracking</title>
            <link rel="icon" type="image/svg+xml" href={TrackingImage} />
            <Header></Header>

            <div className="tracking-page">
                <div className="order-tracking">
                    <a className="back-to-orders-link link-primary" href="Orders">
                        View all orders
                    </a>

                    <div className="delivery-date">
                        Arriving on Monday, June 13
                    </div>

                    <div className="product-info">
                        Black and Gray Athletic Cotton Socks - 6 Pairs
                    </div>

                    <div className="product-info">
                        Quantity: 1
                    </div>

                    <img className="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg" />

                    <div className="progress-labels-container">
                        <div className="progress-label">
                            Preparing
                        </div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tracking