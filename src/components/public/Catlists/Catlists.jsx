import React from 'react';
import { Link } from 'react-router-dom';
import {LeftSection,Catroutes} from '../';
class Catlists extends React.Component{
        state={linkList:false,listShow:false};
        componentDidMount(){
            const LinkList = [
                            {"URI":"/cat/1","textName":"Category 1"},
                            {"URI":"/cat/2","textName":"Category 2"},
                            {"URI":"/cat/3","textName":"Category 3"}];
            this.setState({linkList:LinkList});
        }
        getList(){
            return (this.state.linkList.length) 
                ?   this.state.linkList.map((val,key)=> <Link  onClick={this.showBack.bind(this,true)} to={`/category${val.URI}`} key={key} className="list-group-item">{val.textName}</Link>)
                :   "";
        }
        showBack(input){
                this.setState({listShow:input})
        }
        resetClass(e){
                e.currentTarget.parentElement.childNodes.forEach( ele=> ele.className = "list-group-item");
        }
        sampleFunc(e){
                let input = e.target.className === "" ? false : true;
                if(input) {this.resetClass(e);e.target.className="list-group-item active"}
                this.showBack(input);
                
        }
        catRoutes(){
                return(
                        <div>
                                <Link onClick={this.showBack.bind(this,false)} to="/category" >Back</Link>
                                <Catroutes />
                        </div>
                );
        }
        render(){
            return(
                <div className="container">
                        <div className="row">
                                <LeftSection onClick={this.sampleFunc.bind(this)} />
                                <div className="col-lg-9">
                                        <div className="list-group">
                                                {(this.state.listShow === false) ? this.getList() : this.catRoutes() }
                                        </div>
                                </div>
                        </div>
                </div>
            )
        }
    }
export default Catlists;