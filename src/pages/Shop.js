import Grid from '@mui/material/Grid'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '..'
import { default as ItemList } from '../components/ItemsList'
import Pages from '../components/Pages'
import { fetchProducts } from '../http/itemAPI'

const Shop = () => {
    const { item } = useContext(Context)

    useEffect(() => {
        fetchProducts(6).then(data => {
            item.setProducts(data)
            item.setTotalCount(data.length)
        })
    }, [])

    // const indexOfLastPost = item.page * item.limitItems
    // const indexOfFirstPost = indexOfLastPost - item.limitItems
    // const currentPosts = item.products.slice(indexOfFirstPost, indexOfLastPost)

    // const paginate = pageNumber => item.setPage(pageNumber)

    // console.log(item.page)

    return (
        <>
            <Grid
                container
                spacing={{ xs: 2, md: 3, sm: 3 }}
                columns={{ xs: 1, sm: 8, md: 12 }}
            >
                <ItemList />
                <Pages />
            </Grid>
        </>
    )
}

export default observer(Shop)
