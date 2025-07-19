import { div } from 'framer-motion/client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const data = [
  { name: 'Mon', uv: 400 },
  { name: 'Tue', uv: 300 },
  { name: 'Wed', uv: 500 },
  { name: 'Thu', uv: 200 },
  { name: 'Fri', uv: 278 },
];


const pieData = [
  { name: "AI", value: 40 },
  { name: "Tasks", value: 30 },
  { name: "Coding", value: 20 },
  { name: "Writing", value: 10 },
];

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

const Card = ({ title, value }:any) => (
  <div className="bg-black flex flex-col rounded-xl justify-center items-center shadow-sm shadow-gray-300 p-6 text-center w-full lg:h-2/3 lg:w-1/5">
    <h3 className="text-xl md:text-sm font-semibold mb-2">{title}</h3>
    <p className="text-3xl lg:text-xl  text-blue-600">{value}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className='md:h-screen  bg-black  md:overflow-hidden pt-0'>
    <div className="p-6 h-full  text-white ">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
     <div className='md:flex w-full gap-2'>
     <div className='lg:w-1/2  rounded-xl  h-full md:pb-10 mb-10'>
      <h3 className="text-xl m-4">Usage Breakdown</h3>
  
<ResponsiveContainer className={"shadow-md shadow-gray-300 my-10 h-2/3 rounded-xl"} width="100%" height={300}>
  <PieChart>
    <Pie
      data={pieData}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
      fill="#8884d8"
      label
      
    >
      {pieData.map((_, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
  
</ResponsiveContainer>
    
<div className="flex w-full bg-black justify-center h-1/3 flex-wrap gap-2 mb-6">   
      <Card title="Users" value="1,200" />
        <Card title="Revenue" value="$12,000" />
        <Card title="Sessions" value="3,000" />
        <Card title="Sessions" value="3,000" />

      </div>
      </div>
    
      
      <div className="bg-black w-full h-full flex flex-col ">
     <div className=' rounded-xl md:h-1/2 lg:h-full p-6 '>
     <h3 className="text-xl ">Weekly Activity</h3>
<ResponsiveContainer width="100%" className={"shadow-md shadow-gray-300 my-10 h-2/3 rounded-xl"} height={500}>
  <BarChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="uv" radius={[10, 10, 0, 0]}>
      {data.map((_, index) => (
        <Cell key={`cell-${index}`} fill={getRandomColor()} />
      ))}
    </Bar>
  </BarChart>
</ResponsiveContainer>
     </div>
     <div className='flex  flex-col rounded-xl shadow-md shadow-gray-300 p-6 h-full md:m-5'>
     <h3 className="text-xl mb-4">Insights</h3>
     Most of your usage this week was centered around coding assistance, followed by writing and task generation. Consider allocating more time to areas that drive the highest value
     </div>

      </div>
   
     </div>
    
    
    </div>
    </div>
  );
};

export default Dashboard;