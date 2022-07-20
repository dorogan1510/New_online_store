import React, { useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { fetchProducts } from './http/itemAPI'
import { Context } from '.'

const App = () => {
    const { item } = useContext(Context)

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
