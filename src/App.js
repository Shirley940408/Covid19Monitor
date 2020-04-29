import React from "react";

import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

export default class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedDData = await fetchData();
    this.setState({ data: fetchedDData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
