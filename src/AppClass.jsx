import React from "react";
import Counter from "./basic/components/Counter";

/**
 * class형의 장점 : 함수형 컴포넌트는 무언가 변경될때마다 함수 전체가 호출
 * => useState나 useMemo같은 리엑트 훅을 사용
 * 하지만 class형은 멤버 함수로 정의 돼어 있어서
 * => 상태가 변경될때마다 렌더함수만 호출이 됀다 즉 기존의 멤버함수는 그래로 유지가 돼기때문에 별도의 훅이 필요없다.
 */

export default class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("컴포넌트가 마운트 되었음!");
  }

  componentWillUnmount() {
    console.log("컴포넌트가 곧 언마운트될 예정임!");
  }

  render() {
    return (
      <div className="container">
        <div className="banner">
          Total Count: {this.state.count} {this.state.count > 10 ? "🔥" : "❄️"}
        </div>
        <div className="counters">
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
