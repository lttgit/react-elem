import React,{Component} from "react";
import styles from '../assets/css/footer.module.css'
import {NavLink} from "react-router-dom";

export default class Footer extends Component{
    render(){
        return(
            <div className={styles["foot-btn"]}>
                <ul>
                    <li>
                        <NavLink to="/home">
                            <img src="/assets/images/waimai.png" alt=""/>
                            <span>外卖</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search">
                            <img src="/assets/images/search.png" alt=""/>
                            <span>搜索</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <img src="/assets/images/order.png" alt=""/>
                            <span>订单</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">
                            <img src="/assets/images/my.png" alt=""/>
                            <span>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}

