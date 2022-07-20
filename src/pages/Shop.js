import React, { useContext, useEffect } from 'react'
import { fetchCategory, fetchProducts } from '../http/itemAPI'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import NavBar from '../components/NavBar'
import ItemList from '../components/ItemsList'

const Shop = () => {
    const { item } = useContext(Context)

    useEffect(() => {
        fetchProducts().then(data => item.setProducts(data))
        fetchCategory().then(data => item.setCategory(data))
    }, [])

    return (
        <div>
            <ItemList />
        </div>
    )
}

export default observer(Shop)
