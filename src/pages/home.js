import React,{Component} from "react"

import ReactSwipe from "react-swipe";
import {Link} from "react-router-dom"
import styles from "../assets/css/home.module.css"
import Cell from "../components/cell/cell"
import axios from "../utils/axios"
export default class Home extends Component {
    state={
        list:[]
    };
    componentDidMount(){
        axios({
            url:'/mock/home',
            params:{_page:1,_limit:11}
        }).then(
            res => this.setState({list:res.data.data})
        )
    }
    render(){
        let {list} = this.state;

        return (
            <div>
                <div className={styles["header-btn"]}>
                    <ul>
                        <li className={styles.leftli}><Link to="/search">
                            <img src="/assets/images/back.png" alt=""/>
                        </Link></li>
                        <li className={styles.mdli}>elem</li>
                        <li className={styles.rightli}><Link to="/profile"><img src="/assets/images/my.png" alt=""/></Link></li>
                    </ul>
                </div>
                <div className={styles["home"]}>
                    <ReactSwipe
                        className={styles["carousel"]}
                        swipeOptions={{
                            speed: 100,
                        }}
                    >
                        <div className={styles.pane}>
                            <ul>
                                <li>
                                    <Link to="/detail/1">
                                        <img src="/assets/images/1.png" alt=''/>
                                        <span>甜品饮品</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="detail/2">
                                        <img src="/assets/images/2.png" alt=''/>
                                        <span>商超遍历</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/detail/3">
                                        <img src="/assets/images/3.png" alt=''/>
                                        <span>美食</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/detail/4">
                                        <img src="/assets/images/4.png" alt=''/>
                                        <span>简餐</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/detail/5">
                                        <img src="/assets/images/5.png" alt=''/>
                                        <span>新店特惠</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/detail/6">
                                        <img src="/assets/images/6.png" alt=''/>
                                        <span>准时达</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link  to="/detail/7">
                                        <img src="/assets/images/7.png" alt=''/>
                                        <span>预定早餐</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/detail/8">
                                        <img src="/assets/images/8.png" alt=''/>
                                        <span>土豪推荐</span>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                        <div className={styles.pane}>
                            <ul>
                                <li>
                                    <Link to="/detail/3">
                                        <img src="/assets/images/1.png" alt=''/>
                                        <span>甜品饮品</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="detail/5">
                                        <img src="/assets/images/2.png" alt=''/>
                                        <span>商超遍历</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/detail/7">
                                        <img src="/assets/images/3.png" alt=''/>
                                        <span>美食</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/detail/1">
                                        <img src="/assets/images/4.png" alt=''/>
                                        <span>简餐</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/detail/2">
                                        <img src="/assets/images/5.png" alt=''/>
                                        <span>新店特惠</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/detail/4">
                                        <img src="/assets/images/6.png" alt=''/>
                                        <span>准时达</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link  to="/detail/6">
                                        <img src="/assets/images/7.png" alt=''/>
                                        <span>预定早餐</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/detail/8">
                                        <img src="/assets/images/8.png" alt=''/>
                                        <span>土豪推荐</span>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </ReactSwipe>
                </div>
                <div className={styles["product"]}>
                    <div className={styles["product-head"]}>
                        <img src="/assets/images/shangjia.png" alt=""/>
                        <span>附近商家</span>
                    </div>
                    {
                        list.map((item)=>(
                            <Cell
                                key={item.id}
                                data={item}
                                dataName="home"
                            />
                        ))
                    }
                </div>

            </div>
        )
    }
}


