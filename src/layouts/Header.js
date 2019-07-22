import React,{Component} from "react";
import styles from "../assets/css/header.module.css";
import {Link} from "react-router-dom";

export default class Header extends Component{
    render(){
        return(
            <div className={styles["header-btn"]}>
                <ul>
                    <li className={styles.leftli}><Link to="/search">
                        <img src="/assets/images/back.png" alt=""/>
                    </Link></li>
                    <li className={styles.mdli}>elem</li>
                    <li className={styles.rightli}><Link to="/profile"><img src="/assets/images/my.png" alt=""/></Link></li>
                </ul>
            </div>
        )
    }
}