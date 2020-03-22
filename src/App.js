import React from "react";
import "./App.css";

import { CSSTransition } from "react-transition-group";
import { initGui } from "./App.gui";

import StrangerThingsLogo from "./components/StrangerThingsLogo/StrangerThingsLogo";
import HomePage from "./components/HomePage/HomePage";
import ProgramInfoPage from "./components/ProgramInfoPage/ProgramInfoPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHome: true
    };

    this.transitionScreens = this.transitionScreens.bind(this);
  }

  componentDidMount() {
    initGui(this);
  }

  transitionScreens() {
    this.setState({
      showHome: !this.state.showHome
    });
  }

  render() {
    const { showHome } = this.state;

    return (
      <div className="app">
        <StrangerThingsLogo></StrangerThingsLogo>

        <CSSTransition in={showHome} appear={true} timeout={2000} classNames="fade">
          {showHome === true ? (
            <>
              <HomePage className="page" transition={this.transitionScreens}></HomePage>
            </>
          ) : (
            <>
              <ProgramInfoPage transition={this.transitionScreens} className="page"></ProgramInfoPage>
            </>
          )}
        </CSSTransition>
      </div>
    );
  }
}
