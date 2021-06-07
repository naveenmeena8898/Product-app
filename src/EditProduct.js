import React, { useState, useEffect } from 'react'

const EditProduct = (props) => {
  const [product, setProduct] = useState(props.currentProduct)

  useEffect(
    () => {
      setProduct(props.currentProduct)
    },
    [ props ]
  )

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  return (
    <form
      onSubmit={ event => {
        event.preventDefault()

        props.updateProduct(product.id, product)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleInputChange}
      />
      <label>description</label>
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleInputChange}
      />
      <button>Update product</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditProduct