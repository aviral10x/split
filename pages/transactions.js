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


    <div className='flex justify-center items-center' >
<div className=' font-bold text-3xl text-white my-24'>
You have no Transactions Yet ! 💔
</div>
</div>







    </>
    )
    
}