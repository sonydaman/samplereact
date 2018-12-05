import React from 'react';
import { Link } from 'react-router-dom';

class LeftSection extends React.Component{
    state={linkList:false};
    componentDidMount(){
        const LinkList = [
                        {"URI":"cat1","textName":"Category 1"},
                        {"URI":"cat2","textName":"Category 2"},
                        {"URI":"cat3","textName":"Category 3"}];
        this.setState({linkList:LinkList});
    }
    getList(){
        return (this.state.linkList.length) 
            ?   this.state.linkList.map((val,key)=> <Link to={val.URI} key={key} className="list-group-item">{val.textName}</Link>)
            :   "";
    }
    render(){
        return(
            <div className="col-lg-3">
                <h4 className="my-4">Shop Name</h4>
                <div className="list-group">
                    { this.getList()  }
                </div>
            </div>
        )
    }
}

export default LeftSection;