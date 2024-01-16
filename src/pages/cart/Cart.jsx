import React from 'react'
import Table from '../../component/Table';
import Detailinfo from '../../component/DetailInfo';
import Header from '../../component/Header';
import Footer from '../../component/Footer';

const Cart = () => {
    return (
        <>
        <Header />
            <div className="flex justify-center items-center flex-col">
                <div className="container">
                    <h1 className='font-extrabold text-3xl tracking-widest text-center my-10'>YOUR SHOPPING CART</h1>
                    <Table />
                    <div className="flex justify-between items-start gap-x-10 my-10">
                        <div className="flex justify-center items-start flex-col gap-y-5">
                            <h1 className='text-[#464D5C] font-extrabold tracking-widest text-2xl'>Discount Code</h1>
                            <p className='text-[#A1A4B2]'>Don’t have any yet?  <span className='text-[#567582] font-bold'>
                                Check our discount programs
                            </span>
                            </p>
                            <form action="#">
                                <input type="text" placeholder='Enter your coupon here' className='bg-[#F2F3F7] border border-[#567582] outline-[#567582] px-3 py-2' />
                                <button className='px-5 py-2 bg-[#567582] text-white font-bold'>APPLY</button>
                            </form>
                        </div>
                        <div className="flex justify-center items-center flex-col gap-y-5">
                            <div className="flex jusitfy-start items-start flex-col gap-y-5 p-10 bg-[#567582] text-white">
                                <Detailinfo leftContent="Sub Total" rightContent=": Rp 2.297.000,-" />
                                <Detailinfo leftContent="Shipping" rightContent=": : Calculated during checkout" />
                                <Detailinfo leftContent="Tax" rightContent=": Rp 0,-" />
                                <div className='w-full bg-white' style={{ height: '2px' }}></div>
                                <Detailinfo leftContent={<span className='font-extrabold'>TOTAL</span>} rightContent={<span className='font-extrabold'>: Calculated during checkout</span>} />
                            </div>
                            <button className='px-5 py-2 border-2 border-[#567582] outline-[#567582] text-[#567582] w-full font-bold'>Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart;