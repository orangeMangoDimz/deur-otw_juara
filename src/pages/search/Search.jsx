import React from 'react'
import Header from "../../component/Header";
import Footer from '../../component/Footer';
import { IoIosSearch } from "react-icons/io";

const Search = () => {
    return (
        <>
            <Header />
            <div className="w-full relative h-screen flex justify-center items-center gap-y-5">
                <img src="/images/search/cover.png" alt="search_cover" className='absolute block w-full h-full' />
                <h1 className='font-extrabold text-white tracking-widest absolute text-5xl'>HOW CAN WE HELP YOU?</h1>
                <form className='absolute w-1/2' style={{ marginTop: '200px' }}>
                    <div className="flex justify center items-center gap-x-5 border-4 border-white outline-white rounded-lg">
                        <input type="search" id="default-search" className="block w-full p-4 text-dark text-white bg-transparent border rounded-lg border-none outline-none" placeholder="Type Something ..." required />
                        <IoIosSearch className="text-white me-3 text-3xl" />
                    </div>
                </form>

            </div>
            <Footer />
        </>
    )
}

export default Search;