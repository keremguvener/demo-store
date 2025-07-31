
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Discover Your Style
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
          Premium clothing collection for men and women
        </p>
        <div className="space-x-4 animate-fade-in">
          <Link to="/products">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 transition-colors">
              Shop Now
            </Button>
          </Link>
          <Link to="/categories/female">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors">
              Women's Collection
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
