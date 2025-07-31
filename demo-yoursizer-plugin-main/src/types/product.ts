
export interface Product {
  id: string;
  name: string;
  brand: string;
  productId: string;
  brandId: string;
  clothingType: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'clothing';
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
  gender: 'male' | 'female' | 'unisex';
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}
