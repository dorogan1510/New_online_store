import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { Paper, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOneItem } from '../http/itemAPI'
import { Context } from './../index'
import { observer } from 'mobx-react-lite'

const ItemPage = () => {
    const { item } = useContext(Context)
    const { id } = useParams()

    useEffect(() => {
        fetchOneItem(id)
            .then(data => item.setOneItem(data))
            .catch(data => console.log(data))
    }, [id])

    const addToBasket = () => {
        item.oneItem.quantity = 1

        const exist = item.basketItems.find(x => x.id === item.oneItem.id)

        if (exist) {
            item.setBasketItems(
                item.basketItems.map(x =>
                    x.id === item.oneItem.id
                        ? { ...exist, quantity: exist.quantity + 1 }
                        : x
                )
            )
            localStorage.setItem('basket', JSON.stringify(item.basketItems))
        } else {
            item.setBasketItems([
                ...item.basketItems,
                { ...item.oneItem, quantity: 1 },
            ])
            localStorage.setItem('basket', JSON.stringify(item.basketItems))
        }
    }

    return (
        <>
            <Box sx={{ margin: '0 auto', maxWidth: 1536 }}>
                <Grid
                    container
                    spacing={6}
                    sx={{
                        marginTop: '1rem',
                        padding: '1rem',
                    }}
                >
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper
                            sx={{
                                p: 2,
                            }}
                        >
                            <Box
                                xs={3}
                                sm={4}
                                md={4}
                                sx={{
                                    padding: '2rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    alt=''
                                    src={item.oneItem.image}
                                    width='100%'
                                    height='auto'
                                />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={8}
                        sx={{
                            textAlign: 'right',
                        }}
                    >
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 'auto',
                            }}
                        >
                            <Typography gutterBottom variant='h5'>
                                {item.oneItem.title}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'primary.main',
                                    fontSize: '2rem',
                                    fontWeight: 600,
                                }}
                                paragraph
                            >
                                ${item.oneItem.price}
                            </Typography>

                            <Box sx={{ marginBottom: '1rem' }}>
                                <Button
                                    onClick={() => addToBasket(item.oneItem)}
                                    variant='contained'
                                    startIcon={<ShoppingCartRoundedIcon />}
                                >
                                    Add to cart
                                </Button>
                            </Box>

                            <Typography variant='h5'>Description:</Typography>
                            <Typography variant='body1'>
                                {item.oneItem.description}:
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default observer(ItemPage)
