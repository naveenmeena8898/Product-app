import React, { useState } from 'react'

const AddProduct = (props) => {
    const initialProductState = { id: null, name: '', description: '', price:''}
  const [product, setProduct] = useState(initialProductState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }
  return (
    <form
    onSubmit={ event => {
      event.preventDefault()
      if (!product.name || !product.description || !product.price) return

      props.addProduct(product)
      setProduct(initialProductState)
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
      <label>price</label>
      <input 
       type="text" 
       name="price"
        value={product.price}
        onChange={handleInputChange} 

        />
      <button>Add new Product</button>
    </form>
  )
  }

export default AddProduct
 