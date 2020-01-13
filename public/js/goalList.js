class GoalList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: props.goals
    };
  }

  mapGoals() {
    return this.state.goals.map((goal, i) => React.createElement("li", {
      key: i
    }, goal));
  }

  render() {
    return React.createElement("div", null, React.createElement("a", {
      href: "#home",
      onClick: this.props.toHome
    }, "To Home"), React.createElement("ul", null, this.mapGoals()));
  }

}