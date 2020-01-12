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

class Routine extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <a href="#" onClick={this.props.deselectFn}>back to All</a>
        <h1>{this.props.path}</h1>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showList: true, routinePath: ""}
    this.genSelectRoutine = this.genSelectRoutine.bind(this);
    this.deselectRoutine = this.deselectRoutine.bind(this);
  }

  genSelectRoutine(path) {
    let that = this
    return function() {
      that.setState({showList: false, routinePath: path})
    }
  }

  deselectRoutine() {
    this.setState({showList: true, routinePath: ""})
  }

  render() {
    if(this.state.showList) {
      return(
        <div>
          <RoutineList selectFn={this.genSelectRoutine}/>
        </div>
      )
    }
    else {
      return(
        <div>
          <Routine path={this.state.routinePath} deselectFn={this.deselectRoutine}/>
        </div>
      )
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
