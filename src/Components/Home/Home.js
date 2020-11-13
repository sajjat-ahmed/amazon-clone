import React from 'react';
import './Home.css';
import Product from '../../Components/Product/Product';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Home = () => {
    return (
        <div>
            <div className="home__headerNav">
                <div style={{ display: 'flex', cursor: 'pointer', marginLeft: '10px', justifyContent: 'center', alignItems: 'center' }}>
                    <LocationOnIcon />
                    <h5 style={{ fontSize: '10px', fontWeight: '400', color: 'lightgray' }}>Deliver to <br /> <span style={{ fontSize: '12px', fontWeight: '500', color: 'white' }}>Bangladesh</span></h5>
                </div>
                <ul>
                    <li>Today's Deals</li>
                    <li>Customer Service</li>
                    <li>Gift Cards</li>
                    <li>Register</li>
                    <li>Sell</li>
                </ul>
                <small>Amazon's response to COVID-19</small>
            </div>
            <div className="home">
                <div className="home__container">
                    <img
                        className="home__image"
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""
                    />

                    <div className="home__row">
                        <Product
                            id="12345678"
                            title="NEW Microsoft Surface Headphones 2 - (Matte black) Full charge now lasts up to 20 hours"
                            price={249.99} rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/61WQSvgxsHL._AC_SL1500_.jpg"
                        />

                        <Product
                            id="11234567"
                            title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray, Stunning 16-inch Retina Display with True Tone technology"
                            price={2099.00} rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/61gcCcu6VQL._AC_SL1200_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="11234569"
                            title="New Apple iPhone 12 Pro Max (128GB, Graphite) [Locked] + Carrier Subscription"
                            price={999.99} rating={5}
                            image="https://m.media-amazon.com/images/I/71XXJC7V8tL.jpg"
                        />

                        <Product
                            id="11234548"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={949.99} rating={3}
                            image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
                        />

                        <Product
                            id="09876543"
                            title="New Apple Watch SE (GPS + Cellular, 44mm) - Space Gray Aluminum Case with Charcoal Sport Loop"
                            price={349.95} rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/81ouiubyvHL._AC_SL1500_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="45654323"
                            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                            price={169.99} rating={2}
                            image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
                        />

                    </div>

                    <div className="home__row">

                        <Product
                            id="08633823"
                            title="Samsung Galaxy S20 Ultra 5G | SM-G988N 256GB | Factory Unlocked - Korea International Version (Cosmic Black) | Includes Saru Speaker"
                            price={999.99} rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/613YZGZCdYL._AC_SL1282_.jpg"
                        />

                        <Product
                            id="06645333"
                            title="Asus AM4 TUF Gaming X570-Plus (Wi-Fi) AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Motherboard With PCIe 4.0, Dual M.2, 12+2 With Dr. MOS power stage, USB 3..."
                            price={179.99} rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/91rZkdZy3VL._AC_SL1500_.jpg"
                        />

                        <Product
                            id="45656300"
                            title="Intel Core i9-10850K Desktop Processor 10 Cores up to 5.2 GHz Unlocked LGA1200 (Intel 400 Series chipset) 125W"
                            price={483.99} rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71SRmZJxKYL._AC_SL1500_.jpg"
                        />

                    </div>
                    <div className="home__row">
                        <Product
                            id="40683600"
                            title="A Plague Tale: Innocence (PS4) - PlayStation"
                            price={47.99} rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/71UCD4nel8L._SL1500_.jpg"
                        />

                        <Product
                            id="47834500"
                            title="Godfall - (PS5) Playstation 5 Godfall is an action game"
                            price={67.99} rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/91MNVNrMJPL._SL1500_.jpg"
                        />

                        <Product
                            id="45645600"
                            title="Marvel's Spider-Man: Miles Morales Launch Edition - PlayStation 4"
                            price={49.99} rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/81zRSR9PyTL._SL1500_.jpg"
                        />

                        <Product
                            id="45789700"
                            title="God of War Hits - PlayStation 4 God of War is an action-adventure game"
                            price={49.99} rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/813xlI-NGpL._SL1500_.jpg"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;