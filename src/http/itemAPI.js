import { $host } from '.'

export const fetchCategory = async () => {
    const { data } = await $host.get('products/categories')
    return data
}

export const fetchProducts = async () => {
    const { data } = await $host.get('products')
    return data
}

export const fetchElectronics = async () => {
    const { data } = await $host.get('products/category/electronics')
    return data
}

export const fetchJewelery = async () => {
    const { data } = await $host.get('products/category/jewelery')
    return data
}
export const fetchMenClothing = async () => {
    const { data } = await $host.get(`products/category/men's clothing`)
    return data
}
export const fetchWomenClothing = async () => {
    const { data } = await $host.get(`products/category/women's clothing`)
    return data
}

export const fetchOneItem = async id => {
    const { data } = await $host.get('products/' + id)
    return data
}

export const fetchAddToBasket = async (userId, productId, quantity) => {
    const { data } = await $host.post('carts/', {
        userId,
        products: [{ productId, quantity }],
    })
    return data
}
export const fetchBasketItems = async () => {
    const { data } = await $host.get('carts/user/1')
    return data
}
