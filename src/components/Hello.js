import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Hello() {
    return (
        <>
            <div>This is Hello comp</div>
            <ul>
                <li><Link to={"test1"}>tab 1 </Link></li>
                <li><Link to={"test2"}>tab 2 </Link></li>
            </ul>
            <Outlet />
        </>
    )
}
