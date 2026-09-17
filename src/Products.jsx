import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/productSlice'

function Products() {
  const dispatch = useDispatch()
  const { products, status, error } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (status === 'pending') return <div>Loading...</div>
  if (status === 'failed') return <div>{error}</div>

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ width: '180px', border: '1px solid #ccc', padding: '8px' }}>
            <img src={product.thumbnail} alt={product.title} width="100%" />
            <h4>{product.title}</h4>
            <p style={{ fontSize: '12px' }}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
