class GoalList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {goals:props.goals}
  }

  mapGoals() {
    return this.state.goals.map((goal, i) => <li key={i}>{goal}</li>)}

  render() {
    return(
      <div>
        <a href="#home" onClick={this.props.toHome}>To Home</a>
        <ul>{this.mapGoals()}</ul>
      </div>
    )
  }
}
