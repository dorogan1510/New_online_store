import React, { useContext, useEffect } from 'react'
import { Context } from '..'
import { fetchJewelery } from '../http/itemAPI'
import { Grid } from '@mui/material'
import ItemsList from '../components/ItemsList'

const Jewerely = () => {
    const { item } = useContext(Context)

    useEffect(() => {
        fetchJewelery().then(data => item.setProducts(data))
    }, [item])

    return (
        <>
            <Grid
                container
                spacing={{ xs: 2, md: 3, sm: 3 }}
                columns={{ xs: 1, sm: 8, md: 12 }}
            >
                <ItemsList />
            </Grid>
        </>
    )
}

export default Jewerely
