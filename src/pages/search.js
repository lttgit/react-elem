import React,{Component}from "react";
// import {Link} from "react-router-dom"
import styles from "../assets/css/search.module.css"
export default class Search extends Component{
    click(){
        window.history.go(-1)
    }
    render(){
        return(
            <div className={styles["search"]}>
                <div className={styles["header-btn"]}>
                    <ul>
                        <li className={styles.leftli} onClick={this.click}>
                            <img src="/assets/images/back.png" alt=""/>
                        </li>
                        <li className={styles.mdli}>搜索</li>
                    </ul>
                </div>
                <div className={styles['search-box']}>
                        <input className={styles['search-text']} type="text" placeholder="请输入商家或美食名称"/>
                        <input className={styles['search-btn']} type="button"  value="提交"/>
                </div>
            </div>
        )
    }
}