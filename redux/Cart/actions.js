const CartActions = {
    ADD: 'ADD_TO_CART',
    REMOVE: 'REMOVE_FROM_CART',
    CLEAR: 'CLEAR_CART'
}
function add(item) {
    console.log(item)
    return {
        type: CartActions.ADD,
        payload: item
    }
}
function remove(item) {
    return {
        type: CartActions.REMOVE,
        payload: item
    }
}
function clear() {
    return {
        type: CartActions.CLEAR
    }
}
export { CartActions, add, remove , clear}