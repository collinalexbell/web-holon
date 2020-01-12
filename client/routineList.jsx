class RoutineList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {routines: []}
    this.getRoutines()
  }

  getRoutines() {
    let that = this
    axios.get(window.location.pathname + ".json")
    .then(function (response) {
      that.setState({routines: response.data.routines})
    })
  }

  renderRoutines() {
    console.log(this.state)
    return(
      this.state.routines.map((routine, i) => {
        return <li key={i}>
                <a onClick={this.props.selectFn(routine.path)} href="#">
                  {routine.path}
                </a>
               </li>
      })
    )
  }

  render() {
    return(
      <div>
        <h1>Routines</h1>
        <ul>{this.renderRoutines()}</ul>
      </div>
    )
  }
}
