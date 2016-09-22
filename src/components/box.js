import React, { Component } from 'react';

export default class BoxComponent extends Component {

  render() {
    const { box } = this.props;

    const divStyle = {
      top: box.y,
      left: box.x,
      position: 'absolute'
    };

    return (
        <div
          draggable="true"
          style={divStyle}
          onDrag={this.handleDrag}
        >
        Box1
        </div>
    );
  }

  handleDrag = (e) => {

    const { movebox } = this.props.actions;
    if (e.nativeEvent.clientX != 0 && e.nativeEvent.clientX != 0) {
        movebox(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }

  }

}
