import React, {useEffect, useState} from 'react';
import axios from "axios";

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=10`).then(res => {
      console.log(res.data);
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {
          products && products.map(product => {
            return (
              <div key={product.id}>
                <a href={`/products/${product.id}`} className="group">
                  <div
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img src={product.thumbnail}
                         alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                         className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                </a>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Index;