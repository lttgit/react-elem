import React,{Component} from "react";
// import {Link} from "react-router-dom";
import styles from "../assets/css/order.module.css"
export default class Order extends Component{
    click(){
        window.history.go(-1)
    }
    render(){
        return(
            <div className={styles["header-btn"]}>
                <ul>
                    <li className={styles.leftli} onClick={this.click}>
                        <img src="/assets/images/back.png" alt=""/>
                    </li>
                    <li className={styles.mdli}>订单列表</li>

                </ul>
            </div>
        )
    }
}