const product= {name:"LED TV", price: 20000, instock: true};

product.price+=2000;

const products = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 60000 },
  { name: "Headphones", price: 2000 }
];

const updatedPrice = products.filter((product)=> {
  return product.price<30000;
})

console.log(updatedPrice);

const {name, price} = product;

console.log(name, price);
