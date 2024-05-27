import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function Home() {
  return (
    <div>

    <section className='container m-auto pt-40 mb-28'>
    <div className='flex flex-wrap justify-evenly'>
    <div className='mt-5 pt-10 mb-20 content-center'>
    
    <h2 className='text-8xl pb-5'>ProBlogger</h2>
    <p className='text-3xl'>Connect through words.</p>
    
    {/*Buttons */}
    <div className='mt-5'>
    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:border-gray-600 dark:hover:text-gray-950 dark:focus:ring-gray-700">Register</button><button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Login</button>
    </div>
    
    </div>
    <div>
    <img className='rounded' src='./main.png' />
    </div> 
    </div>
    </section>

    <div className='bg-slate-300 pb-20'>
    <section className='container m-auto text-center'>
    <h2 className='text-7xl p-10 pt-20 '>Features</h2>
    <div className='flex flex-wrap justify-evenly'>

          <div className='flex flex-col items-center text-3xl'>
          <GroupsIcon sx={{fontSize:"7rem"}}/>
          Connect with Others
        </div>

    <div className='flex flex-col items-center text-3xl'>
    <LightbulbIcon sx={{fontSize:"7rem"}}/>
    Get Inspired
    </div>

    <div className='flex flex-col items-center text-3xl'>
    <RocketLaunchIcon sx={{fontSize:"7rem"}}/>
    Increase your Reach
    </div>
    
    </div>

    </section>
    </div>
    
    
    </div>
  )
}
