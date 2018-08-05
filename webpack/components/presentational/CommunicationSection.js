import React, { Component } from "react";
import PlayButtonIcon from "./../../../assets/img/layout/playButton.svg";
import Modal from "react-modal";
import ReactPlayer from "react-player";

Modal.setAppElement("#app");
class CommunicationSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: "https://vimeo.com/270627606"
    };
  }

  chooseVideo(url) {
    this.setState(
      {
        selectedVideo: url
      },
      () => this.props.openModal()
    );
  }

  render() {
    return (
      <section id="communication">
        <h2>transformative communication</h2>
        <p>
          Creation of the first unified MoneyGram campaign – across products,
          markets and targets. The core concept: ‘We are all different – that’s
          what unites us’ became the driving force behind the massive production
          of almost 20 minutes of high-value production (regular campaign 30-60
          seconds).
          <br />
          <br />
          A 30 second umbrella commercial setting the stage for the core:
          MoneyGram is there for you, the way you want it, when you want it.
          <br />
          <br />
          Presented in a real and inspiring way: Storytelling that focusing on
          the individual. 5 ‘cine minutos’ (one minute stories) of people from
          different backgrounds keeping connections with their family and
          relatives far away their way. Connections are relevant – moneytransfer
          is ‘just’ a need, yet relevant.
          <br />
          <br />
          In addition multiple ‘how-to’ stories told by real people for real
          people – making new products relevant and easy to connect and
          comprehend – and ultimately use.
        </p>
        <div className="videoGrid">
          <div
            className="video"
            onClick={() => this.chooseVideo("https://vimeo.com/219010169")}
          >
            <PlayButtonIcon />
          </div>
          <div
            className="video"
            onClick={() => this.chooseVideo("https://vimeo.com/219011983")}
          >
            <PlayButtonIcon />
          </div>
          <div
            className="video"
            onClick={() => this.chooseVideo("https://vimeo.com/219006755")}
          >
            <PlayButtonIcon />
          </div>
          <div
            className="video"
            onClick={() => this.chooseVideo("https://vimeo.com/219011065")}
          >
            <PlayButtonIcon />
          </div>
          <div
            className="video"
            onClick={() => this.chooseVideo("https://vimeo.com/219006944")}
          >
            <PlayButtonIcon />
          </div>
          <div
            className="video"
            onClick={() => this.chooseVideo("https://vimeo.com/219007429")}
          >
            <PlayButtonIcon />
          </div>
        </div>
        <Modal
          isOpen={this.props.modalOpen}
          onRequestClose={() => this.props.closeModal()}
          contentLabel="Video Modal"
          className="modal"
          overlayClassName="overlay"
          onClick={this.doCloseModal}
        >
          <a className="close" onClick={() => this.props.closeModal()} />
          <ReactPlayer url={this.state.selectedVideo} className="video" />
        </Modal>
      </section>
    );
  }
}

export default CommunicationSection;
