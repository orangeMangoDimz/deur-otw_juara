import React from 'react'
import NumberStockInput from './NumberStockInput';

const Table = () => {

    const [stock, setStock] = React.useState(1)

    const increaseNum = () => {
        if (stock > 0) {
          setStock(stock + 1)
        }
      }
    
      const decreaseNum = () => {
        if (stock > 0) {
          setStock(stock - 1)
        }
      }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">SELECT</th>
                                    <th scope="col" className="px-6 py-4">ITEM</th>
                                    <th scope="col" className="px-6 py-4">PRODUCT TITLE</th>
                                    <th scope="col" className="px-6 py-4">QUANTITY</th>
                                    <th scope="col" className="px-6 py-4">UNIT PRICE</th>
                                    <th scope="col" className="px-6 py-4">TOTAL</th>
                                    <th scope="col" className="px-6 py-4">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium"><input type="checkbox" /></td>
                                    <td className="whitespace-nowrap px-6 py-4">IMAGE</td>
                                    <td className="whitespace-nowrap px-6 py-4">TITLE</td>
                                    <td className="whitespace-nowrap px-6 py-4"><NumberStockInput increaseNum={increaseNum} decreaseNum={decreaseNum} stock={stock} /></td>
                                    <td className="whitespace-nowrap px-6 py-4">Rp 649.000,-</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rp 1.298.000,-</td>
                                    <td className="whitespace-nowrap px-6 py-4 bg-[#567582]">X</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;