import React, { Component } from "react";
import MoneyGramIcon from "svg-react-loader?name=MoneyGramIcon!../../../assets/img/layout/moneyGram.svg";

class ReBrandingSection extends Component {
  render() {
    return (
      <section id="rebranding">
        <h3>Making an iconic brand even more iconic</h3>
        <p>
          MoneyGram is recognized across the globe by hundreds of millions of
          people. design:success took the brand made it even more iconic by
          going from 3D icon to a striking 2D icon. Small change – major impact.
          Likewise introducing for the first time ever a white logo on black
          background to illustrate transformative change. Less is more – always.{" "}
        </p>
        <div className="whiteRebranding">
          <span>before</span>
          <img src="assets/img/layout/pastMoneyGram.jpg" />
          <span>after</span>
          <MoneyGramIcon />
        </div>
      </section>
    );
  }
}

export default ReBrandingSection;
