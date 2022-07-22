import Grid from '@mui/material/Grid'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Context } from '..'
import { default as ItemList } from '../components/ItemsList'
import { fetchProducts } from '../http/itemAPI'

const Shop = () => {
    const { item } = useContext(Context)

    useEffect(() => {
        fetchProducts().then(data => item.setProducts(data))
        // fetchCategory().then(data => item.setCategory(data))
    }, [])

    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3, sm: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
        >
            <ItemList />
        </Grid>
    )
}

export default observer(Shop)
