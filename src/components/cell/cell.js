import React,{Component} from "react";
import styles from "./assets/css/cell.module.css";
import {Link}from "react-router-dom";

export default class Cell extends Component{

    // componentDidMount() {
    //     axios({
    //         url:'/mock/cell',
    //         params:{_page:1,_limit:1}
    //     }).then(
    //         // res=>console.log(res)
    //         res=>this.setState({list:res.data.data})
    //     )
    // }

    render(){
        let{data,dataName}=this.props;
        return(
            <div className={styles["cell"]}>
                <Link to={{pathname:"/detail/"+data.id,search:`dataName=${dataName}`}} className={styles["celldetail"]}>
                    <img src={data.icon} alt=""/>
                    <div className={styles["minutia"]}>
                        <h3>{data.title}</h3>
                        <p>月售{data.sell}单</p>
                        <span>￥{data.price}起送</span>
                        <i>{data.distans}公里/{data.sell}小时{data.price}分钟</i>
                    </div>
                </Link>
            </div>
        )
    }
}