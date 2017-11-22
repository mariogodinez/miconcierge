import React, { Component } from 'react'


class Login extends Component {
    render() {
        return (
            <div>
                <section class="login height100">
                    <article class="login-box height100vh flex">
                        <div class="padding20 back-darkpurple width100 text-center flex flex-column flex-middle flex-center">
                            <figure class="margin-bottom20">
                                <img src="./img/logo-miconcierge.png" />
                            </figure>
                            <div class="margin-bottom30">
                                <h2 class="margin0 color-white font30">MiConcierge</h2>
                            </div>

                            <div class="padding10">
                                <h1 class="margin0 color-lightgray font25 font-normal">Ax ea commodo Duis aute icillum dolore eu fugiat nulla paria.</h1>
                            </div>
                        </div>
                        <div class="padding20 width100">
                            <section class="padding10">
                                <div class="margin-bottom20">
                                    <h2 class="margin0 color-black font20">Welcome back</h2>
                                </div>

                                <div class="margin-bottom30">
                                    <h2 class="margin0 color-gray font15">Sign in to continue</h2>
                                </div>

                                <div class="margin-bottom30">
                                    <input type="email" class="my-input" />
                                </div>
                                <div class="margin-bottom10">
                                    <input type="password" class="my-input" />
                                </div>
                                <div class="margin-bottom30">
                                    <p class="margin0 font13 text-right pointer color-lightblue">Fogot Password?</p>
                                </div>

                                <div class="margin-bottom15">
                                    <button class="my-btn padding1em back-fuchia color-white width100 hvr-wobble-skew">
                                        <span>Login</span>
                                    </button>
                                </div>

                                <div class="margin-bottom30">
                                    <p class="margin0 font13 text-center color-gray">
                                    Don't you have an acount? <span class="color-lightblue font-bold pointer">Sign up, it's free!</span> </p>
                                </div>

                                <div class="margin-bottom20 back-gray width100"></div>

                                <div class="margin-bottom20">
                                    <p class="margin0 font15 text-center color-gray">
                                    Or</p>
                                </div>

                                <div class="">
                                    <button class="my-btn padding1em back-facebook color-white width100 hvr-wobble-skew">
                                        <span class="ion-social-facebook margin-right10"></span><span>Login with Facebook</span>
                                    </button>
                                </div>
                            </section>
                        </div>
                    </article>
                    <footer class="login-footer width100 padding20">
                        <p class="text-center color-whity">© Copyright 2017 Mi Concierge</p>
                    </footer>
                </section>
            </div>
        )
    }
}

export default Login