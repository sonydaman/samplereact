import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({cardData}) =>{
    const stars = (RATING)=>{
        // '&#9733; &#9733; &#9733; &#9733; &#9734;'
        let k = ['&#9733;' ,'&#9733;', '&#9733;', '&#9733;', '&#9733;'];
            k = k.map((val,key)=>{
                  return  val = (key<RATING) ? `&#9734;` : val;
                });
        return <small className="text-muted"> {k.join(" ")} </small>;
    }
    return(
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
            <Link to="#"><img className="card-img-top" src={cardData.IMGURI} alt="" /></Link>
            <div className="card-body">
                <h4 className="card-title">
                <Link to="#">{cardData.TITLE}</Link>
                </h4>
                <h5>${cardData.PR}</h5>
                <p className="card-text">{cardData.DESC}</p>
            </div>
            <div className="card-footer">
                {stars(cardData.RATING)}
                {/* <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small> */}
            </div>
            </div>
        </div>
    )
}
export default Card;