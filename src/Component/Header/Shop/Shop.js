import React from 'react';
import { useEffect, useState } from 'react';
import PlayersData from '../../../fakeData/data.json'
import Cart from '../cart/Cart';
import Players from '../Players/Players';
import './Shop.css';

const Shop = () => {
    const [player, setPlayer] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setPlayer(PlayersData);
        console.log(PlayersData);
    }, [])
    const handlePlayersNumber = (player) => {
        console.log('clicked', player)
        const newCart = [...cart, player];
        setCart(newCart);
    };
    return (
        <div class="d-flex">
            <div className="row" >

                {
                    player.map(players => <Players player={players} handlePlayersNumber={handlePlayersNumber}></Players>)
                }

            </div>
            <div  >
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Shop;