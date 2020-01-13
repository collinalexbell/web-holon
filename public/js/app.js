class App extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(RoutineApp, null));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));