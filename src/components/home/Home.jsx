import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../tshirt/Tshirt';
import OrderSummary from '../Cart/OrderSummary';
import'./Home.css';
import toast from 'react-hot-toast';


const Home = () => {
    const tshirts=useLoaderData();
const [cart,setCart]=useState([])
const handelAddtoCart = tshirt =>{
    const exists=cart.find(ts=>ts._id===tshirt._id)
    if(exists){
        toast('Alrady added.')
    }
    else{
        const newCart=[...cart,tshirt]
        setCart(newCart);
    }
}
const handelRemoveFromCart= id =>{
    console.log(id);
   const remanig = cart.filter(ts=>ts._id !==id);
   setCart(remanig)
   toast('Removed.')
}

    return (
        <div className='home-container'>
            <div className='tshirt-containner'>
            {
                tshirts.map(tshirt=><Tshirt 
                    key ={tshirt._id}
                    tshirt={ tshirt}
                    handelAddtoCart={handelAddtoCart}
                >

                </Tshirt>)
            }
            </div>
            <div className='cart-container'>
                <OrderSummary cart={cart}
                 handelRemoveFromCart={handelRemoveFromCart}
                ></OrderSummary>
            </div>
           
        </div>
    );
};

export default Home;