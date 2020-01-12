class Routine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return React.createElement("div", null, React.createElement("a", {
      href: "#",
      onClick: this.props.deselectFn
    }, "back to All"), React.createElement("h1", null, this.props.path));
  }

}