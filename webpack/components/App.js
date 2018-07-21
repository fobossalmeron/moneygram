import React, { Component } from "react";
import Nav from "./Nav";
import Modal from "react-modal";
import HomeSection from "./presentational/HomeSection";
import AtoZSection from "./presentational/AtoZSection";
import MyWaySection from "./presentational/MyWaySection";
import ReBrandingSection from "./presentational/ReBrandingSection";
import CommunicationSection from "./presentational/CommunicationSection";
import ArchitectureSection from "./presentational/ArchitectureSection";
import EngageSection from "./presentational/EngageSection";
import scrollToComponent from "react-scroll-to-component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOn: false,
      modalOpen: false,
      maintenance: false
    };
    this.quitMaintenance = this.quitMaintenance.bind(this);
    this.initScrollMagic = this.initScrollMagic.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOn: !this.state.menuOn });
  }

  hideNav() {
    this.setState({ menuOn: false });
  }

  initScrollMagic() {
    const script = document.createElement("script");
    script.src = "assets/js/scrollmagic.js";
    script.async = true;
    document.body.appendChild(script);
  }

  quitMaintenance() {
    this.setState({ maintenance: false });
    this.initScrollMagic();
  }

  componentDidMount() {
    if (this.state.maintenance == false) {
      this.initScrollMagic();
    }
  }

  render() {
    var maintenanceScreen = (
      <div className="loading">
        <h2 className="blue">we're</h2>
        <h2 className="yellow">redesigning</h2>
        <h2 className="pink">ourselves</h2>
        <button onClick={this.quitMaintenance}>quit</button>
      </div>
    );
    var app = (
      <div>
        <Nav
          toggleMenu={this.toggleMenu.bind(this)}
          hideNav={this.hideNav.bind(this)}
          menuOn={this.state.menuOn}
          closeModal={this.closeModal.bind(this)}
          scrollToHome={() =>
            scrollToComponent(this.Home, { offset: 0, align: "top" })
          }
          scrollToAtoZ={() =>
            scrollToComponent(this.AtoZ, { offset: -45, align: "top" })
          }
          scrollToMyWay={() =>
            scrollToComponent(this.MyWay, { offset: -45, align: "top" })
          }
          scrollToReBranding={() =>
            scrollToComponent(this.ReBranding, { offset: -45, align: "top" })
          }
          scrollToCommunication={() =>
            scrollToComponent(this.Communication, { offset: -45, align: "top" })
          }
          scrollToArchitecture={() =>
            scrollToComponent(this.Architecture, { offset: -45, align: "top" })
          }
          scrollToEngage={() =>
            scrollToComponent(this.Engage, { offset: -45, align: "top" })
          }
        />
        <HomeSection
          ref={section => {
            this.Home = section;
          }}
        />
        <AtoZSection
          ref={section => {
            this.AtoZ = section;
          }}
        />
        <MyWaySection
          ref={section => {
            this.MyWay = section;
          }}
        />
        <ReBrandingSection
          ref={section => {
            this.ReBranding = section;
          }}
        />
        <CommunicationSection
          ref={section => {
            this.Communication = section;
          }}
          modalOpen={this.state.modalOpen}
          openModal={this.openModal.bind(this)}
          closeModal={this.closeModal.bind(this)}
        />
        <ArchitectureSection
          ref={section => {
            this.Architecture = section;
          }}
        />
        <EngageSection
          ref={section => {
            this.Engage = section;
          }}
        />
      </div>
    );
    var doRenderApp = this.state.maintenance ? maintenanceScreen : app;
    return doRenderApp;
  }
}

export default App;
