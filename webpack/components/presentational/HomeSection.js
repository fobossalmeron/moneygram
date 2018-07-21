import React, { Component } from "react";
import MoneyGramIcon from "svg-react-loader?name=MoneyGramIcon!../../../assets/img/layout/moneyGram.svg";

class HomeSection extends Component {
  render() {
    return (
      <section id="home">
        <div className="overVideo">
          <MoneyGramIcon/>
          <h1>Reimagine, reinvent, reposition </h1>
        </div>
        <div id="homevideo">
          <div className="video_overlay" />
        </div>
      </section>
    );
  }
}

export default HomeSection;
