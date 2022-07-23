import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import DeviceStore from './store/ItemStore'
import UserStore from './store/UserStore'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider
        value={{ item: new DeviceStore(), user: new UserStore() }}
    >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Context.Provider>
)
