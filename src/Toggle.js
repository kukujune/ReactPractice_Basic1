import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  
    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick() {
    this.setState(preState => ({
      isToggleOn: !preState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}> 
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

// Call Back의 화살표 함수 사용
// 렌더링될 때마다 다른 콜백이 생성되므로 안쓰는게 좋음
class LoggingButton extends React.Component {
  handleClick() {
    console.log('This is:', this);
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        Click Me
      </button>
    ) 
  }

}

export {
  Toggle,
  LoggingButton
}