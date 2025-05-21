
import { supabase } from './config';

export const authAPI = {
  signUp: async (email: string, password: string, userType: 'student' | 'seller' | 'admin' | 'affiliate') => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          user_type: userType,
        },
      },
    });
    return { data, error };
  },

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (data?.user) {
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role_id, roles(name)')
        .eq('user_id', data.user.id)
        .single();
      
      return { data: { ...data, role: roleData?.roles?.name }, error };
    }
    
    return { data, error };
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  resetPassword: async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    return { data, error };
  },

  getCurrentUser: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role_id, roles(name)')
        .eq('user_id', user.id)
        .single();
      
      return { ...user, role: roleData?.roles?.name };
    }
    return null;
  }
};
