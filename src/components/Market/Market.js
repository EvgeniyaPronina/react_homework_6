import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Market.css';

import { connect } from 'react-redux';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';

let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  handleCreateOrder = () => {
    const { createOrder } = this.props;
    let newOrder = getNewOrder();

    createOrder(newOrder);
  };

  hendleMoveOrder = () => {
    const { moveOrderToFarm, orders } = this.props;
    let order = orders[0];

    moveOrderToFarm(order);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="Market">
        <h2>Новые заказы в магазине</h2>
        <button onClick={this.handleCreateOrder}>Создать заказ</button>
        <button
          onClick={this.hendleMoveOrder}
          disabled={orders.length > 0 ? '' : 'disabled'}
        >
          Отправить заказ на ферму
        </button>
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

Market.propTypes = {
  orders: PropTypes.array,
  createOrder: PropTypes.func,
  moveOrderToFarm: PropTypes.func
};

const mapStateToProps = state => ({
  orders: state.market.orders
});

const mapDispatchToProps = dispatch => {
  return {
    createOrder: order => {
      dispatch(createOrder(order));
    },
    moveOrderToFarm: order => {
      dispatch(moveOrderToFarm(order));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
