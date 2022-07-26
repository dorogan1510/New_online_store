import React, { useContext, useEffect } from 'react'
import { Context } from '..'
import { fetchManClothing, fetchWomenClothing } from '../http/itemAPI'
import { Grid } from '@mui/material'
import ItemsList from '../components/ItemsList'
import Pages from '../components/Pages'

const WomenClothing = () => {
    const { item } = useContext(Context)

    useEffect(() => {
        fetchWomenClothing().then(data => item.setProducts(data))
    }, [item])

    return (
        <>
            <Grid
                container
                spacing={{ xs: 2, md: 3, sm: 3 }}
                columns={{ xs: 1, sm: 8, md: 12 }}
            >
                <ItemsList />
                <Pages />
            </Grid>
        </>
    )
}

export default WomenClothing
