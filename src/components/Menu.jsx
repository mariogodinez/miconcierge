import React, { Component } from 'react'
import { Link } from 'react-router'

class Menu extends Component {


    render(){

        return (
            <div>
                <nav class="my-nav">
                    <figure class="center-block margin-top20">
                        <img src="./img/miconcierge.png" class="width100" alt="logo miconcierge" />
                    </figure>
                    <ul class="my-nav-list">
                        <li class="my-nav-list-item">

                            <Link to="/dashboard" class="flex">
                                <span class="ion-ios-keypad my-nav-list-icon margin-right10"></span>
                                <span>Dashboard</span>
                                <span></span>
                            </Link>
                        </li>
                        <li class="my-nav-list-item">
                            <Link to="/reservations" class="flex">
                                <span class="ion-android-list my-nav-list-icon margin-right10"></span>
                                <span class="margin-right10">Reservations</span>
                                <span class="my-badge back-fuchia flex flex-middle flex-center">3</span>
                            </Link>
                        </li>
                        <li class="my-nav-list-item">
                            <Link to="inbox" class="flex">
                                <span class="ion-ios-filing-outline my-nav-list-icon margin-right10"></span>
                                <span class="margin-right10">Inbox</span>
                                <span class="my-badge back-fuchia flex flex-middle flex-center">11</span>
                            </Link>
                        </li>
                        <li class="my-nav-list-item">
                            <Link to="/products" class="flex">
                                <span class="ion-bag my-nav-list-icon margin-right10"></span>
                                <span class="margin-right10">Products</span>
                            </Link>
                        </li>
                        <li class="my-nav-list-item">
                            <Link to="reports" class="flex">
                                <span class="ion-document-text my-nav-list-icon margin-right10"></span>
                                <span class="margin-right10">Reports</span>
                            </Link>
                        </li>
                        <li class="my-nav-list-item">
                            <Link to="promos" class="flex">
                                <span class="ion-card my-nav-list-icon margin-right10"></span>
                                <span class="margin-right10">Promo</span>
                            </Link>
                        </li>
                    </ul>
                    
                </nav>
            </div>
        )
    }
}



export default Menu