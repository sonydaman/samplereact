import React from 'react';
import {Card} from '../';
import {CardlistData} from "../../Config.json";
class Cardlist extends React.Component {
    state = {cardsData : [],catlist:null};
    componentDidMount(){
        const CardsData = CardlistData;
        this.setState({cardsData:CardsData});
        this.checkfilterData(this.props);
    }
    componentWillReceiveProps(myData){
        this.checkfilterData(myData);
    }
    checkfilterData(input){
        if(input.catlist !== undefined)
            this.setState({catlist:input.catlist})
    }
    componentWillUnmount(){
        const e = document.getElementById("list-menu");
        e.childNodes.forEach( ele=> ele.className = "list-group-item");
    }
    getList(){
        return (this.state.cardsData.length) 
            ?   this.state.cardsData.map((val,key)=> 
            <Card key={key} cardData={val} filterData={this.state.catlist} />)
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