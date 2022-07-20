import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import Item from './Item'

export default observer(function ItemList() {
    return <Item />
})
