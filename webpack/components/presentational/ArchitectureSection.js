import React, { Component } from "react";
import ReactPlayer from "react-player";

class ArchitectureSection extends Component {
  render() {
    return (
      <section id="architecture">
        <h3>
          The 100<span>% </span>&nbsp;innovation experience
        </h3>
        <p>
          Customers asked for the ultimate money transfer experience - and
          MoneyGram responded.<br />
          Commissioning design:success to identify, create and design everything
          from inside to out, from product to the actual interaction and
          service. Becoming the ultimate MoneyGram experience. <br />
          design:success identified location: 7702 North Central Express Way
          close to downtown Dallas with more than half a million cars passing
          daily.
        </p>
        <img src="assets/img/layout/MGstore.jpg" />
        <h3>
          The 100<span>% </span>&nbsp;innovation experience
        </h3>

        <p>
          Kim Norland personally created the design that completely transformed
          the building. Every detail was designed, specified and sourced with
          the help of the design:success design and architecture team. Local
          architect firm assisted to create to code.
          <br />
          <br />
          From his background of Scandinavian architecture and design, Kim
          Norland was inspired by the simplicity and complexity in nature. A
          minimalistic crown jewel of minimalist design.
          <br />
          <br />
          Our entire soul and heart into designing the ultimate experience.
          Every square inch of the building, façade, to was carefully thought
          out by the design:success team
          <br />
          <br />
          Dallas’ first and only Kinetic façade that moves in the wind creating
          beautiful patterns. By night the building illuminates with hundreds of
          LED’s to symbolize connections.
          <br />
          <br />
          The building overall represent a black-red apple where one have taken
          a bite, which exposes the white core. Inviting to explore.
          <br />
          <br />
          The world’s first drive thru money transfer location – a consumer idea
          that became reality; proving that MoneyGram listens to how some
          consumers want to do money transfers.
          <br />
          <br />
          Entering the Concept Store 1,500 square feet of cutting edge LED
          transforms the space to whatever is desired. Even video’s displayed
          were produced by design:success.
          <br />
          <br />
          Yet the ultimate design is the total experience that a consumer will
          experience; from staff to digital interaction. An inviting environment
          with no tellers, bullet-proof glass – rather embracing and relaxing.
          Free refreshments, charge stations and ‘geniuses’ to assist if things
          are not perfect with a transfer.
          <br />
          <br />
          An honor to be trusted to create the ultimate space from inside, in
          but physically to emotional experience. Thank you MoneyGram.
        </p>
        <ReactPlayer url="https://vimeo.com/277552174" className="fullVideo" />
        <img src="assets/img/layout/night.jpg" />
        <img src="assets/img/layout/day.jpg" />

        <div className="imageGrid">
          <div className="image" />
          <div className="image" />
          <div className="image" />
          <div className="image" />
          <div className="image" />
          <div className="image" />
        </div>
        <div className="quote">
          <p>
            Kim Norland is definitely an innovation expert with a ‘Yes We Can’
            attitude. This process not only helps you to identify new areas for
            innovation but helps you navigate through the delivery process.
          </p>
          <span>Juan Agualimpia, f. CMO MoneyGram</span>
        </div>
      </section>
    );
  }
}

export default ArchitectureSection;
