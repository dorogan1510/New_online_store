import { makeAutoObservable } from 'mobx'

export default class ItemStore {
    constructor() {
        this._category = []
        this._products = []
        this._electronics = {}
        this._jewerely = {}
        this._menClothing = {}
        this._womanClothing = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        this._baskets = []
        makeAutoObservable(this)
    }

    setCategory(category) {
        this._category = category
    }
    setProducts(products) {
        this._products = products
    }

    setElectronics(electronics) {
        this._electronics = electronics
    }
    setJewerely(jewerely) {
        this._jewerely = jewerely
    }
    setMenClothing(menClothing) {
        this._menClothing = menClothing
    }
    setWomanClothing(womanClothing) {
        this._womanClothing = womanClothing
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
    get products() {
        return this._products
    }

    get electronics() {
        return this._electronics
    }
    get jewerely() {
        return this._jewerely
    }
    get menClothing() {
        return this._menClothing
    }
    get womanClothing() {
        return this._womanClothing
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
