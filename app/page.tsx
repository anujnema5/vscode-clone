"use client"
import Image from 'next/image'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FileAddOutlined } from '@ant-design/icons';
import { FolderAddFilled } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import Select from '../components/Select';
import Fileinput from '../components/Fileinput';
import Folderinput from '../components/Folderinput';
import { useState } from 'react';


const ACTION = {
  FILE: "file",
  FOLDER: "folder",
  PROJECT: "project"
}


export default function Home() {
  const [input, setInput] = useState<String>(ACTION.PROJECT);

  const handleChange = (action: String) => {
    setInput(action)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='w-full h-auto flex'>
        <div className='w-1/5 min-h-screen flex flex-col bg-gray-300'>
          <div className='bg-blue-500 h-20 flex justify-center items-center'>
            <h1 className='text-xl text-gray-200 font-bold'>Sasta VS Code</h1>
          </div>
          <div className='flex items-center gap-3 w-full bg-gray-200 py-2 px-2'>
            <div className='px-1 flex justify-center items-center'>
              {input && input === ACTION.PROJECT ? <Select /> : input === ACTION.FILE ? <Fileinput /> : <Folderinput />}
            </div>
            {/* <Folderinput /> */}
            <FileAddOutlined className='cursor-pointer' onClick={() => handleChange(ACTION.FILE)} />
            <FolderAddFilled className='cursor-pointer' onClick={() => handleChange(ACTION.FOLDER)} />
            {input !== ACTION.PROJECT && <div className='flex items-center justify-center cursor-pointer' onClick={() => handleChange(ACTION.PROJECT)}>
              <CloseOutlined />
            </div>}
          </div>
        </div>
      </div>
    </main>
  )
}
