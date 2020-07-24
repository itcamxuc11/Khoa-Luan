import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>
            <header className="header">
                <div className="content">
                    <div className="header__inner"><a href="/"><img src="./images/Logo_uber.svg" alt="Uber Eats" className="header__logo" /></a>
                        <div className="header__delivery-info"><label className="control">
                            <div className="control__input-wrapper tablet dropdown"><img src="./images/input.svg" alt="Address" className="control_icon" /><input type="text" name="address" placeholder="Address" className="control_input control_input--small" defaultValue />
                                <ul className="dropdown-leagues">
                                    <li className="league"><img src="./images/input.svg" alt="Address" className="control_icon" /><a href="#" className="black">Kyiv</a></li>
                                    <li className="league"><img src="./images/input.svg" alt="Address" className="control_icon" /><a href="#" className="black">London</a></li>
                                </ul>
                            </div>
                        </label><label className="control">
                                <div className="control__input-wrapper "><input type="time" name="time" placeholder="Time" className="control_input control_input--small control_input--time" defaultValue /></div>
                            </label>
                        </div>
                        <div className="header__search"><label className="control">
                            <div className="control__input-wrapper tablet"><img src="./images/search.svg" alt="Search" className="control_icon" /><input type="text" name="search" placeholder="Search" className="control_input control_input--small" defaultValue /></div>
                        </label>
                        </div>
                        <div className="header__toggle-buttons">
                            <button type="button" className="header__toggle-btn">
                                <img src="./images/location.svg" alt="place icon" />
                            </button>
                            <button type="button" className="header__toggle-btn">
                                <img src="./images/search.svg" alt="search icon" />
                            </button>
                        </div>
                        <button onClick={this.props.showCart} className="header__link pos-relative" href="/basket">
                            <img title="basket" className="header-logo" src="images/basket.svg" alt="basket" />
                            {this.getCartNumber()}
                        </button>
                        <a className="header__link" href="./sign-in">Sign In</a>
                    </div>
                </div>
            </header>
            <div className={this.getCartStatus(this.props.onCheckout) + " modal"}>
                <div className="checkout d-flex flex-colum">
                    <div className="checkout-header">
                        <div className="justify-content-end d-flex">
                            <button onClick={this.props.showCart}><img src="images/close.svg" /></button>
                        </div>
                        <h3>Giỏ hàng</h3>
                    </div>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            {}
                            {
                                this.getCartInfo().map((value, key) => {
                                    return (
                                        <tr key={key}>
                                            <td className="pr-0"><img className="item__img" alt="Double Sausage Egg McMuffin® Meal" src="https://d1ralsognjng37.cloudfront.net/65ef3c66-5dcb-41bc-842a-d9938ab68e31.jpeg" /></td>
                                            <td className="text pl-0">{value.name}</td>
                                            <td className="text">{value.price}</td>
                                            <td className="text"><input type="number" Value={value.count} /></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="checkout-footer">
                        <button onClick={this.order}>Đặt hàng</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
