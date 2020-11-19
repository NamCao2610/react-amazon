import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" alt="bannenr" />

                <div className="home__row">
                    <Product id='232423422' title='The lead startup' price={19.99} image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg' rating={5} />
                    <Product id='254356655' title='The last ninja' price={19.99} image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Gaming_1x._SY304_CB432517394_.jpg' rating={5} />
                </div>

                <div className="home__row">
                    <Product id='656643433' title='Cooking oil' price={19.99} image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg' rating={5} />
                    <Product id='234354354' title='gel boi tron' price={19.99} image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg' rating={5} />
                    <Product id='454532333' title='ThTelevuision' price={19.99} image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg' rating={5} />
                </div>

                <div className="home__row">
                    <Product id='232423422' title='The lead startup' price={19.99} image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg' rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
