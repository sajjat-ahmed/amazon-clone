import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../axios';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Payment.css';


const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    useEffect(() => {
        // generate the special stripe secret which allow us to charage a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies subuists
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])


    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff....
        event.preventDefault();
        setProcessing(true);

        const paylod = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.push('/oprder');
        })
    }

    const handleChange = event => {
        // Listen for change in the CardElement
        //and diaplay and errors as the customer types theare card detail
        setDisabled(event.empty);
        setError(event.error ? event.eror.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout {<Link to="/checkout">({basket?.length} item)</Link>}
                </h1>
                {/* Payment section - delivery address */}
                <div class="payment__section">
                    <div class="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div class="payment__address">
                        <p>{user?.email}</p>
                        <p>1232 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/* Payment section - review item */}
                <div class="payment__section">
                    <div class="payment__title">
                        <h3>Review item add delivery</h3>
                    </div>
                    <div class="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>
                {/* Payment section - payment method */}
                <div class="payment__section">
                    <div class="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div class="payment__details">
                        {/*Stripe magic will go */}
                       
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div class="payment__priceContain">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? <p>Processing</p> : "Buy Now"}
                                    </span>
                                </button>
                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;