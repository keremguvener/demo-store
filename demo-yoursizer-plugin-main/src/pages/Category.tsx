
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Category = () => {
  const { category } = useParams<{ category: string }>();
  
  const filteredProducts = products.filter(product => {
    if (category === 'male') {
      return product.gender === 'male' || product.gender === 'unisex';
    }
    if (category === 'female') {
      return product.gender === 'female' || product.gender === 'unisex';
    }
    return product.category === category;
  });
  
  const categoryTitles = {
    clothing: 'All Clothing',
    male: "Men's Clothing",
    female: "Women's Clothing"
  };

  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles] || 'Products';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {categoryTitle}
          </h1>
          <p className="text-xl text-gray-600">
            Discover our {categoryTitle.toLowerCase()} collection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
