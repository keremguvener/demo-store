
import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types/product';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gray-500 uppercase tracking-wide">{product.brand}</p>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-gray-900 hover:text-gray-700 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          
          <Link to={`/product/${product.id}`}>
            <Button size="sm" variant="outline" className="hover:bg-gray-900 hover:text-white transition-colors">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </Link>
        </div>
        
        {product.originalPrice && (
          <div className="mt-2">
            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
