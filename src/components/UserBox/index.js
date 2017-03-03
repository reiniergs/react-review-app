import React, { Component } from 'react';
import './user-box.scss'; 
import UserPhoto from '../UserPhoto';
import UserName from '../UserName';
import UserComment from '../UserComment';
import PostDate from '../PostDate';

export default class UserBox extends Component {

    render() {
        const { name, comment, photo, date } = this.props;
        return (
            <article className="slds-card slds-m-bottom--x-large">
                <div className="slds-card__header slds-grid">
                    <header className="slds-media slds-media--center slds-has-flexi-truncate">
                        <div className="slds-media__figure">
                    
                        </div>
                        <div className="slds-media__body">
                    
                        </div>
                    </header>
                    <div className="slds-no-flex">
                  
                    </div>
                </div>
                <div className="slds-card__body">
                    <article className="slds-post">
                      <header className="slds-post__header slds-media">
                        <div className="slds-media__figure">
                          <UserPhoto photo={ photo } name={ name } />
                        </div>
                        <div className="slds-media__body">
                          <div className="slds-grid slds-grid--align-spread slds-has-flexi-truncate">
                            <UserName name={ name } />
                          </div>
                          <PostDate date={ date } />
                        </div>
                      </header>
                      <div className="slds-post__content slds-text-longform">
                        <UserComment comment={ comment } />
                      </div>
                      <footer className="slds-post__footer">
                        
                      </footer>
                    </article>
                </div>
                <div className="slds-card__footer">

                </div>
            </article>
        );
    }
}