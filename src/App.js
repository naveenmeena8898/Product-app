import React,{useState, Fragment} from 'react';
import './App.css';
import Table from './Table';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const App = () => {

  const productsData = [
    { id: 1,  name: 'Tania', description: 'floppydiskette', price: 200 },
    {  id: 2, name: 'Craig',  description: 'siliconeidolon', price: 300 },
    {  id: 3, name: 'Ben',   description: 'benisphere', price: 400 },
  ]
  const initialProductState = {id: null, name: '', description: '', price:'' }
  // Setting state
  
  const [products, setProducts] = useState(productsData)
  const [ currentProduct, setCurrentProduct ] = useState(initialProductState)
	const [ editing, setEditing ] = useState(false)

  const addProduct = (product) => {
    product.id = products.length + 1
    setProducts([...products, product])
  }

	const deleteProduct = id => {
		setEditing(false)

		setProducts(products.filter(product => product.id !== id))
	}

	const updateProduct = (id, updatedProduct) => {
		setEditing(false)

		setProducts(products.map(product => (product.id === id ? updatedProduct : product)))
	}

	const editRow = product => {
		setEditing(true)

		setCurrentProduct({ id: product.id, name: product.name, description: product.description, price: product.price })
	}

  return (
    <div className="container">
    <h1> Product App</h1>
    <div className="__row">
      <div className="flex-large">
        {editing ? (
						<Fragment>
							<h2>Edit product</h2>
							<EditProduct
								editing={editing}
								setEditing={setEditing}
								currentProduct={currentProduct}
								updateProduct={updateProduct}
							/>
						</Fragment>
					  ) : (
						<Fragment>
							<h2>Add product</h2>
							<AddProduct addProduct={addProduct} />
						</Fragment>
					)}
      </div>
      <div className="flex-large">
        <h2>View Product</h2>
        <Table  products={products} editRow={editRow} deleteProduct={deleteProduct}/>
      </div>
    </div>
  </div>
  )
}

export default App;
