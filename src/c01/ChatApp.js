import React from "react";
import withTimer from "../c06/withTimer";

// class MessageList extends React.PureComponent {
//   render() {
//     console.log(this.props.messages);
//     return (
//       <ul>
//         {this.props.messages.map((msg, index) => (
//           <li key={index}>{msg}</li>
//         ))}
//       </ul>
//     );
//   }
// }

class MessageList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.messages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}

// export class ChatApp extends React.Component {
//   state = {
//     messages: [],
//     inputMsg: ""
//   };

//   handleInput = evt => {
//     this.setState({
//       inputMsg: evt.target.value
//     });
//   };
//   handleSend = () => {
//     const text = this.state.inputMsg;
//     console.log("text", text);
//     if (text) {
//       const newMessages = [...this.state.messages, text];
//       this.setState({
//         messages: newMessages,
//         inputMsg: ""
//       });
//     }
//   };
//   render() {
//     return (
//       <div>
//         <MessageList messages={this.state.messages} />
//         <div>
//           <input
//             type="text"
//             value={this.state.inputMsg}
//             onChange={this.handleInput}
//           />
//           <button onClick={this.handleSend}>Send</button>
//         </div>
//         <h2>{this.props.time.toLocaleString()}</h2>
//       </div>
//     );
//   }
// }

export class ChatApp extends React.Component {
  state = {
    messages: ["1", "2"],
    inputValue: ""
  };
  changeValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  submit = () => {
    const text = this.state.inputValue;
    console.log("text", text);
    if (text) {
      let arr = this.state.messages.concat()
      arr.push(text);
      const newMessages = arr
      console.log('newMessages', newMessages)
      this.setState({
        messages: newMessages,
        inputValue: ""
      });
    }
  };
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.changeValue}
          />
          <button onClick={this.submit}>提交</button>
        </div>
        {this.props.time.getTime()}
      </div>
    );
  }
}

export default withTimer(ChatApp);

// 注意点：
// 1. changeValue 要写成箭头函数
// 2. 建议使用es6的扩展运算符...，而不是用push
