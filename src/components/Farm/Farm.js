import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Farm.css';

import { connect } from 'react-redux';
import { moveOrderToCustomer } from '../../actions/farmActions';

export class Farm extends Component {
  hendleMoveOrder = () => {
    const { moveOrderToCustomer, orders } = this.props;
    let order = orders[0];

    moveOrderToCustomer(order);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="Farm">
        <h2>Производство на ферме</h2>
        <button onClick={this.hendleMoveOrder}>Отправить урожай клиенту</button>
        <div className="orders-cont">
          {orders.map((order, i) => (
            <div className="order" key={order.id}>
              <p>
                <span>Название: {order.name.toString()}</span>
                <span>Цена: {order.price} руб.</span>
              </p>
              <p>Создан: {order.createdAt.toString()}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Farm.propTypes = {
  orders: PropTypes.array,
  moveOrderToCustomer: PropTypes.func
};

const mapStateToProps = state => ({
  orders: state.farm.orders
});

const mapDispatchToProps = dispatch => {
  return {
    moveOrderToCustomer: order => {
      dispatch(moveOrderToCustomer(order));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
