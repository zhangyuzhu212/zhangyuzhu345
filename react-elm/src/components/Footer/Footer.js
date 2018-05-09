import React, { Component } from 'react';
import './index.css';
import  {Link} from 'react-router-dom';
 export default class Footer extends Component {
    constructor() {
        super();
    }
    render() {
        return (<div className="footer full">
            <Link to='/home' className="list">
                <span className="iconfont icon-changyonglogo40"></span>
                    首页
            </Link>
            <Link to="/find" className="list">

                <span className="iconfont  icon-faxian"></span>
                   发现

            </Link>
            <Link to="/order" className="list">

                    <span className="iconfont icon-dingdan"></span>
                  订单

            </Link>
            <Link to="/user"  className="list">
                <span className="iconfont icon-wode"></span>
                我的
            </Link>
     </div>)
    }
}