import React from 'react';
import {Card} from '../';

class Cardlist extends React.Component {
    state = {cardsData : []};
    componentDidMount(){
        const CardsData = [
                        {"IMGURI":"http://placehold.it/700x400","TITLE":"Category 1","PR":"24.99",
                        "DESC":"THIS IS SAMPLE TEXT 1","RATING":"2"},
                        {"IMGURI":"http://placehold.it/700x400","TITLE":"Category 2","PR":"25.10",
                        "DESC":"THIS IS SAMPLE TEXT 2","RATING":"3"},
                        {"IMGURI":"http://placehold.it/700x400","TITLE":"Category 3","PR":"24.56",
                        "DESC":"THIS IS SAMPLE TEXT 3","RATING":"5"}];
        this.setState({cardsData:CardsData});
    }
    getList(){
        return (this.state.cardsData.length) 
            ?   this.state.cardsData.map((val,key)=> 
            <Card key={key} cardData={val} />)
            :   "";
    }
    render(){
        return(
            <div className="row">
                {this.getList()}
            </div>
        )
    }
}

export default Cardlist;