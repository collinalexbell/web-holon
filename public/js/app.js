class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "home"
    };
  }

  select(selection) {
    let that = this;
    return function () {
      that.setState({
        selection: selection
      });
    };
  }

  render() {
    let goals = [React.createElement(Goal, {
      name: "first"
    }), React.createElement(Goal, {
      name: "second"
    })];

    switch (this.state.selection) {
      case "routines":
        return React.createElement(RoutineApp, {
          toHome: this.select("home")
        });

      case "goals":
        return React.createElement(GoalList, {
          goals: goals,
          toHome: this.select("home")
        });

      default:
        return React.createElement("div", null, React.createElement("a", {
          onClick: this.select("goals"),
          href: "#goals"
        }, "Goals"), React.createElement("br", null), React.createElement("a", {
          onClick: this.select("routines"),
          href: "#routines"
        }, "Routines"));
    }
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));