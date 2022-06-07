import React from 'react';

const OrdersRow = ({order,index}) => {
    const { _id:id, img, name, email, address, phone, quantity, totalPrice } =
    order;
    return (
        <tr className='align-center'>
            <td className='text-sm '>{index+1}</td>
            <td>
              <img className='h-12 w-12 grid grid-cols-1' src={img} alt={name} /> <div cl>{name}</div> <div className='text-green-400'>{id}</div>
            </td>
            <td>{email}</td>
            <td>
              {address}
              {phone}
            </td>
            <td>{quantity}</td>
            <td className='text-red-500'>${totalPrice}</td>
            <td><div className='btn btn-error'>Delete</div></td>
            <td><div className='btn btn-success '>pay</div></td>
          </tr>
    );
};
export default OrdersRow;