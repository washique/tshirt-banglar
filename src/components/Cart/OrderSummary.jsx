import React from 'react';

const OrderSummary = ({cart,handelRemoveFromCart}) => {
    return (
        <div>
            <h1>OrderSummary:{cart.length}</h1>
            {
                cart.map(tshirt=><p key={tshirt._id}>{tshirt.name} <button onClick={()=>handelRemoveFromCart(tshirt._id)}>X</button> </p>)
            }
        </div>
    );
};

export default OrderSummary;