import api from "./api";
import { Bookmark, CreateBookmarkData, UpdateBookmarkData } from "../types";

export const bookmarkService = {
  // Get all bookmarks
  getAll: async (): Promise<Bookmark[]> => {
    const response = await api.get<Bookmark[]>("/bookmarks");
    return response.data;
  },

  // Get bookmark by ID
  getById: async (id: number): Promise<Bookmark> => {
    const response = await api.get<Bookmark>(`/bookmarks/${id}`);
    return response.data;
  },

  // Create bookmark
  create: async (data: CreateBookmarkData): Promise<Bookmark> => {
    const response = await api.post<Bookmark>("/bookmarks", data);
    return response.data;
  },

  // Update bookmark
  update: async (id: number, data: UpdateBookmarkData): Promise<Bookmark> => {
    const response = await api.put<Bookmark>(`/bookmarks/${id}`, data);
    return response.data;
  },

  // Delete bookmark
  delete: async (id: number): Promise<void> => {
    await api.delete(`/bookmarks/${id}`);
  },
};
