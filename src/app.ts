const getData = async () => {
  let url = "https://dummyjson.com/products";
  const products = await fetch(url);
  return products.json();
};

type Product = {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
};

const products: Product[] = []; 

getData()
  .then((data) => {
    const resData: Product[] = data.products;

    resData.map((item: Product) => {
      products.push({
        id: item.id,
        title: item.title,
        description: item.description,
        brand: item.brand,
        category: item.category,
      });
    });

    const myTable = document.createElement("table")! as HTMLTableElement;
    myTable.className = "table table-striped table-bordered table-hover table-responsive"

    const header: string[] = ["Id","Title","Description","Brand","Category"];

    const tableHead = document.createElement("thead")! as HTMLTableSectionElement;
    tableHead.classList.add("table-dark");

    let newRow = document.createElement("tr")! as HTMLTableRowElement;
    
    header.forEach((h:string) => {
      let cell = document.createElement("th")! as HTMLTableCellElement;
      
      cell.innerText = h; 
      newRow.appendChild(cell);
      tableHead.append(newRow)
      myTable.append(tableHead);
    });

    let tableBody = document.createElement("tbody")! as HTMLTableSectionElement;

    products.forEach((product:Product) => {
      let newRow = document.createElement("tr")! as HTMLTableRowElement;

      Object.values(product).forEach((value) => {
        let cell = document.createElement("td")! as HTMLTableCellElement;
        cell.innerText = value as string;
        newRow.appendChild(cell);
      });
    
      tableBody.appendChild(newRow);
      myTable.appendChild(tableBody);
    });

    const productDiv = document.getElementById("productTable")! as HTMLDivElement;
  
    productDiv.appendChild(myTable) 
  })
  .catch((error: string) => console.log(error));
