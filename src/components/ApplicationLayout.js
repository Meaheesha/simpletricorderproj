import SlidePanel from "terra-slide-panel";
import React, { Component } from "react";
import FilterSelectOptionContainer from "../containers/FilterSelectOptionContainer";
import Results from "../components/Results";
export default class ApplicationLayout extends Component {
  renderPanelContent = () => (
    <div>
      <FilterSelectOptionContainer />
    </div>
  );
  renderMainContent = () => (
    <div>
      <Results />
    </div>
  );
  render() {
    return (
      <SlidePanel
        className="panel"
        fill
        panelBehavior="squish"
        panelPosition="start"
        panelSize="small"
        isOpen="true"
        panelContent={this.renderPanelContent()}
        mainContent={this.renderMainContent()}
        size="huge"
      />
    );
  }
}
