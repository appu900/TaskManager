// src/components/Popup.js
import React, { useState } from 'react';
import { SlCalender } from "react-icons/sl";

const ShiftPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  function calculateTomorrowDate(){
    const date = new Date()
    let day = date.getDate() + 1;
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`
    return currentDate
  
  }

  function dayAfterTommowrowDate(){
    const date = new Date()
    let day = date.getDate() + 2;
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`
    return currentDate
  
  }

  const firstDate = calculateTomorrowDate()
  const secondDate = dayAfterTommowrowDate();

  const togglePopup = () => {

    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-[500px]">
      <button
        type="button"
        onClick={togglePopup}
        className=" uppercase   text-white font-semibold tracking-wide rounded focus:outline-none focus:ring focus:border-blue-300"
      >
        Shift Task
      </button>

      {isOpen && (
        <div className="fixed inset-0  flex items-center justify-center z-50">

          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className=" w-[800px] h-[330px] bg-white  rounded-md z-10">
            <div className='w-full h-[100px] bg-[#F3f6f8] rounded-t-md py-6 px-10'>
               <h1 className='text-2xl font-bold text-gray-700'>👋 Hi friend</h1>
               <p className='text-gray-700 capitalize ml-3 mt-[2px]'>Tell us a little about yourself so we can create a better experience for you.</p>
            </div>

            <div className='py-6 px-10 ml-3  '>

                <h1 className='text-xl font-bold text-gray-700 capitalize'> You can only shift this task maximum 3 days</h1>
                <div className='flex  mt-8  gap-[80px]'>
                    <div className='border px-8 flex flex-col py-8 bg-[#b9efea] rounded items-center gap-3 active:border active:border-black'>
                        <p className='text-black text-2xl text-center border border-black'><SlCalender/></p>
                
                        <p className='text-gray-700 capitalize'> {firstDate}</p>
                    </div>

                    <div className='border px-8 flex flex-col py-8 bg-[#b9efea] rounded items-center gap-3 active:border active:border-black'>
                        <p className='text-black text-2xl text-center border border-black'><SlCalender/></p>
                
                        <p className='text-gray-700 capitalize'> {firstDate}</p>
                    </div>

                    <div className='border px-8 flex flex-col py-8 bg-[#b9efea] rounded items-center gap-3 active:border active:border-black'>
                        <p className='text-black text-2xl text-center border border-black'><SlCalender/></p>
                
                        <p className='text-gray-700 capitalize'> {firstDate}</p>
                    </div>
                  
                </div>

            </div>
         
          </div>

          {/* close button */}

          <button
              type="button"
              onClick={togglePopup}
              className="border border-black"
            >
              Shift
            </button>
        </div>
      )}
    </div>
  );
};

export default ShiftPopup;
