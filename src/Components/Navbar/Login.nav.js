import React from 'react'
import logo from '../Image/logo.png';



function Loginnav() {
    return (
        <div><div class="navbar bg-white ">
            <div class="flex-1">
                <img class="btn btn-ghost text-xl" src={logo}></img>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal bg-dark px-1">
                    <a className='btn btn-info text-white text-[18px] w-[150px]' href='/'>Login</a>
                </ul>
            </div>
        </div></div>
    )
}

export default Loginnav