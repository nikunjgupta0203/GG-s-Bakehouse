export interface WaitlistSubmission {
  id: string;
  name: string;
  email: string;
  timestamp: string;
  source?: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  highlight: string;
  items: string[];
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  text: string;
  tags: string[];
}
