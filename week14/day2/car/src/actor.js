import './styles.css'

import React from "react";
const pers=(props) => {
    return(
    <ul >
        <li style={{border:'1px solid ',backgroundColor:'blue'}}>{props.actor.firstname}</li>
        <li style={{border:'1px solid ',backgroundColor:'blue'}}>{props.actor.lastname}</li>
        <li style={{border:'1px solid ',backgroundColor:'blue'}}>{props.actor.image}</li>
    </ul>

    )
}
export default pers





  