import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._category = []
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        this._baskets = []
        makeAutoObservable(this)
    }

    setTypes(category) {
        this._category = category
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }
    setLimit(limit) {
        this._limit = limit
    }
    setBaskets(basket) {
        this._baskets = basket
    }

    get category() {
        return this._category
    }
    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
    get basket() {
        return this._baskets
    }
}