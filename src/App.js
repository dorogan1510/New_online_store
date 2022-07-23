import React, { useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { Context } from './index'

const App = () => {
    const { item, user } = useContext(Context)

    useEffect(() => {
        if (
            localStorage.getItem('token') !== '' &&
            localStorage.getItem('token') !== undefined &&
            localStorage.getItem('token')
        ) {
            user.setIsAuth(true)
        }
    }, [])

    return (
        <BrowserRouter>
            <NavBar />

            <AppRouter />
        </BrowserRouter>
    )
}

export default App
