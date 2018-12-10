import React from 'react';
import { Link } from 'react-router-dom';
import {LinkListData} from "../../Config.json";
class LeftSection extends React.Component{
    state={linkList:false,listRender:true};
    componentDidMount(){
        this.setState({linkList:LinkListData});
        this.listLink = React.createRef();
    }
    componentWillReceiveProps({CallOnClick}){
        CallOnClick();
    }
    getList(e){
         return (this.state.linkList.length) 
            ?   this.state.linkList.map((val,key)=> <Link onClick={this.props.CallOnClick} to={`/category${val.URI}`} key={key} className="list-group-item">{val.textName}</Link>)
            :   "";
    }
    render(){
        return(
            <div className="col-lg-3">
                <div id="list-menu" className="list-group">
                    <h4 className="list-group-item"><Link ref={this.listLink} to="/category" onClick={this.props.CallOnClick} >Category List</Link></h4>
                    { this.getList()  }
                </div>
            </div>
        )
    }
}

export default LeftSection;