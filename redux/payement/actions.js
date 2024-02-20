const PayementActions = {
    ADD: 'ADD'
}
function addPayement(item) {
    let amount = 0;
    for (let i = 0; i < item.length; i++) {
        amount += item[i].price;
    }
const payement = {
    items: [...item],
    totalAmount: amount,
    date: new Date().toISOString()
}
    return {
        type: PayementActions.ADD,
        payload: payement
    }
}   
export { PayementActions, addPayement }