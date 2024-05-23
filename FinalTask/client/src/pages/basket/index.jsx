import React, { useContext } from 'react'
import { Table } from 'antd';
import { BasketContext } from '../../context/basketContext';
import { Button, Flex } from 'antd';
const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext)
  const columns = [
    {
      title: ' Title',
      dataIndex: 'title',
      showSorterTooltip: {
        target: 'full-header',
      },

    },
    {
      title: 'Count',
      dataIndex: 'count',

    },
    {
      title: 'Remove',
      render: (record) => (
        <Button onClick={() => {
          const updateBasket = basket.filter((x) => x._id != record._id)
          setBasket(updateBasket)
          localStorage.setItem('basket', JSON.stringify(updateBasket))
        }} style={{ marginTop: '30px' }} type="primary" danger >
          Delete
        </Button >
      )
    },
    {
      title: 'Increment',
      render: (record) => (
        <Button onClick={() => {
          const currentBasket = basket.find((x) => x._id == record._id)
          currentBasket.count += 1
          setBasket([...basket])
          localStorage.setItem('basket', JSON.stringify([...basket]))
        }} style={{ marginTop: '30px' }} type="primary" danger >
          +
        </Button >)
    },
    {
      title: 'Decrement',
      render: (record) => (
        <Button onClick={() => {
          const currentBasket = basket.find((x) => x._id == record._id)
          if (currentBasket.count > 0) {
            currentBasket.count -= 1
            setBasket([...basket])
            localStorage.setItem('basket', JSON.stringify([...basket]))
          } else {
            const updateBasket = basket.filter((x) => x._id != record._id)
            setBasket(updateBasket)
            localStorage.setItem('basket', JSON.stringify(updateBasket))
          }
        }} style={{ marginTop: '30px' }} type="primary" danger >
          -
        </Button >)
    },

  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div>
      
      <Table
      columns={columns}
      dataSource={basket}
      onChange={onChange}
      showSorterTooltip={{
        target: 'sorter-icon',
      }}
      style={{ paddingTop: '80px' }}
    /></div>
  )
}

export default Basket