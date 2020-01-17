import React, { Component } from "react";
import Pie from "../PieChart/index.js";


export default class DashboardChart extends Component {



  render() {
    const data = this.state.data;
    return (
        <div>
            <Pie/>
        </div>
      );
  }
}
