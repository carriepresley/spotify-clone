import React from 'react';
import "./Body.css"
import Header from "../Header/Header"
import { useDataLayerValue } from '../DataLayer/DataLayer';

function Body({spotify}) {
    const [{discover_weekly}, dispatch]= useDataLayerValue();

    return (
        <div className = "body">
            <Header spotify = {spotify}/>
            <div className = "body-info" >
            <img src = {discover_weekly?.images[0].url} alt = "discover weekly"/>
            <div className = "body-info-text">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>

            </div>

            </div>

<div className = "body-songs">
    <div className = "body-icons">
    <PlayCircleFilledIcon/>
    <FavoriteIcon/>
    <MoreHorizIcon/>

    </div>
</div>
        </div>
    )
}

export default Body
