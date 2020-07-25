import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
export default class pie extends Component {
  state = {
    label: ["oppCreated", "oppCompleted", "taskApproved"],
    datasets: [
      {
        data: [500, 300, 100],
        backgroundColor: ["red", "blue", "green"],
      },
    ],
  };
  render() {
    return (
      <div>
        <Pie
          data={{
            labels: this.state.label,
            datasets: this.state.datasets,
          }}
          height="50%s"
        />
      </div>
    );
  }
}
