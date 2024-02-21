import React from 'react'

let url = 'https://i.pinimg.com/736x/6c/ed/c6/6cedc66af8e457ffaed2d3cd841980da.jpg';

function RoomTable() {


    return (
        <>
            <hr />
            <div className="p-4 sm:ml-64">
                <p className='text-[22px]'>รายละเอียดผู้เช่า</p>
                <div className="flex flex-wrap justify-center mt-10">
                    <div className="overflow-x-auto  w-[100%]">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>ชื่อ</th>
                                    <th>หมายเลขห้องพัก</th>
                                    <th>พิมพ์ใบเสร็จ</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={url} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        1001
                                        <br />
                                        <span className="badge badge-success text-white badge-sm">ไม่พบค่าเช่า</span>
                                    </td>
                                    <td><a href='/printConfig' className='text-dark btn btn-warning text-white btn-xs'>พิมพ์</a></td>
                                    <th>
                                        <button className="btn btn-success text-white btn-xs">รายละเอียด</button>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={url} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">ไม่พบค่าเช่า</div>
                                                <div className="text-sm opacity-50">China</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    1002
                                        <br />
                                        <span className="badge badge-warning text-white badge-sm">ค้างค่าใช่จ่าย</span>
                                    </td>
                                    <td><a href='/printConfig' className='text-dark btn btn-warning text-white btn-xs'>พิมพ์</a></td>
                                    <th>
                                        <button className="btn btn-success text-white btn-xs">รายละเอียด</button>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={url} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    1003
                                        <br />
                                        <span className="badge badge-error text-white badge-sm">ย้ายออก</span>
                                    </td>
                                    <td><a href='/printConfig' className='text-dark btn btn-warning text-white btn-xs'>พิมพ์</a></td>
                                    <th>
                                        <button className="btn btn-success text-white btn-xs">รายละเอียด</button>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={url} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Yancy Tear</div>
                                                <div className="text-sm opacity-50">Brazil</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    3003
                                        <br />
                                        <span className="badge badge-error text-white badge-sm">ย้ายออก</span>
                                    </td>
                                    <td><a href='/printConfig' className='text-dark btn btn-warning text-white btn-xs'>พิมพ์</a></td>
                                    <th>
                                        <button className="btn btn-success text-white btn-xs">รายละเอียด</button>
                                    </th>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>ชื่อ</th>
                                    <th>หมายเลขห้องพัก</th>
                                    <th>พิมพ์ใบเสร็จ</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomTable