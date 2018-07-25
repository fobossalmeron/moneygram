import React, { Component } from "react";
import HamburgerIcon from "svg-react-loader?name=HamburgerIcon!../../assets/img/layout/hamburger.svg";
import DesignSuccess from "svg-react-loader?name=DesignSuccess!../../assets/img/layout/designSuccess.svg";
import DesignSuccessMobile from "svg-react-loader?name=DesignSuccess!../../assets/img/layout/designSuccessMobile.svg";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relative: false,
      menuToggled: false
    };
    this.navScrollMagic = this.navScrollMagic.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.doHideNav = this.doHideNav.bind(this);
  }

  toggleMenu() {
    this.setState({ menuToggled: !this.state.menuToggled });
    document.body.classList.toggle("restrictBody");
    document.addEventListener("touchstart", this.touchstart);
    document.addEventListener("touchmove", this.touchmove);
    function touchstart(e) {
      e.preventDefault();
    }
    function touchmove(e) {
      e.preventDefault();
    }
    this.props.closeModal();
  }

  doHideNav() {
    this.setState({ menuToggled: false });
    document.body.classList.remove("restrictBody");
    document.removeEventListener("touchstart", this.touchstart);
    document.removeEventListener("touchmove", this.touchmove);
    this.props.closeModal();
  }

  componentDidMount() {
    if (typeof this.props.relativePath !== "undefined") {
      this.setState({ relative: true }, () => this.navScrollMagic());
    } else {
      this.navScrollMagic();
    }
  }

  doScrollToHome() {
    this.props.closeModal();
    if (typeof this.props.scrollToHome !== "undefined") {
      event.preventDefault();
      this.props.scrollToHome();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#home");
      }
    }
  }

  doScrollToAtoZ() {
    this.props.closeModal();
    if (typeof this.props.scrollToAtoZ !== "undefined") {
      event.preventDefault();
      this.props.scrollToAtoZ();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#a-to-z");
      }
    }
  }

  doScrollToMyWay() {
    this.props.closeModal();
    
    if (typeof this.props.scrollToMyWay !== "undefined") {
      event.preventDefault();
      this.props.scrollToMyWay();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#myway");
      }
    }
  }

  doScrollToReBranding() {
    this.props.closeModal();
    
    if (typeof this.props.scrollToReBranding !== "undefined") {
      event.preventDefault();
      this.props.scrollToReBranding();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#rebranding");
      }
    }
  }

  doScrollToCommunication() {
    this.props.closeModal();
    
    if (typeof this.props.scrollToCommunication !== "undefined") {
      event.preventDefault();
      this.props.scrollToCommunication();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#communication");
      }
    }
  }

  doScrollToArchitecture() {
    this.props.closeModal();
    
    if (typeof this.props.scrollToArchitecture !== "undefined") {
      event.preventDefault();
      this.props.scrollToArchitecture();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#architecture");
      }
    }
  }

  doScrollToEngage() {
    this.props.closeModal();
    
    if (typeof this.props.scrollToEngage !== "undefined") {
      event.preventDefault();
      this.props.scrollToEngage();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#contact");
      }
    }
  }

  navScrollMagic() {
    var controllerX = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 0 }
    });
    var logoScene = new ScrollMagic.Scene({
      triggerElement: "body",
      offset: 20
    })
      .setClassToggle("header", "headerScroll")
      .addTo(controllerX);
  }

  render() {
    var baseUrl = this.state.relative ? this.props.relativePath : "";
    var active = this.state.menuToggled ? "active" : "";

    return (
      <header>
        <div className={`headerWrapper ${active}`}>
          <a
            href={"https://designsuccess.com"}
            className="hideText"
          >
            <DesignSuccess className="designSuccessLogo" />
            <DesignSuccessMobile className="designSuccessLogoMobile" />
            design:success
          </a>

          <HamburgerIcon
            id="hamburger"
            className={active}
            onClick={() => this.toggleMenu()}
          />
          <nav className={active}>
            <ul>
            <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToAtoZ();
                }}
              >
                <a href={baseUrl + "#a-to-z"}>a-to-z</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToMyWay();
                }}
              >
                <a href={baseUrl + "#myway"}>myway</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToReBranding();
                }}
              >
                <a href={baseUrl + "#rebranding"}>rebranding</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToCommunication();
                }}
              >
                <a href={baseUrl + "#communication"}>communication</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToArchitecture();
                }}
              >
                <a href={baseUrl + "#architecture"}>architecture</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToEngage();
                }}
              >
                <a href={baseUrl + "#contact"}>contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
