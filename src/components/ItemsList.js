import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from './../index'
import './Item.scss'

export default observer(function ItemList() {
    const { item } = useContext(Context)

    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{ padding: 6 }}
        >
            {item.products.map(products => (
                <Grid item xs={2} sm={4} md={4} key={products.id}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                height='140'
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
