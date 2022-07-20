import { $host } from '.'

export const fetchCategory = async () => {
    const { data } = await $host.get('products/categories')
    return data
}

export const fetchProducts = async () => {
    const { data } = await $host.get('products')
    return data
}
