import React from "react";
import { useState, useEffect } from "react";
import tick from '../assets/tick.png';
import data from '../components/details.json';
import axios from 'axios';

function AllTransaction() {
  async function getUser() {
    try {
      const response = await axios.get('http://localhost:5000/Alltransactions');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }




    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }});
  return (
    <div>

      <section class="text-gray-400 bg-gray-900 body-font">
        <h3 class="text-4xl font-normal leading-normal mt-0 mb-2 text-purple-800 md:flex-1" style={{paddingTop:'18px',display:"flex",justifyContent:'center',alignItems: "center"}}>
            Your Transactions
            </h3>
         <div class="container px-5 py-24 mx-auto" style={{justifyContent:'center',alignItems: "center"}}>
        <div class="mx-4 -my-8" style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
      
        {data.map((trans)=>
        
        <div class="py-8 px-3 lg:w-1/5 border-2 bg-grey" style={{padding:'20px',paddingLeft:'10px',margin:'7px',backgroundColor:"rgb(0, 64, 128)",borderRadius:"10px"}}>
          <div class="h-full flex items-start">
            <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            </div>
            <div class="flex-grow pl-6">
              <div class="tracking-widest text-xs title-font font-medium text-purple-400 mb-1" style={{fontSize:'18px'}}>{trans.name}</div>
              <h1 class="title-font text-xl font-medium text-white mb-3">{trans.BankName}</h1>
              <p class="leading-relaxed mb-5" style={{fontSize:'18px'}}>Account No : {trans.accountNo}</p>
              <a class="inline-flex items-center">
                <img alt="blog" src={tick} class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
                <span class="flex-grow flex flex-col pl-3">
                  <span class="title-font font-medium text-white">Rs.{trans.amount}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        )}
    

  
    </div>
  </div>
</section>
    </div>
  );
}

export default AllTransaction;
