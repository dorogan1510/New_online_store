import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { Rating, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOneItem } from '../http/itemAPI'

const ItemPage = () => {
    const [oneItem, setOneItem] = useState({ info: [] })
    const { id } = useParams()

    useEffect(() => {
        fetchOneItem(id)
            .then(data => setOneItem(data))
            .catch(data => console.log(data))
    }, [id])

    return (
        <>
            <Grid container component='main' sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={3}
                    sm={4}
                    md={4}
                    sx={{
                        padding: '2rem',
                        minHeight: '100px',
                        minWidth: '50px',
                    }}
                >
                    <img src={oneItem.image} height='100%' width='100%' />
                </Grid>
                <Grid xs={0} sm={0} md={2} />
                <Grid
                    xs={5}
                    sm={5}
                    md={6}
                    item
                    sx={{ textAlign: 'right', marginTop: '2rem' }}
                >
                    <Box sx={{ textAlign: 'right' }}>
                        <Rating
                            name='half-rating-read'
                            defaultValue={2.5}
                            precision={0.5}
                            readOnly
                        />
                    </Box>
                    <Grid
                        item
                        sx={{
                            color: 'primary.main',
                            fontSize: '2rem',
                            fontWeight: 700,
                            textDecoration: '',
                        }}
                    >
                        <div>Category:</div>
                        {oneItem.category.charAt(0).toUpperCase() +
                            oneItem.category.slice(1)}
                    </Grid>

                    <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        sx={{
                            fontSize: '2rem',
                        }}
                    >
                        {oneItem.title}
                    </Typography>
                    <Grid
                        sx={{
                            color: 'primary.main',
                            fontSize: '2rem',
                            fontWeight: 700,
                        }}
                    >
                        {oneItem.price}$
                    </Grid>

                    <Box>
                        <Button
                            variant='contained'
                            startIcon={<ShoppingCartRoundedIcon />}
                        >
                            Add to cart
                        </Button>
                    </Box>

                    <Grid
                        sx={{
                            fontSize: '1.5rem',
                        }}
                        item
                    >
                        <h3>Description:</h3>
                        {oneItem.description}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default observer(ItemPage)
