import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { MdWork } from "react-icons/md";
 import { FaHome } from "react-icons/fa";
 import { IoMdLogOut } from "react-icons/io";
 

function Home() {

    const data = [
        {
          name: 'Monday',
          Present: 40,
          Absent: 24,
          amt: 24,
        },
        {
          name: 'Tuesday',
          Present: 30,
          Absent: 13,
          amt: 22,
        },
        {
          name: 'Wednesday',
          Present: 50,
          Absent: 28,
          amt: 22,
        },
        {
          name: 'Thrusday',
          Present: 27,
          Absent: 39,
          amt: 20,
        },
        {
          name: 'Friday',
          Present: 18,
          Absent: 48,
          amt: 21,
        },
        {
          name: 'Saturday',
          Present: 23,
          Absent: 38,
          amt: 25,
        },
        // {
        //   name: 'Page G',
        //   uv: 3490,
        //   pv: 4300,
        //   amt: 2100,
        // },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Staff</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>100</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Present</h3>
                    <MdWork className='card_icon'/>
                </div>
                <h1>67</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Leave</h3>
                    <FaHome className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Early out</h3>
                    <IoMdLogOut className='card_icon'/>
                </div>
                <h1>21</h1>
            </div>
        </div>
<div className="heading">
    <h2>Weekly Attendence Report</h2>
</div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Present" fill="#8884d8" />
                <Bar dataKey="Absent" fill="#ff4343" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Present" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Absent" stroke="#ff4343" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home