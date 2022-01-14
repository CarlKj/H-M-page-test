let items = 0;
if (localStorage.getItem("items") != null) {
    items = localStorage.getItem("items");
    document.getElementById("item-number").innerText = `Shoppingbag(${items})`
}

function additem(itemid) {
    items++;
    localStorage.setItem('items', items);
    document.getElementById("item-number").innerText = `Shoppingbag(${items})`
}