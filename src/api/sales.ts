import { supabase } from './config';

export const salesAPI = {
  // Get all sales
  getAllSales: async () => {
    const { data, error } = await supabase
      .from('sales')
      .select('*')
      .order('created_at', { ascending: false });
    return { data, error };
  },

  // Get sales by seller ID
  getSalesBySeller: async (sellerId: string) => {
    const { data, error } = await supabase
      .from('sales')
      .select('*')
      .eq('seller_id', sellerId)
      .order('created_at', { ascending: false });
    return { data, error };
  },

  // Create new sale
  createSale: async (saleData: any) => {
    const { data, error } = await supabase
      .from('sales')
      .insert([saleData])
      .select();
    return { data, error };
  },

  // Get sales analytics
  getSalesAnalytics: async (sellerId: string, period: 'day' | 'week' | 'month' | 'year') => {
    const { data, error } = await supabase
      .from('sales')
      .select('amount, created_at')
      .eq('seller_id', sellerId)
      .gte('created_at', getDateRange(period));
    return { data, error };
  },
};

function getDateRange(period: 'day' | 'week' | 'month' | 'year'): string {
  const now = new Date();
  switch (period) {
    case 'day':
      return new Date(now.setDate(now.getDate() - 1)).toISOString();
    case 'week':
      return new Date(now.setDate(now.getDate() - 7)).toISOString();
    case 'month':
      return new Date(now.setMonth(now.getMonth() - 1)).toISOString();
    case 'year':
      return new Date(now.setFullYear(now.getFullYear() - 1)).toISOString();
  }
}