import React, { Component } from 'react';
import Header from "../../components/Header/Header";
export default class User  extends Component {
    constructor() {
        super();
    }
    render() {
        return (<div className="profile full">
            <Header>我的</Header>
     </div>)
    }
}