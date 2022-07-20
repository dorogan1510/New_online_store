import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Shop from '../pages/Shop'
import { routes } from './../routes'

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
            ))}

            <Route path='*' element={<Shop />} />
        </Routes>
    )
}

export default AppRouter
