import React from "react";
import classNames from 'classnames'

class Tabs extends React.Component {
  state = {
    activeIndex: 0
  };

  render() {
    const { activeIndex } = this.state;

    // map over children and change their props conditionally
    // React.createElement can be used as well
    const tabs = React.Children.map(this.props.children, (child, index) => {

      const classname = classNames({
        activeLabel: activeIndex,
        label: !activeIndex
      })

      return (
        <button
          className={classname}
          onClick={() => this.setState({ activeIndex: index })}
        >
          {child.props.label}
        </button>
      );
    });

    // elements returned will be different than original children
    // no need to operate on the props inside render
    return (
      <div>
        <div>{tabs}</div>
        {/* this.props.children is an array */}
        {/* tab renders children, so we can use props.children */}
        {/* render tab info depending on the active index */}
        {this.props.children[this.state.activeIndex]}
      </div>
    );
  }
}

const Tab = ({ children }) => <div>{children}</div>;

const Containment = () => (
  <section>
    <Tabs defaultIndex={1}>
      <Tab label="Cheese">
        <p>Cheese is the best</p>
      </Tab>
      <Tab label="Hamburger">
        <p>Hamburgers taste great</p>
      </Tab>
      <Tab label="Vegan Burger">
        {/* render here whatever you like */}
        <h1>...tastes like grass</h1>
      </Tab>
    </Tabs>
  </section>
);

export default Containment

