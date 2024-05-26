import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainPage = () => {
    return (
        <div className='flex flex-col max-w-full gap-8'>
            <div className='h-14 max-w-full items-center justify-start gap-5 flex pl-8'>
                <div>
                    <Link to="/">
                        Movie
                    </Link>
                </div>
                <div>
                    <Link to="/favouritemovie">
                        Favourite movie
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>

    )
}

export default MainPage