import React,{Component} from 'react';

import "../assets/css/base.css"
import {Switch,Route,Redirect} from 'react-router-dom'
import Footer from "./Footer"
// import Header from "./Header"

import Home from "../pages/home";
import Login from "../pages/login";
import Msite from "../pages/msite";
import Order from "../pages/order";
import Profile from "../pages/profile";
import Search from "../pages/search";

export default class App extends Component{
    componentWillReceiveProps(nextProps){
        console.log("app",nextProps.location.pathname)
    }
    render(){
        return (
            <div className="App">
                {/*<Header/>*/}
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/msite" component={Msite} />
                    <Route path="/order" component={Order} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/search" component={Search} />

                    <Redirect exact from="/" to="/home"/>
                    {/*<Route component={ErrorPage}/>*/}
                </Switch>
                <Footer/>
            </div>
        )
    }

}