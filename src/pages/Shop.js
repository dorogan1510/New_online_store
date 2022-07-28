import { CircularProgress } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Context } from '..'
import { default as ItemList } from '../components/ItemsList'
import Pages from '../components/Pages'
import { fetchProducts } from '../http/itemAPI'

const Shop = () => {
    const { item } = useContext(Context)

    useEffect(() => {
        fetchProducts(6)
            .then(data => {
                item.setProducts(data)
                item.setTotalCount(data.length)
            })
            .finally(() => item.setLoading(false))
    })

    if (item.loading) {
        return (
            <CircularProgress
                size={40}
                sx={{ display: 'block', margin: '5rem auto' }}
            />
        )
    }
    return (
        <>
            <Box>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3, sm: 3 }}
                    columns={{ xs: 1, sm: 8, md: 12 }}
                    sx={{ flexDirection: 'column' }}
                >
                    <ItemList />
                    <Pages />
                </Grid>
            </Box>
        </>
    )
}

export default observer(Shop)
