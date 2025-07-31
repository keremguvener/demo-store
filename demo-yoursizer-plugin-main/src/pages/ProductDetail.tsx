"use client"
import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import { Heart, Share, ShoppingCart } from 'lucide-react';
import { FindYourSizerWidgetWithoutProfile } from '@yoursizer/widget';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const handleSizeRecommended = (result: { success: boolean; size: string; message?: string; error?: string }) => {
    if (result.success && result.size) {
      setSelectedSize(result.size);
    }
  };

  const product = products.find(p => p.id === id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleAddToCart = () => {
    if (product.sizes.length > 1 && !selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (product.colors.length > 1 && !selectedColor) {
      toast.error('Please select a color');
      return;
    }

    const size = selectedSize || product.sizes[0];
    const color = selectedColor || product.colors[0];

    addToCart(product, size, color, quantity);
    toast.success('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square w-20 overflow-hidden rounded-md border-2 ${selectedImage === index ? 'border-gray-900' : 'border-gray-200'
                      }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{product.brand}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            {product.sizes.length > 1 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md transition-colors ${selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors.length > 1 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md transition-colors ${selectedColor === color
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                        }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  -
                </button>
                <span className="px-4 py-1 text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* <div>widget with lable data</div>
            <FindYourSizeWidget 
                licenseKey="963804c4-b46a-4384-a0fd-6089b6e2125d"
                productId="default_tshirt_female_095"
                brandId="default"
                clothingType="tshirt"
                
              /> */}
            {/* <div>widget with lable data with invalid license key</div>
            <FindYourSizeWidget 
            productId="kayra_night-maxi-black-big" 
            licenseKey="invalid-license-key" 
            clothingType="Trousers"
            brandId="kayra"
            /> */}


            {/* <div className='pt-16'>widget without labedl data kayra store pop up</div>
            <FindYourSizeWidgetWithoutSlider 
             licenseKey="963804c4-b46a-4384-a0fd-6089b6e2125d"
             productId="default_tshirt_female_095"
             brandId="default"
             clothingType="tshirt"
             /> */}

            {/* <div className='pt-16'>widget without labedl data kayra store pop up with invalid license key</div>
            <FindYourSizeWidgetWithoutSlider 
            licenseKey="963804c4-b46a-4384-a0fd-6089b6e2125d"
            productId="default_tshirt_female_095"
            brandId="default"
            clothingType="tshirt"
            /> */}

            <FindYourSizerWidgetWithoutProfile
             productId={product.productId}
             brandId={product.brandId}
             clothingType={product.clothingType}
             licenseStatus={{ isValid: true }}
             licenseKey="04699749-9a29-4b18-9e30-e53b80018aad"
             onSizeRecommended={handleSizeRecommended}
            />

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>

              <div className="flex space-x-4">
                <Button variant="outline" className="flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Product Details</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Premium quality materials</li>
                  <li>• Professional craftsmanship</li>
                  <li>• Comfortable fit</li>
                  <li>• Easy care instructions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Shipping & Returns</h4>
                <p className="text-gray-600">
                  Free shipping on orders over $100. Easy 30-day returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
