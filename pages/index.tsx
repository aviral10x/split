import { Box, Stack } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Split/3</title>
        <meta name="description" content="Spli3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

          <div className='flex justify-center items-center '>
      <main className='my-16 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 '>
        <div className='flex justify-center items-center my-8 mx-6'>
          <div className='rounded-2xl bg-slate-900 '>
          <Link href={'create'}>
            <div className=' text-4xl text-purple-500 cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-1 hover:text-white rounded-3xl font-bold my-4 mx-10'>
              Create Group

            </div>
            </Link>

          </div>
          </div>
          <div className='flex justify-center items-center font-bold '>
          OR
          </div>



        <div className='flex justify-center items-center my-8'>
          <div className='rounded-2xl bg-slate-900 '>
          <Link href={'join'}>
            <div className=' text-4xl text-purple-500 cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-1 rounded-3xl font-bold my-4 mx-10 hover:text-white'>
            Join Group
            </div>
            </Link>

          </div>

        </div>
        </main>
      </div>
          {/* <Link href="/members"><a className={styles.link}>Members</a></Link>
          <Link href="/balances"><a className={styles.link}>Balances</a></Link>
          <Link href="/add-transaction"><a className={styles.link}>Add transaction</a></Link>
          <Link href="/settle-up"><a className={styles.link}>Settle up</a></Link>
          <Link href="/deposit"><a className={styles.link}>Deposit</a></Link>
          <Link href="/withdraw"><a className={styles.link}>Withdraw</a></Link> */}
    </>
  );
}

export default Home;
