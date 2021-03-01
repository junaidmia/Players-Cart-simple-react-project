import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((sum, player) => sum + player.price, 0)
    const totalPlayer = cart.reduce((sum, nameOfPlayer) => sum + nameOfPlayer.name, "")
    const PlayerPrice = cart.reduce((sum, priceOfPlayer) => sum + priceOfPlayer.price, "")


    return (
        <div className="bg-light">
            <h1 className="" >Selected Players:<span class="m-3 border border-danger rounded-3 bg-light" >{cart.length}</span></h1>
            <h3> Team Price: {totalPrice} </h3>

            <div>
                {cart.map((player) => {
                    return (
                        <>
                            <p className="bg-"> Name: {player.name}</p>
                            <p> Price: {player.price}</p>
                        </>
                    )
                })}
            </div>
        </div>

    );
};

export default Cart;