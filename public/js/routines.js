class RoutineList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routines: []
    };
    this.getRoutines();
  }

  getRoutines() {
    let that = this;
    axios.get(window.location.pathname + ".json").then(function (response) {
      that.setState({
        routines: response.data.routines
      });
    });
  }

  renderRoutines() {
    console.log(this.state);
    return this.state.routines.map((routine, i) => {
      return React.createElement("li", {
        key: i
      }, React.createElement("a", {
        onClick: this.props.selectFn,
        href: "#"
      }, routine.path));
    });
  }

  render() {
    return React.createElement("div", null, React.createElement("h1", null, "Routines"), React.createElement("ul", null, this.renderRoutines()));
  }

}

class Routine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("h1", null, this.props.path);
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: true
    };
    this.hideList = this.hideList.bind(this);
    this.showList = this.showList.bind(this);
  }

  hideList() {
    this.setState({
      showList: false
    });
  }

  showList() {
    this.setState({
      showList: true
    });
  }

  render() {
    if (this.state.showList) {
      return React.createElement("div", null, React.createElement(RoutineList, {
        selectFn: this.hideList
      }));
    } else {
      return React.createElement(Routine, {
        path: ""
      });
    }
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));