import React from 'react';
import './Footer.css';

const Footer = () => {

    const backToTop = () => {
        window.scrollTo(0, 0);
    }


    return (
        <div>
            <div onClick={backToTop} className="back__toTop">
                <small>Back to top</small>
            </div>
            <div className="footer">
                <div>
                    <ul>
                        <h5>Get to Know Us</h5>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investor Relations</li>
                        <li>Amazon Device</li>
                        <li>Amazon Tours</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h5>Make Money with Us</h5>
                        <li>Sell products on Amazon</li>
                        <li>Sell apps on Amazon</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise Your Products</li>
                        <li>Self-Publish with Us</li>
                        <li>Host an Amazon Hub</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h5>Amazon Payment Products</h5>
                        <li>Amazon Business Card</li>
                        <li>Shop with Points</li>
                        <li>Reload Your Balance</li>
                        <li>Amazon Currency Converter</li>
                    </ul>

                </div>

                <div>
                    <ul>
                        <h5>Let Us Help You</h5>
                        <li>Amazon and COVID-19</li>
                        <li>Your Account</li>
                        <li>Your Orders</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Returns & Replacements</li>
                        <li>Manage Your Content and Devices</li>
                        <li>Amazon Assistant</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div style={{ background: '#131a22', color: 'white', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <small>© 1996-2020, Amazon.com, Inc. or its affiliates</small>
            </div>
        </div>
    );
};

export default Footer;