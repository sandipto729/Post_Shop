import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import './searchProductPage.css';

const SearchProductPage = () => {
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${SummaryApi.searchProduct.url}?q=${query}`, {
        method: SummaryApi.searchProduct.method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('data:', data);

      if (data.success) {
        setProductList(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to fetch products');
    }
  };

  useEffect(() => {
    if (query) {
      fetchProduct();
    }
  }, [query]);

  return (
    <div className="search-product-page">
      <h2 className="search-title">Search Results</h2>
      <p className="search-description">
        Check each product page for other buying options. Price and other details may vary based on product size and color.
      </p>
      {productList.length > 0 ? (
        <div className="product-grid">
          {productList.map((product) => {
            const discountPercentage = (
              ((product.originalPrice - product.sellingPrice) / product.originalPrice) * 100
            ).toFixed(2);

            return (
              <div key={product._id} className="product-card">
                <Link to={`/product/${product._id}`} className="product-link">
                  <img
                    src={product.productPhotos[0]}
                    alt={product.productName}
                    className="product-image"
                  />
                  <h3 className="product-name">{product.productName}</h3>
                  <p className="product-brand">Brand: {product.productBrand}</p>
                  <p className="product-category">Category: {product.productCategory}</p>
                  <p className="product-description">{product.productDescription}</p>
                  <div className="price">
                    <p className="product-selling-price" style={{color:"green"}}>₹{product.productSellingPrice}</p>
                    <p className="product-price" style={{color:"red"}}>₹{product.productPrice}</p>
                    <p className="discount-percentage">
                      {(((product.productPrice-product.productSellingPrice)/product.productPrice)*100).toFixed(2)}% OFF
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="no-products">No products found</p>
      )}
    </div>
  );
};

export default SearchProductPage;
