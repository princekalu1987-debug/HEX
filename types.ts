
export interface Message {
  role: 'user' | 'model';
  content: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: number;
}
