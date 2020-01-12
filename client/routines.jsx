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
                <a onClick={this.props.selectFn} href="#">
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
    return <h1>{this.props.path}</h1>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showList: true}
    this.hideList = this.hideList.bind(this);
    this.showList = this.showList.bind(this);
  }

  hideList() {
    this.setState({showList: false})
  }

  showList() {
    this.setState({showList: true})
  }

  render() {
    if(this.state.showList) {
      return(
        <div>
        <RoutineList selectFn={this.hideList}/>
        </div>
      )
    }
    else {
      return(<Routine path=""/>)
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
