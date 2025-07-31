import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Button } from '../components/ui/button';

const Products = () => {
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const filteredProducts = products.filter(product => {
    if (selectedGender === 'all') return true;
    if (selectedGender === 'male') return product.gender === 'male' || product.gender === 'unisex';
    if (selectedGender === 'female') return product.gender === 'female' || product.gender === 'unisex';
    return product.gender === selectedGender;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Clothing
          </h1>
          <p className="text-xl text-gray-600">
            Discover our complete collection of premium clothing items
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedGender === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedGender('all')}
              className="transition-colors"
            >
              All
            </Button>
            <Button
              variant={selectedGender === 'male' ? 'default' : 'outline'}
              onClick={() => setSelectedGender('male')}
              className="transition-colors"
            >
              Men's
            </Button>
            <Button
              variant={selectedGender === 'female' ? 'default' : 'outline'}
              onClick={() => setSelectedGender('female')}
              className="transition-colors"
            >
              Women's
            </Button>
            <Button
              variant={selectedGender === 'unisex' ? 'default' : 'outline'}
              onClick={() => setSelectedGender('unisex')}
              className="transition-colors"
            >
              Unisex
            </Button>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
