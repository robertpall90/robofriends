import React from "react";

const Card = (props) => {    //in loc de (props) puteam si aici destructuring si era ({name, email, id})
    const { email } = props; //destructuring props.email sa putem folosi {email} in loc de {props.email}
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robot" src={`https://robohash.org/${props.id}?size=200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;