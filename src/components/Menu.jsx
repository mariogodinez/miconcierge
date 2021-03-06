import React, { Component } from 'react'
import { Link } from 'react-router'

class Menu extends Component {


    render(){

        return (
            <div>
                <nav className="my-nav">
                    <figure className="center-block padding20">
                        <img src="./img/miconcierge.png" className="width100" alt="logo miconcierge" />
                    </figure>
                    <ul className="my-nav-list">
                        <li className="my-nav-list-item">

                            <Link activeClassName="color-fuchia" to="/dashboard" className="flex">
                                <span className="ion-ios-keypad my-nav-list-icon margin-right10"></span>
                                <span>Dashboard</span>
                                <span></span>
                            </Link>
                        </li>
                        <li className="my-nav-list-item">
                            <Link activeClassName="color-fuchia" to="/reservations" className="flex">
                                <span className="ion-android-list my-nav-list-icon margin-right10"></span>
                                <span className="margin-right10">Reservations</span>
                                <span className="my-badge back-fuchia flex flex-middle flex-center">3</span>
                            </Link>
                        </li>
                        <li className="my-nav-list-item">
                            <Link activeClassName="color-fuchia" to="/inbox" className="flex">
                                <span className="ion-ios-filing-outline my-nav-list-icon margin-right10"></span>
                                <span className="margin-right10">Inbox</span>
                                <span className="my-badge back-fuchia flex flex-middle flex-center">11</span>
                            </Link>
                        </li>
                        <li className="my-nav-list-item">
                            <Link activeClassName="color-fuchia" to="/products" className="flex">
                                <span className="ion-bag my-nav-list-icon margin-right10"></span>
                                <span className="margin-right10">Products</span>
                            </Link>
                        </li>
                        <li className="my-nav-list-item">
                            <Link activeClassName="color-fuchia" to="reports" className="flex">
                                <span className="ion-document-text my-nav-list-icon margin-right10"></span>
                                <span className="margin-right10">Reports</span>
                            </Link>
                        </li>
                        <li className="my-nav-list-item">
                            <Link activeClassName="color-fuchia" to="promos" className="flex">
                                <span className="ion-card my-nav-list-icon margin-right10"></span>
                                <span className="margin-right10">Promo</span>
                            </Link>
                        </li>
                        <li className="my-nav-list-item">
                            <Link activeClassName="color-fuchia" to="/workers" className="flex">
                                <span className="ion-person-stalker my-nav-list-icon margin-right10"></span>
                                <span className="margin-right10">Workers</span>
                            </Link>
                        </li>
                    </ul>

                    <div className="my-nav-actions">
                        <ul className="my-nav-list flex flex-between">
                            <li className="my-nav-list-item border0 font15 margin-right10">
                                <Link activeClassName="color-fuchia" to="settings" className="flex">
                                    <span className="ion-gear-a my-nav-list-icon margin-right10"></span>
                                    <span className="margin-right10">Settings</span>
                                </Link>
                            </li>

                            <li className="my-nav-list-item border0 font15">
                                <Link activeClassName="color-fuchia" to="/login" className="flex">
                                    <span className="fa fa-sign-out my-nav-list-icon margin-right10"></span>
                                    <span className="margin-right10">Log out</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                </nav>
            </div>
        )
    }
}



export default Menu