import React, { Component } from "react";

export class Amount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
  }

  componentDidMount() {
    this.setState({ amount: 0 })
  }

  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  };

  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  };

  onChangeHandler = (event) => {
    this.setState({ amount: Number(event.target.value) })
  }

  render() {
    return (
      <div>
        <input type="number" onChange={this.onChangeHandler} value={this.state.amount} />
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        {this.props.children(this.state.amount)}
      </div>
    );
  }
}

const Pound = ({ amount }) => <p data-testid='pound'>Pound: {round(amount * 0.19)}</p>;
const Euro = ({ amount }) => <p data-testid='euro'>Euro: {round(amount * 0.22)}</p>;

const RenderProps = () => (
  <section>
    <Amount>
      {(amount) => {
        return (
          <div data-testid='converter'>
            <p data-testid='pln'>Amount in PLN: {amount}</p>
            <Pound amount={amount} />
            <Euro amount={amount} />
          </div>
        )
      }}
    </Amount>
  </section>
);

export default RenderProps;


//helpers

function round(number) {
  return Math.round(number * 100) / 100

}

