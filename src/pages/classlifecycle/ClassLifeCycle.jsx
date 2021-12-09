import React, { Component } from 'react'
import { UnmountChild } from '../../components/unmountComp/UnmountChild';

export default class ClassLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red",show: true};
      }
    //   static getDerivedStateFromProps(props, state) {
    //     return {favoritecolor: props.color };
    //   }
    componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "green"})
        }, 1000)
      }
    changeColor = () => {
        this.setState({favoritecolor: "brown"});
    }
    shouldComponentUpdate() {
        return true;
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite color was " + prevState.favoritecolor;
      }
      componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite color is " + this.state.favoritecolor;
      }
      delHeader = () => {
        this.setState({show: false});
      }
      
      render() {
        let myheader;
        if (this.state.show) {
          myheader = <UnmountChild />;
        };
        return (
            <>
          <h1 style={{color: this.state.favoritecolor}}>My Favorite Color is {this.state.favoritecolor}</h1>
          <div id="div1"></div>
            <div id="div2"></div>
            <br></br>
          <button type="button" onClick={this.changeColor}>Change color</button>
          {myheader}
          <button type="button" onClick={this.delHeader}>Delete</button>
          </>
        );
      }
}
