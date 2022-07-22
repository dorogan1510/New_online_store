import { BASKET, ITEM_PAGE, SHOP } from './consts/paths'
import Basket from './pages/Basket'
import ItemPage from './pages/ItemPage'
import Shop from './pages/Shop'

export const routes = [
    {
        path: SHOP,
        Component: Shop,
    },
    {
        path: ITEM_PAGE + '/:id',
        Component: ItemPage,
    },
    {
        path: BASKET,
        Component: Basket,
    },
]
