import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format'

const Balance = () => {  
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
      <>
        <h4>Balance</h4>
        <h1>${numberWithCommas(balance)}</h1>  
      </>
  )
}

export default Balance;