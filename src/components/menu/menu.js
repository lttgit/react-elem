import React,{Component} from "react";
import styles from "./assets/css/menu.css";
import {Link}from "react-router-dom";
import axios from "../../utils/axios"
export default class Menu extends Component{
    state={
        list:[]
    };
    componentDidMount() {
        axios({
            url:'/mock/menu',
            params:{_page:1,_limit:8}
        }).then(
            // res=>console.log(res)
            res=>this.setState({list:res.data.data})
        )
    }

    render(){

        return(
            <div className={styles["menu"]}>
                <Link to='/detail'>
                    <img src="" alt=""/>
                    <h2>{this.state.list.title}</h2>
                </Link>
            </div>
        )
    }
}