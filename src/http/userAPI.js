import { $host } from '.'

export const fetchLogin = async (username, password) => {
    const { data } = await $host.post('auth/login', {
        username,
        password,
    })
    return data
}
