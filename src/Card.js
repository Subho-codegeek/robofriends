import React from "react";

const Card = (props) => {
    return(
        <div className="tc bg-light-green dib pa4 br3 ma3 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?200*200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>

    );
}

export default Card;