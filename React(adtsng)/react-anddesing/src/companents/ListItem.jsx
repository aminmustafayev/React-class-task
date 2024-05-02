import React from 'react';
import { Table, Button} from 'antd';
import { useEffect, useState } from 'react';
import controller from '../All-js';
import { endpoints } from '../All-js/base';
import Swal from 'sweetalert2'

const ListItem = () => {
    const [orders, setOrders]= useState([]);

  
      useEffect(() => {
        controller.getAll(endpoints.orders).then((res) => {
            setOrders([...res.data]);
        });
      }, []);


    const columns = [


        {
            title: 'ID',
            dataIndex: 'id',
     
          },
          {
            title: 'Customer ID',
            dataIndex: 'customerId',

          },
        {
            title: 'Order Date',
            dataIndex: 'orderDate',
            sorter: (a, b) => a.orderDate.localeCompare(b.orderDate),
          },
          {
        title: 'Ship Via',
        dataIndex: 'shipVia',
       
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.shipVia - b.shipVia,
      }, 
       {
        title: "Delete",
        render: (record) => {
          console.log("record: ", record);
          return (
            <Button
              type="primary"
              danger
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    console.log(record.id);
                    controller.delete(endpoints.orders, record.id);
                    setOrders((orders) => {
                      return orders.filter((x) => x.id != record.id);
                    });
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success",
                    });
                  }
                });
              }}
            >
              delete
            </Button>)
        }

      }
    ];

    


    function onChange(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter);
      }
  return (
    <>
    <Table columns={columns} dataSource={orders} onChange={onChange} />
    </>
  )
}

export default ListItem

