export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      reviews: {
        Row: {
          body: string | null
          book_id: number | null
          created_at: string
          id: number
          rating: number | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          body?: string | null
          book_id?: number | null
          created_at?: string
          id?: number
          rating?: number | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          body?: string | null
          book_id?: number | null
          created_at?: string
          id?: number
          rating?: number | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
