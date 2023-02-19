import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { TextInput, Box, Button, Text, Stack, Paper } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAccount, useSigner } from 'wagmi';
import { useSplitContract } from '../utils/contracts';
import { useMembers } from '../utils/useMembers';
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import group from '../public/group.png'

const AddTransaction: NextPage = () => {
  const { data: signer, isError: isError2, isLoading: isLoading2 } = useSigner();
  const { data: account, isError, isLoading } = useAccount();

  const contract = useSplitContract(signer);

  const form = useForm({
    initialValues: {
      address: "",
    },
  });

  const members = useMembers(contract, signer);

  if (isLoading) return <div>Loading account…</div>;
  if (isError) return <div>Error loading account</div>;

  return (
    <>


<Navbar />
<div className='flex justify-center items-center'>
<main>
<div className='grid grid-cols-2'>
<div className='my-16 mx-16'>
        <div className='rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 text-purple-500 '>
        <div className='flex justify-center items-center my-6 mx-10 '>
        <div className='rounded-2xl bg-slate-900 my-4 '>
        <div className=' text-3xl my-4 mx-8 cursor-pointer font-bold text-purple-500'>
Add Group Members
        </div>
        
        </div>
        </div>

        <Box sx={{ maxWidth: 300 }} mx="auto">
      <Stack>
        <h1>Members</h1>

        <form onSubmit={form.onSubmit(values => {
          console.log("values.address: " + values.address);
          (async () => {
            await contract.addMember(values.address);
            alert("Member added");
          })();
        })}>
          <Stack>
            <TextInput
              label="Address"
              placeholder="0x000000"
              required
              {...form.getInputProps('address')}
            />
            <Button type="submit">Submit</Button>
          </Stack>
        </form>

        <h2 className='text-white'>Existing members</h2>
        {members ? members.map(member =>
          <Paper key={member} shadow="xs" p="md">
            <Text lineClamp={4}>{member}</Text>
          </Paper>
        ) : <>Loading members...</>}

        <Link href="/"><a className={styles.link}>Back</a></Link>
      </Stack>
    </Box >

        <div className='flex  justify-end items-end my-24'>
        <div className=' text-xl mx-8 cursor-pointer font-bold text-white my-4'>
                Share This Group code to add members
                </div>
        </div>
        </div>
</div>
<div className="flex flex-col my-24 mx-36 justify-center">

        </div>
        

</div>
</main>
</div>


  
    </>
  );
}

export default AddTransaction;
