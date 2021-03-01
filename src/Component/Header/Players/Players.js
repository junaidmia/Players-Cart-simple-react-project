import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Players.css'



const Players = (props) => {
    const { name, price, img } = props.player
    // console.log(props);
    const handlePlayer = props.handlePlayersNumber
    return (

        <div className="playerBox">

            <div className="abc">
                <div className="pic">
                    <img src={img} class="card-img-top " alt="..." />
                </div>
                <div className="details">
                    <h2>Name:{name}</h2>
                    <h3 class="card-text"> Auction Price: ৳{price}</h3>
                    <button onClick={() => handlePlayer(props.player)} type="button" class="btn btn-success"> <FontAwesomeIcon icon={faUserPlus} />   Buy now</button>
                </div>

            </div>
        </div>
    );
};

export default Players;