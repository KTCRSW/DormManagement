import React from 'react'
import AdminNav from './Admin.nav'
import './From.Admin.css';

function Expenses() {
    return (
        <>
            <AdminNav />
            <div className="p-4 sm:ml-64 bg-white h-[100vh]">
                <div className="flex flex-wrap justify-center mt-10">
                    <div className="p-4 w-[50%]">
                        <div className="flex rounded-lg h-full shadow-lg bg-blue-500 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <h2 className="text-white text-lg font-medium text-[22px]">ค่าห้องพัก</h2>
                            </div>
                            <div className="flex flex-col justify-between flex-grow">
                                <input type="text" placeholder="ค่าเช่า" class="input input-bordered bg-white w-full max-w-xs" />
                                <select class="select select-bordered w-full max-w-xs mt-2 bg-white">
                                    <option disabled selected>หมายเลขห้องพัก</option>
                                    <option>1001</option>
                                    <option>1002</option>
                                    <option>1003</option>
                                    <option>1004</option>
                                    <option>1005</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                </select>
                                <a href="#" className="mt-3 text-black  hover:text-blue-400 inline-flex items-center">
                                    <button className='btn btn-success text-white'>บันทึก</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="p-4 w-[50%]">
                        <div className="flex rounded-lg h-full bg-white shadow-lg bg-teal-400 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div
                                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[100%] text-green' viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z" /> <path fill-rule="nonzero" d="M14 2a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.706 6.707 8.003 8.003 0 0 1 14 2zm-4 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm1 1v1h2v2H9a.5.5 0 0 0-.09.992L9 13h2a2.5 2.5 0 1 1 0 5v1H9v-1H7v-2h4a.5.5 0 0 0 .09-.992L11 15H9a2.5 2.5 0 1 1 0-5V9h2zm3-5a5.985 5.985 0 0 0-4.484 2.013 8 8 0 0 1 8.47 8.471A6 6 0 0 0 14 4z" /> </g> </svg>
                                </div>
                                <h2 className="text-dark text-lg font-medium text-[22px]">ค้างค่าใช้จ่าย</h2>
                            </div>
                            <div className="flex flex-col justify-between flex-grow">
                                <p className="leading-relaxed text-base text-white dark:text-gray-300 text-[64px] justify-end">
                                    0 ห้อง
                                </p>
                                <a href="#" className="mt-3 text-black  hover:text-blue-400 inline-flex items-center">จัดการค่าเช่า
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Expenses