import React from 'react';

const MyOrder = (props) => {
    const { name, carName, email, Address, date } = props.myOrder
    return (
        <div>
            <h1>{name}</h1>
            <h1>{carName}</h1>
            <small>{date}</small>
        </div>
    );
};

export default MyOrder;