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
    <div className='flex justify-center items-center '>

        <main className='my-16 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 text-purple-500'>
        <div className='flex justify-center items-center my-6 mx-6'>
        <div className='rounded-2xl bg-slate-900'>
        <div className=' text-3xl my-4 mx-8 cursor-pointer font-bold'>
        Create Custom Group
        </div>
        </div>
        </div>
        


        
        <div className=" p-4 mx-8 right flex flex-col">

    
    
        <input className="px-8 h-12 my-2  rounded-lg  bg-slate-900 text-purple-500" type="text" placeholder="Group Name">
    </input>
    <input className="px-8 h-12 my-2  rounded-lg  bg-slate-900 text-purple-500" type="text" placeholder="Group Type">
    </input>
    </div>








    <Link href={'createdroom'}>


        <div className='flex justify-center items-center my-5 mx-6'>
        <div className='rounded-2xl bg-slate-900'>
        <Link href="/members">
        <div className=' text-2xl my-3 mx-8 cursor-pointer font-bold hover:text-white'>
            Create
            </div>
        </Link>
       
       

            </div>
            </div>
            </Link>


        </main>
        </div>

    <Footer />
    </>
)

}