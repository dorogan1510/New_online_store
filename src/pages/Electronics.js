import React, { useContext, useEffect, useState } from 'react'
import { Context } from '..'
import { fetchElectronics } from '../http/itemAPI'
import { Grid } from '@mui/material'
import ItemsList from '../components/ItemsList'
import Pages from '../components/Pages'

const Electronics = () => {
    const { item } = useContext(Context)

    // useEffect(() => {
    //     fetchElectronics(6).then(data => item.setProducts(data))
    // }, [item])
    // const [currentPage, setCurrentPage] = useState(1)

    // const indexOfLastPost = currentPage * item.limitItems
    // const indexOfFirstPost = indexOfLastPost - item.limitItems
    // const currentPosts = item.products.slice(indexOfFirstPost, indexOfLastPost)
    // const paginate = pageNumber => setCurrentPage(pageNumber)

    useEffect(() => {
        fetchElectronics(6).then(data => {
            item.setProducts(data)
            item.setTotalCount(data.length)
        })
    }, [])

    // const indexOfLastPost = item.page * item.limitItems
    // const indexOfFirstPost = indexOfLastPost - item.limitItems
    // const currentPosts = item.products.slice(indexOfFirstPost, indexOfLastPost)

    console.log(item.page)

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

export default Electronics
