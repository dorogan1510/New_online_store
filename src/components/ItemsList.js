import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ITEM_PAGE } from '../consts/paths'
import '../styles.scss'
import { Context } from './../index'

export default observer(function ItemList({ currentPosts }) {
    const { item } = useContext(Context)

    const navigate = useNavigate()

    const indexOfLastPost = item.page * item.limitItems
    const indexOfFirstPost = indexOfLastPost - item.limitItems

    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{ padding: 6 }}
        >
            {item.products
                .slice(indexOfFirstPost, indexOfLastPost)
                .map(products => (
                    <Grid item xs={2} sm={4} md={4} key={products.id}>
                        <Card
                            onClick={() =>
                                navigate(ITEM_PAGE + '/' + products.id)
                            }
                            sx={{ maxWidth: 345 }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    height='240'
                                    image={products.image}
                                    alt='green iguana'
                                />
                                <CardContent>
                                    <Typography
                                        className='title-hidden'
                                        gutterBottom
                                        variant='h5'
                                        component='div'
                                    >
                                        {products.title}
                                    </Typography>
                                    <Typography
                                        className='description-hidden'
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        {products.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
        </Grid>
    )
})
