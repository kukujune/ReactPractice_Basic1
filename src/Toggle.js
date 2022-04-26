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

// Call Back�� ȭ��ǥ �Լ� ���
// �������� ������ �ٸ� �ݹ��� �����ǹǷ� �Ⱦ��°� ����
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