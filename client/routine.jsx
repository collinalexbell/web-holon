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
