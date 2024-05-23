import React from 'react'
import { Outlet } from 'react-router'
import Header from '../layout/header'
import Footer from '../layout/footer'

const MainRoot = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainRoot