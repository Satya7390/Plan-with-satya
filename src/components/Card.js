import { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {

  

    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0, 150)}`;

    // console.log(info);

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    // console.log({ id, name, image, info, price });

   

    return (
        <div className="card">
            <img  className="image" src={image}></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">{description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `...Read More`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>

        </div>
    );
}

export default Card;