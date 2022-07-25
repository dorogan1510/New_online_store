import {
    AUTH,
    BASKET,
    ELECTRONICS,
    ITEM_PAGE,
    JEWERELY,
    MENCLOTHING,
    SHOP,
    WOMENCLOTHING,
} from './consts/paths'
import Auth from './pages/Auth'
import Basket from './pages/Basket'
import Electronics from './pages/Electronics'
import ItemPage from './pages/ItemPage'
import Jewerely from './pages/Jewerely'
import MenClothing from './pages/MenClothing'
import Shop from './pages/Shop'
import WomenClothing from './pages/WomenClothing'

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
    {
        path: AUTH,
        Component: Auth,
    },
    {
        path: ELECTRONICS,
        Component: Electronics,
    },
    {
        path: JEWERELY,
        Component: Jewerely,
    },
    {
        path: MENCLOTHING,
        Component: MenClothing,
    },
    {
        path: WOMENCLOTHING,
        Component: WomenClothing,
    },
]
