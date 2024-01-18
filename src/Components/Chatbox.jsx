import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";

const Chatbox = () => {
  return (
    <div className='relative '>
        <div className='flex items-center '>
            <img className='h-12 w-12 rounded-full'src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50dad8da-ce58-4540-a042-1313d34b7e56/dez932m-78ab3af2-fb7a-4c38-be04-82d99242cd29.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUwZGFkOGRhLWNlNTgtNDU0MC1hMDQyLTEzMTNkMzRiN2U1NlwvZGV6OTMybS03OGFiM2FmMi1mYjdhLTRjMzgtYmUwNC04MmQ5OTI0MmNkMjkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aUOhTs8UVLVRcdL4Bu_mACBQmlz0Q_J1JmG-vFm8_ng" alt="" />
            <div className='block ml-5 text-zinc-200'>
            <h4 className='text-2xl'>Naruto</h4>
            <p>Hii itachi...how are you ? </p>
        </div>
        <AiTwotoneDelete className='absolute right-5 text-3xl font-extrabold' />
        </div>
        <hr  className=' border-t border-slate-700 absolute right-8 w-10/12'/>
    </div>
  )
}

export default Chatbox;