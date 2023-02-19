import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Box, NumberInput, Button, Select, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAccount, useSigner } from 'wagmi';
import { ethers } from 'ethers';
import { useSplitContract } from '../utils/contracts';
import { useMembers } from '../utils/useMembers';
import Navbar from '../components/Navbar'


const AddTransaction: NextPage = () => {
  const { data: signer, isError: isError2, isLoading: isLoading2 } = useSigner();
  const { data: account, isError, isLoading } = useAccount();

  const contract = useSplitContract(signer);

  const members = useMembers(contract, signer);

  const form = useForm({
    initialValues: {
      member: null,
      amount: "",
    },
  });

  if (isLoading) return <div>Loading account…</div>;
  if (isError) return <div>Error loading account</div>;

  return (

    <>
    <Navbar />
    <div className='flex justify-center items-center'>
        <div className='my-16 mx-12'>
            <div className='text-3xl text-purple-500 font-bold'>
                Bangalore Trip 
            </div>
        </div>
    </div>

    <div className=" flex flex-col bg-gradient-to-r from-purple-500 to-pink-500  rounded-xl p-8 w-1/4 mx-20 my-2 ">
        <div className='flex justify-center items-center'>
    <div className=' text-xl text-white font-bold my-2'>
        Add Expenses
        </div>
        <Box sx={{ maxWidth: 300 }} mx="auto">
      <Stack>
        <h1>Add Transaction</h1>

        <form onSubmit={form.onSubmit(values => {
          console.log("values.member: " + values.member);
          console.log("account.address: " + account!.address);
          console.log("values.amount:", values.amount);
          (async () => {
            await contract.adjust(values.member, account!.address, ethers.utils.parseEther(values.amount.toString()));
            alert("Transaction added");
          })();
        })}>
          <Stack>
            <Select
              label="Member"
              data={members ? members.map(member => ({
                label: member,
                value: member,
              })) : []}
              {...form.getInputProps('member')}
            />
            <NumberInput
              label="Amount"
              placeholder="0.01"
              precision={8}
              required
              {...form.getInputProps('amount')}
            />
            {/* <Button type="submit">Submit</Button> */}
          </Stack>
        </form>

        {/* <Link href="/"><a className={styles.link}>Back</a></Link> */}
      </Stack>
    </Box >
        </div>
                {/* <input className="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" placeholder="Amount (USD)" /> */}
                {/* <input className="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" placeholder="Enter Wallet Address" /> */}
                <input className="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" placeholder="Description" />

                <hr className='my-2'/>
                <button className='bg-slate-900 text-purple-500 my-2 py-2 rounded-md font-bold hover:bg-slate-700 text-xl' type='submit'>Add</button>
                </div>
  
    </>

  );
}

export default AddTransaction;
