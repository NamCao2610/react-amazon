import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Quang cao banner adds" />

                <div>
                    <h3>Xin chào {user?.email}</h3>
                    <h2 className="checkout__title">Giỏ hàng của bạn</h2>
                </div>


                {basket && basket.map((item) => (
                    <CheckoutProduct key={item.id} id={item.id} image={item.image} price={item.price} title={item.title} rating={item.rating} />
                ))}

            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
