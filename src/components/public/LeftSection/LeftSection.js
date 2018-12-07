import React from 'react';
import { Link } from 'react-router-dom';

class LeftSection extends React.Component{
    state={linkList:false,listRender:true};
    componentDidMount(){
        const LinkList = [
                        {"URI":"/cat/1","textName":"Category 1"},
                        {"URI":"/cat/2","textName":"Category 2"},
                        {"URI":"/cat/3","textName":"Category 3"}];
        this.setState({linkList:LinkList});
    }
    getList(e){
         return (this.state.linkList.length) 
            ?   this.state.linkList.map((val,key)=> <Link onClick={this.props.onClick} to={`/category${val.URI}`} key={key} className="list-group-item">{val.textName}</Link>)
            :   "";
    }
    render(){
        return(
            <div className="col-lg-3">
                <h4 className="my-4">
                    <Link to="/category" onClick={this.props.onClick} >Shop Name</Link>
                </h4>
                <div className="list-group">
                    { this.getList()  }
                </div>
            </div>
        )
    }
}

export default LeftSection;