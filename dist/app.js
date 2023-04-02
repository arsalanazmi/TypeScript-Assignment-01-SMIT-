"use strict";
const getData = async () => {
    let url = "https://dummyjson.com/products";
    const products = await fetch(url);
    return products.json();
};
const products = [];
getData()
    .then((data) => {
    const resData = data.products;
    resData.map((item) => {
        products.push({
            id: item.id,
            title: item.title,
            description: item.description,
            brand: item.brand,
            category: item.category,
        });
    });
    const myTable = document.createElement("table");
    myTable.className = "table table-striped table-bordered table-hover table-responsive";
    const header = ["Id", "Title", "Description", "Brand", "Category"];
    const tableHead = document.createElement("thead");
    tableHead.classList.add("table-dark");
    let newRow = document.createElement("tr");
    header.forEach((h) => {
        let cell = document.createElement("th");
        cell.innerText = h;
        newRow.appendChild(cell);
        tableHead.append(newRow);
        myTable.append(tableHead);
    });
    let tableBody = document.createElement("tbody");
    products.forEach((product) => {
        let newRow = document.createElement("tr");
        Object.values(product).forEach((value) => {
            let cell = document.createElement("td");
            cell.innerText = value;
            newRow.appendChild(cell);
        });
        tableBody.appendChild(newRow);
        myTable.appendChild(tableBody);
    });
    const productDiv = document.getElementById("productTable");
    productDiv.appendChild(myTable);
})
    .catch((error) => console.log(error));
//# sourceMappingURL=app.js.map