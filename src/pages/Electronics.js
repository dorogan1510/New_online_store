import React, { useContext, useEffect } from 'react'
import { Context } from '..'
import { fetchElectronics } from '../http/itemAPI'
import { Grid } from '@mui/material'
import ItemsList from '../components/ItemsList'

const Electronics = () => {
    const { item } = useContext(Context)

    useEffect(() => {
        fetchElectronics().then(data => item.setProducts(data))
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

export default Electronics
