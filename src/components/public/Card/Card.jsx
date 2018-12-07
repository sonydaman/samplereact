import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

// const Card = ({cardData}) =>{
class Card extends Component {
    state = {RATING : []};
    constructor(props){
        super();
        this.cardData = props.cardData;
    }
    componentDidMount(){
        this.setState({RATING: ['&#9733;' ,'&#9733;', '&#9733;', '&#9733;', '&#9733;'] });
    }
    stars = (RATING)=>{
        let k = this.state.RATING.map((val,key)=> val = (key>RATING) ? '&#9734;' : val );
        return <small className="text-muted"> {ReactHtmlParser(k.join(" "))} </small>;
    }
    render(){
        const {cardData} =  this;
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
                    {this.stars(cardData.RATING)}
                </div>
                </div>
            </div>
        )
    }
}
export default Card;