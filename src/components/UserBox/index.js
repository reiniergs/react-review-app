import React, { Component } from 'react';
import './user-box.scss'; 
import UserPhoto from '../UserPhoto';
import UserName from '../UserName';
import UserComment from '../UserComment';

export default class UserBox extends Component {

    render() {
        const { name, comment, photo } = this.props;
        return (
            <div className="user-box">
                <UserPhoto photo={ photo } />
                <div className="text-box">
                    <UserName name={ name } />
                    <UserComment comment={ comment } />
                </div>
            </div>
        );
    }
}