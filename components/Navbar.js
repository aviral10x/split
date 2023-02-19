import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import mail from '../public/mail.svg';


export default function Navbar() {
  return (
    <>
    <Image src='/mail' layout='fill'/>
<div className='flex justify-center items-center my-4'>
    <nav className='flex justify-between h-12 font-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl'>
      <Link href={'/'}>
        <span className='cursor-pointer font-bold text-3xl mx-4 my-2 flex transition ease-in-out delay-50 hover:-translate-y-2'>
            Split IT
        </span>
        </Link>
        <ul className= 'px-2 py-3 flex space-x-9 mx-4'>
      <Link href={'/'}>
            <li className='cursor-pointer text-xl font-bold transition ease-in-out delay-50 hover:-translate-y-1'>Home</li>
        </Link>

            <Link href={'/myrooms'}>
            <li className='cursor-pointer text-xl font-bold transition ease-in-out delay-50 hover:-translate-y-1'>My Groups</li>
            </Link>
            <Link href={'/transactions'}>
            <li className='cursor-pointer text-xl font-bold transition ease-in-out delay-50 hover:-translate-y-1'>Transactions</li>
            </Link>
            <Link href={'/notifications'}>
            <li className='cursor-pointer text-xl font-bold transition ease-in-out delay-50 hover:-translate-y-1'>Notifications</li>
            </Link>
            {/* <li className='cursor-pointer text-xl font-bold transition ease-in-out delay-50 hover:-translate-y-1'>Settings</li> */}

        </ul>  
        
        <ConnectButton />

    </nav>
</div>


</>
  )
}