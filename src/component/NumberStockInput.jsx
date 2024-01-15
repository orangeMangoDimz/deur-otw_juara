import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import CustomButton from './CustomButton';

const NumberStockInput = ({ increaseNum, decreaseNum, stock }) => {
    return (
        <form className="max-w-xs mx-auto">
            <div className="relative flex items-center bg-white border border-black outline-black">
                <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="rounded-s-lg p-3 h-11" onClick={() => { decreaseNum() }}>
                    <RiArrowDropLeftLine />
                </button>
                <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className=" h-11 text-center text-black block w-full py-2.5" placeholder="1" required value={stock} />
                <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="rounded-s-lg p-3 h-11" onClick={() => increaseNum()}>
                    <RiArrowDropRightLine />
                </button>
            </div>
        </form>
    )
}

export default NumberStockInput;