class Goal extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <h2>Goal: {this.props.name}</h2>
        {this.props.description != undefined &&
          this.props.description.length > 0 &&

          <h4>Description: {this.props.description}</h4>}
      </div>
    )
  }
}
