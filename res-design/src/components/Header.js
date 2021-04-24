import React, { Component } from 'react'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            toggle: true,
        };
    }

    handleClick = () => {
        console.log('click')
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        const hideToggle = this.state.toggle ? 'm-hide' : ''

        return (
            <main>
                <nav className="menu-bar fixed">
                    <div className="container flex">
                        <div className="menu-logo w55">Start Bootstrap</div>
                        <div className="w45">
                            <button onClick={this.handleClick} className="menu-button" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
                                <svg className="svg-inline" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                                <i className="fas fa-bars ml-1"></i> 
                            </button>
                        </div>
                        <div className="menu" id={hideToggle}>
                            <ul className="menu-ul">
                                <li className="menu-items">services</li>
                                <li className="menu-items">portfolio</li>
                                <li className="menu-items">about</li>
                                <li className="menu-items">team</li>
                                <li className="menu-items">contact</li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header>
                    <div className="container fd-column">
                        <div className="content-sub">Welcome To Our Studio!</div>
                        <div className="content-sub1">It's Nice To Meet You</div>
                        <a className="content-sub-button">It's Nice To Meet You</a>
                    </div>
                </header>
            </main>
        )
    }
}
