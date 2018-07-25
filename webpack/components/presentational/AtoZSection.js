import React, { Component } from "react";
import ReactPlayer from "react-player";
import Graphic1 from "svg-react-loader?name=Graphic1!../../../assets/img/layout/graphic1.svg";
import Graphic1mobile from "svg-react-loader?name=Graphic1mobile!../../../assets/img/layout/graphic1mobile.svg";

class AtoZSection extends Component {
  render() {
    return (
      <section id="a-to-z">
        <h2>
          Innovation from a<span>-</span>to<span>-</span>z
        </h2>
        <p>
          <b>MoneyGram</b>, one of the world’s most recognized brands – present
          in over 200 counties with almost 350,000 locations and millions of
          daily money transfers. Founded almost 80 year ago. How to re-imagine
          and re-invent to be young and present to the world?
          <br />
          <br />
          <b>The answer:</b> A multi-year transformational innovation initiative
          addressing almost the entire business. Utilizing design:success
          proprietary innovation process to remain relevant, focused, current
          and relevant to consumers, agents and shareholders.
        </p>
        <div className="quote">
          <p>
            design:success brings a proven consumer-driven process were every
            recommendation is supported by data.
            A great partner to identify and execute on Product & Services
            innovation. It was a thorough and controlled process and not only
            was effective but we also had a lot of fun.
          </p>
          <span>Juan Agualimpia, f. CMO MoneyGram</span>
        </div>
        <Graphic1 className="rippleGram"/>
        <Graphic1mobile className="rippleGram mobile"/>
        <ReactPlayer url="https://vimeo.com/219006593/ef6c632d94" className="fullVideo"/>
        <h3>inspiration from insights</h3>
        <p>
          Embarking on one of design:success’ largest and deepest insight
          journeys around the world – multiple times. Interviewing consumers and
          agents across multiple locations, counties and continents.<br />
          Utilizing expert interview techniques as well technology throughout
          the entire process: iPads, proprietary software - and live recorded
          interview technique.
          <br />
          <br />
          <b>Results:</b> deeper insights, higher accuracy and easier to
          communicate to C-level suite and organization.
        </p>
        <ReactPlayer url="https://vimeo.com/163848176" className="halfVideo"/>
      </section>
    );
  }
}

export default AtoZSection;
