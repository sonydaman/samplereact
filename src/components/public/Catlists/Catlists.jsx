import React from 'react';
import { Link,matchPath  } from 'react-router-dom';
import {LeftSection,Catroutes} from '../';
import {LinkListData,HOST} from "../../Config.json";
class Catlists extends React.Component{
        state={linkList:false,listShow:false,BACK:"/category/"};
        componentDidMount(){
            const LinkList = LinkListData;
            this.setState({linkList:LinkList});
            this.checkChildUri(this.props.location);
        }
        componentWillReceiveProps({location,history}){
                this.checkChildUri(location,history);
        }
        checkChildUri(location,history){
                if(matchPath(location.pathname, { path: '/category/cat/:number' }))
                        this.showBack(true);
                if(matchPath(location.pathname, { path: '/category/info/:number' }))          
                        this.showBack(undefined,history);
        }
        getList(){
            return (this.state.linkList.length) 
                ?   this.state.linkList.map((val,key)=> <Link  onClick={this.showBack.bind(this,true)} to={`/category${val.URI}`} key={key} className="list-group-item">{val.textName}</Link>)
                :   "";
        }
        showBack(input,history){
                if(history !== undefined){
                        this.goBack = history.goBack;
                        return;
                }
                if(this.goBack){
                        console.log(this.goBack);return;
                }  
                this.setState({listShow:input});
        }
        // resetClass(e){
        //         e.currentTarget.parentElement.childNodes.forEach( ele=> ele.className = "list-group-item");
        // }
        activeClass(){
                const e = document.getElementById("list-menu");
                e.childNodes.forEach( ele=> ele.className =  ele.href === HOST + this.props.location.pathname ? "list-group-item active" : "list-group-item" );
        }
        sampleFunc(e){
                if(e === undefined) { this.activeClass();return false; }
                let input = e.target.className === "" ? false : true;
                this.showBack(input);
                // if(input) {this.resetClass(e);e.target.className="list-group-item active"}
        }
        catRoutes(){
                return(
                        <div>
                                <Link onClick={this.showBack.bind(this,false)} to={this.state.BACK} >Back</Link>
                                <Catroutes dataLoaction={this.props} />
                        </div>
                );
        }
        render(){
            return(
                <div className="container">
                        <div className="row">
                                <LeftSection CallOnClick={this.sampleFunc.bind(this)} />
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