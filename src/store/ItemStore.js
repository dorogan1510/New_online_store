import { makeAutoObservable } from 'mobx'

export default class ItemStore {
    constructor() {
        this._category = []
        this._products = []
        this._electronics = {}
        this._jewerely = {}
        this._menClothing = {}
        this._womanClothing = {}
        this._oneItem = {}
        this._page = 1
        this._totalCount = 0
        this._limitItems = 6
        this._basket = []
        this._basketItems = []
        makeAutoObservable(this)
    }

    setCategory(category) {
        this._category = category
    }
    setProducts(products) {
        this._products = products
    }
    setOneItem(oneItem) {
        this._oneItem = oneItem
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
    setLimitItems(limitItems) {
        this._limitItems = limitItems
    }

    setBasket(basket) {
        this._basket = basket
    }
    setBasketItems(basketItems) {
        this._basketItems = basketItems
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
    get oneItem() {
        return this._oneItem
    }

    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get limitItems() {
        return this._limitItems
    }
    get basket() {
        return this._basket
    }
    get basketItems() {
        return this._basketItems
    }
}
