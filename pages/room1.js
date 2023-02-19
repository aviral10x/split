import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'



export default function create() {
    return (
    <>
    <Navbar />
    <div className='flex justify-center items-center'>
        <div className='my-16 mx-12'>
            <div className='text-3xl text-purple-500 font-bold'>
                Banglore's trip 
            </div>
        </div>
    </div>

    <div className=" flex flex-col bg-gradient-to-r from-purple-500 to-pink-500  rounded-xl p-8 w-1/4 mx-20 my-2 ">
        <div className='flex justify-center items-center'>
    <div className=' text-xl text-white font-bold my-2'>
        Add Expenses
        </div>
        </div>
                <input className="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" placeholder="Amount (USD)" />
                {/* <input className="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" placeholder="Enter Wallet Address" /> */}
                <input className="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" placeholder="Description" />

                <hr className='my-2'/>
                <button className='bg-slate-900 text-purple-500 my-2 py-2 rounded-md font-bold hover:bg-slate-700 text-xl' onClick={''}>Add</button>
                </div>
    </>
    )
}








