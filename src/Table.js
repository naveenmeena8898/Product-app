import React from 'react'

const Table = props => (
  <table>
    <thead>
      <tr>
        <th>  name </th>
        <th>  description </th>
        <th>  price </th>
        <th>  Actions </th>
      </tr>
    </thead>
    <tbody>
    {props.products.length > 0 ? (
        props.products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <button 
                onClick={() => {
                  props.editRow(product)
                }}
              className="button muted-button">
              Edit
              </button>
              <button 
                 onClick={() => props.deleteProduct(product.id)}
              className="button muted-button">
              Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={6}>No users</td>
        </tr>
      )}

    </tbody>
     
  </table>
)

export default Table