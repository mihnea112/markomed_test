
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price?: number;
  image: string;
  isNew?: boolean;
  discount?: number;
  specs?: { [key: string]: string };
}

export interface Supplier {
  id: string;
  name: string;
  country: string;
  description: string;
  logo: string;
  logoType?: 'image' | 'text';
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote: string;
  bio: string;
}

export type Domain = {
  icon: string;
  title: string;
};
