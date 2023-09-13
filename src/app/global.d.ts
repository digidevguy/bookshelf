import type { Database as DB } from '@/types/database.types';

declare global {
	type Database = DB;
	type Review = DB['public']['Tables']['reviews']['Row'];
}
