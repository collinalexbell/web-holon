class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selection:"home"}
  }

  select(selection) {
    let that = this
    return function() {
      that.setState({selection:selection})
    }
  }

  render() {
    let goals = [<Goal name="first"/>, <Goal name="second"/>]
    switch(this.state.selection) {
      case "routines":
        return <RoutineApp toHome={this.select("home")}/>
      case "goals":
        return <GoalList goals={goals} toHome={this.select("home")}/>
      default:
        return (
          <div>
            <a onClick={this.select("goals")} href="#goals">Goals</a>
            <br/>
            <a onClick={this.select("routines")} href="#routines">Routines</a>
          </div>
        )

    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
