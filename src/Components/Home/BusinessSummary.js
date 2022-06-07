import React from 'react';
import TotalOrders from './TotalOrders';
import TotalProducts from './TotalProducts';
import TotalUsers from './TotalUsers';

const BusinessSummary = () => {
    return (
        <section className='container mx-auto flex flex-col justify-center items-center'>
        <h1 className='text-5xl text-center font-bold mb-8'>Dynamic Business Summary</h1>
        <div className='flex justify-between items-center'>
            <div className='grid sm:grid-cols-4 content-center gap-10'>
                <TotalUsers></TotalUsers>
                <TotalProducts></TotalProducts>
                <TotalOrders></TotalOrders>
            </div>
        </div>
        </section>
    );
};
export default BusinessSummary;