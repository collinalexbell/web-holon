class Goal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", null, React.createElement("h2", null, "Goal: ", this.props.name), this.props.description != undefined && this.props.description.length > 0 && React.createElement("h4", null, "Description: ", this.props.description));
  }

}