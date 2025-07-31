import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Evening Dress',
    brand: 'LUXE',
    productId : "default_tshirt_female_095",
    brandId : "default",
    clothingType : "dress",
    price: 129.99,
    originalPrice: 189.99,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566479179817-c7b0e9166b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'A stunning evening dress perfect for special occasions. Made from premium fabric with an elegant silhouette.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Burgundy'],
    inStock: true,
    featured: true,
    gender: 'female'
  },
  {
    id: '2',
    name: 'Classic Leather Jacket',
    brand: 'URBAN',
    productId : "default_jacket_female_107",
    brandId : "default",
    clothingType : "jacket",
    price: 249.99,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'Timeless leather jacket crafted from genuine leather. A wardrobe essential that never goes out of style.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown'],
    inStock: true,
    featured: true,
    gender: 'unisex'
  },
  {
    id: '5',
    name: 'Silk Blouse',
    brand: 'ELEGANCE',
    productId : "default_tshirt_female_095",
    brandId : "default",
    clothingType : "blouse",
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'Luxurious silk blouse with a sophisticated design. Perfect for office or evening wear.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Cream', 'Navy', 'Rose'],
    inStock: true,
    featured: false,
    gender: 'female'
  },
  {
    id: '6',
    name: 'Denim Jeans',
    brand: 'CASUAL',
    productId : "default_tshirt_female_095",
    brandId : "default",
    clothingType : "tshirt",
    price: 69.99,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'Classic denim jeans with a perfect fit. A versatile piece for any wardrobe.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black', 'Light Blue'],
    inStock: true,
    featured: false,
    gender: 'unisex'
  },
  {
    id: '7',
    name: 'Wool Coat',
    brand: 'WINTER',
    productId : "default_tshirt_female_095",
    brandId : "default",
    clothingType : "jacket",
    price: 199.99,
    originalPrice: 259.99,
    images: [
      'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'Warm and stylish wool coat perfect for cold weather. Elegant design with premium materials.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Camel', 'Black', 'Gray'],
    inStock: true,
    featured: false,
    gender: 'female'
  },
  {
    id: '8',
    name: 'Summer Dress',
    brand: 'SUMMER',
    productId : "default_tshirt_female_095",
    brandId : "default",
    clothingType : "dress",
    price: 59.99,
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'Light and breezy summer dress perfect for warm days. Comfortable and stylish.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Floral', 'White', 'Yellow'],
    inStock: true,
    featured: false,
    gender: 'female'
  },
  {
    id: '10',
    name: 'Casual T-Shirt',
    brand: 'BASIC',
    productId : "default_tshirt_female_095",
    brandId : "default",
    clothingType : "tshirt",
    price: 24.99,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'Comfortable cotton t-shirt perfect for everyday wear. Soft fabric and great fit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray', 'Navy'],
    inStock: true,
    featured: false,
    gender: 'unisex'
  },
  {
    id: '14',
    name: 'Formal Suit',
    brand: 'BUSINESS',
    productId : "default_tshirt_female_095",
    brandId : "default",
    clothingType : "suit",
    price: 299.99,
    originalPrice: 399.99,
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'Professional formal suit perfect for business meetings and special events.',
    sizes: ['38', '40', '42', '44', '46'],
    colors: ['Navy', 'Black', 'Charcoal'],
    inStock: true,
    featured: false,
    gender: 'male'
  },
  {
    id: '16',
    name: 'Casual Hoodie',
    brand: 'COMFORT',
    productId : "default_tshirt_female_095",
    brandId : "default",
    clothingType : "hoodie",
    price: 65.99,
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'Cozy and comfortable hoodie perfect for casual wear. Soft fleece interior.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy'],
    inStock: true,
    featured: true,
    gender: 'unisex'
  },
  {
    id: '17',
    name: 'Button-Up Shirt',
    brand: 'PROFESSIONAL',
    productId : "default_tshirt_female_095",
    brandId : "default",
    clothingType : "shirt",
    price: 89.99,
    images: [
      'https://images.unsplash.com/photo-1603252109360-909baac37c33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'Classic button-up shirt perfect for office wear. Premium cotton fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Light Blue', 'Light Pink'],
    inStock: true,
    featured: false,
    gender: 'male'
  },
  {
    id: '18',
    name: 'Maxi Dress',
    brand: 'BOHEMIAN',
    productId : "default_tshirt_female_095",
    brandId : "default",
    clothingType : "dress",
    price: 95.99,
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a13d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'Flowing maxi dress with beautiful patterns. Perfect for special occasions.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral Print', 'Solid Navy', 'Burgundy'],
    inStock: true,
    featured: true,
    gender: 'female'
  },
  {
    id: '19',
    name: 'Polo Shirt',
    brand: 'SPORT',
    productId : "default_tshirt_female_095",
    brandId : "default",
    clothingType : "shirt",
    price: 49.99,
    images: [
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'Classic polo shirt with a modern fit. Great for casual and semi-formal occasions.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Navy', 'Black', 'Red'],
    inStock: true,
    featured: false,
    gender: 'male'
  },
  {
    id: '20',
    name: 'Cardigan Sweater',
    brand: 'COZY',
    productId : "default_tshirt_female_095",
    brandId : "default",
    clothingType : "sweater",
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'clothing',
    description: 'Soft and warm cardigan sweater perfect for layering. Premium knit fabric.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Gray', 'Dusty Pink'],
    inStock: true,
    featured: false,
    gender: 'female'
  }
];
