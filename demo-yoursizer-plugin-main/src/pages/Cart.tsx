
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-gray-600 mb-8">Add some amazing products to get started!</p>
            <Link to="/products">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
              <Button
                onClick={clearCart}
                variant="outline"
                size="sm"
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="px-6 py-4">
            {cartItems.map((item) => (
              <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex items-center space-x-4 py-6 border-b last:border-b-0">
                <div className="flex-shrink-0 w-24 h-24">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.product.name}</h3>
                  <p className="text-sm text-gray-500">{item.product.brand}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-600">Size: {item.size}</span>
                    <span className="text-sm text-gray-600">Color: {item.color}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100 rounded-md"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-3 py-1 text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 rounded-md"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                    className="text-red-600 hover:text-red-800 mt-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-gray-900">${getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="flex space-x-4">
              <Link to="/products" className="flex-1">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
              <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
