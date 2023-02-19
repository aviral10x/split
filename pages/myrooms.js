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

    <div className='my-16 mx-16'>
        <div className='flex'>
            <Link href={'/room1'}>
        <div className='rounded-3xl bg-slate-900 '>
        <div className='flex justify-center items-center my-6 mx-10 '>
        <div className='rounded-2xl bg-slate-900 my-4 '>
        <div className=' text-3xl my-4 mx-8 cursor-pointer font-bold text-purple-500'>
Bangalore Trip
        </div>
        </div>
        </div>
        </div>
        </Link>
        </div>
        </div>

    </>
    )
    
}