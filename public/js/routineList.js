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
        onClick: this.props.selectFn(routine.path),
        href: "#"
      }, routine.path));
    });
  }

  render() {
    return React.createElement("div", null, React.createElement("h1", null, "Routines"), React.createElement("ul", null, this.renderRoutines()));
  }

}