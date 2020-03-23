import React from "react";
import "./App.css";

import { CSSTransition } from "react-transition-group";
import { initGui } from "./App.gui";

import StrangerThingsLogo from "./components/StrangerThingsLogo/StrangerThingsLogo";
import HomePage from "./components/HomePage/HomePage";
import ProgramInfoPage from "./components/ProgramInfoPage/ProgramInfoPage";

export default class App extends React.Component {
  timeline;

  constructor(props) {
    super(props);

    this.state = {
      showHome: true
    };

    this.logo = React.createRef();
    this.showHome = this.showHome.bind(this);
    this.showProgramInfo = this.showProgramInfo.bind(this);
  }

  showHome(boolean) {
    this.setState({
      showHome: true
    });
  }

  showProgramInfo() {
    this.setState({
      showHome: false
    });
    this.logo.current.play();
  }

  render() {
    const { showHome } = this.state;

    return (
      <div className="app">
        <StrangerThingsLogo ref={this.logo}></StrangerThingsLogo>
        {showHome && <HomePage transition={this.showProgramInfo}></HomePage>}

        <CSSTransition
          in={!showHome}
          timeout={showHome ? 500 : 2000}
          appear={true}
          classNames="fade"
          mountOnEnter
          unmountOnExit
        >
          <ProgramInfoPage transition={this.showHome} className="page"></ProgramInfoPage>
        </CSSTransition>
      </div>
    );
  }
}
