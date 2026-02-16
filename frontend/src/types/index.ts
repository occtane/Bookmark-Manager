export interface User {
  id: number;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
}

export interface Bookmark {
  id: number;
  url: string;
  title: string;
  description: string | null;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export interface CreateBookmarkData {
  url: string;
  title: string;
  description?: string;
}

export interface UpdateBookmarkData {
  url?: string;
  title?: string;
  description?: string;
}
