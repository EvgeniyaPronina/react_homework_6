import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Budget.css';

import { connect } from 'react-redux';

export class Budget extends Component {
  state = {
    total: 0
  };

  componentWillReceiveProps(newProps) {
    const { profit, sallersExpenses, farmExpanse, deliveryExpanse } = newProps;
    this.setState({
      total: +profit - sallersExpenses - farmExpanse - deliveryExpanse
    });
  }

  render() {
    const {
      profit,
      sallersExpenses,
      farmExpanse,
      deliveryExpanse
    } = this.props;
    const { total } = this.state;

    return (
      <div className="Budget">
        <h2>Бюджет</h2>
        <p>
          Всего получено денег:
          <span> {profit}</span>
        </p>
        <p>
          Расходы продавцов:
          <span> {sallersExpenses * -1}</span>
        </p>
        <p>
          Расходы на ферме:
          <span> {farmExpanse * -1}</span>
        </p>
        <p>
          Расходы на доставку:
          <span> {deliveryExpanse * -1}</span>
        </p>
        <p>
          Итого:
          <span> {total}</span>
        </p>
      </div>
    );
  }
}

Budget.propTypes = {
  profit: PropTypes.number,
  sallersExpenses: PropTypes.number,
  farmExpanse: PropTypes.number,
  deliveryExpanse: PropTypes.number,
  total: PropTypes.number
};

const mapStateToProps = state => ({
  profit: state.budget.profit,
  sallersExpenses: state.budget.sallersExpenses,
  farmExpanse: state.budget.farmExpanse,
  deliveryExpanse: state.budget.deliveryExpanse
});

export default connect(mapStateToProps)(Budget);
