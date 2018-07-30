import React, { Component } from "react";
import MyWayIcon from "./../../../assets/img/layout/myWay.svg";

class MyWaySection extends Component {
  render() {
    return (
      <section id="myway">
        <MyWayIcon />
        <h3>innovation: MyWay</h3>
        <p>
          Money transfer is personal and often loaded with emotional and
          physical stress. design:success created a detailed psychodynamic
          mapping to address pain points and transformative opportunities. Even
          though MoneyGram conducts millions of transactions daily every
          transaction is unique and personal for the individual sender and
          receiver. <br />
          <br />
          A one-size-fits-all transfer product is no longer relevant to
          consumers – they want solutions that fits their individual situation –
          at that moment – which may change dependent on multiple variables.
          design:success invented the term and approach ‘MyWay’. MoneyGram MyWay
          sums up the entire innovation process: creating relevant products and
          experiences for the individual.
        </p>
        <div className="quote">
          <p>
            Believing in our mantra: ‘perception equals reality’, the entire
            MoneyGram organization came together to unite and transform - an
            amazing innovative journey.
          </p>
          <span>Kim Norland, CEO design:sucecss</span>
        </div>
        <h3>Homerun Innovations</h3>
        <p>
          Based 100% on insights design:success innovated with core group
          multiple ground-braking product, service and experience innovations.
          Validation rated majority 90+% in acceptance rate and Top 3 in 98%
          acceptance rate, including communication of transaction flow as well
          as innovation of new transfer locations.
        </p>
        <img src="assets/img/layout/manphone.jpg" />
        <p>
          Trusted with special assignment to create transformative digital and
          IT innovations, the design:success digital expert from digital:success
          created multiple fully integrated and functional prototypes. Validated
          and optimized by real consumers. All products delivered for direct
          implementation by MoneyGram; saving resources, time. In short: cutting
          edge products faster to market.
        </p>
        <div className="quote">
          <p>
            design:success' process is a consumer-driven process that takes the
            guessing out of the equation hence improving significantly your
            success rate.
          </p>
          <span>Juan Agualimpia, f. CMO MoneyGram</span>
        </div>
      </section>
    );
  }
}

export default MyWaySection;
