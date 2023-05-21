import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.theadStyle}>
        <tr>
          <th className={css.thStyle}>Type</th>
          <th className={css.thAmount}>Amount</th>
          <th className={css.thCurrency}>Currency</th>
        </tr>
      </thead>
      {items.map(tr => (
        <tbody key={tr.id}>
          <tr className={css.trStyle}>
            <td className={css.trTypeStyle}>{tr.type}</td>
            <td className={css.trAmountType}>{tr.amount}</td>
            <td className={css.trCurrencyStyle}>{tr.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
