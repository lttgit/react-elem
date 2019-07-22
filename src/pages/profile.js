import React,{Component} from "react";
// import {Link} from "react-router-dom";
import styles from "../assets/css/profile.module.css"
import { List } from 'antd-mobile';
const Item = List.Item;
export default class Profile extends Component{
    state = {
        disabled: false,
    }

    click(){
        window.history.go(-1)
    }
    render(){
        return(
            <div className="profile">
                {/*<div className={styles["header-btn"]}>*/}
                {/*    <ul>*/}
                {/*        <li className={styles.leftli} onClick={this.click}>*/}
                {/*            <img src="/assets/images/back.png" alt=""/>*/}
                {/*        </li>*/}
                {/*        <li className={styles.mdli}>我的</li>*/}

                {/*    </ul>*/}
                {/*    <div className={styles["header-info"]}>*/}
                {/*        <img className={styles["user-img"]} src="/assets/images/user.png" alt=""/>*/}
                {/*        <div className={styles["user-tel"]}>*/}
                {/*            <span>18335669942</span>*/}
                {/*            <img className={styles["right"]} src="/assets/images/right.png" alt=""/>*/}
                {/*        </div>*/}

                {/*    </div>*/}

                {/*</div>*/}
                <div className={styles["user-filled"]}>
                    {/*<ul>*/}
                    {/*    <li>*/}
                    {/*        <Link to="">*/}
                    {/*            <p>{}</p>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                    <List  className="my-list">
                        <Item extra={'extra content'}>Title</Item>
                    </List>
                </div>



            </div>
        )
    }
}