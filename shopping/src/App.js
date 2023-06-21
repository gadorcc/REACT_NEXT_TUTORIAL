import { useState } from 'react'

export default function Shopping() {
  return (
      <div>
        <FilterableProductTable />
      </div>

  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

function SearchBar() {
  return(
    <form>
      <input type="text" placeholder="Search.." />
      <input type="checkbox" id="search" />
      <label for = "search">Only show products in stock </label>
    </form>
  );
}

function ProductTable( { products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category != lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
    }
  })

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
  </table>
);

}

function ProductCategoryRow({ category }) {
  return(
    <tr>
      <th colSpan='2'>
        {category}
      </th>
    </tr>
  );
}

function ProductRow( {product}) {
  const name = product.stocked ? product.name :
    <span style ={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
