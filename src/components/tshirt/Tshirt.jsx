import React from 'react';
import'./tshirt.css'

const Tshirt = ({tshirt,handelAddtoCart}) => {
    const {picture,name,price}=tshirt
    return (
        <div className='single-tshirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>${price}</h4>
            <button onClick={()=>handelAddtoCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;