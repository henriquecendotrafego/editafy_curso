import { supabase } from './config';

export const rolesAPI = {
  // Get user roles
  getUserRoles: async (userId: string) => {
    const { data, error } = await supabase
      .from('user_roles')
      .select(`
        role_id,
        roles (
          name
        )
      `)
      .eq('user_id', userId);
    return { data, error };
  },

  // Assign role to user
  assignRole: async (userId: string, roleName: string) => {
    const { data: roleData } = await supabase
      .from('roles')
      .select('id')
      .eq('name', roleName)
      .single();

    if (!roleData?.id) return { error: 'Role not found' };

    const { data, error } = await supabase
      .from('user_roles')
      .insert([
        { user_id: userId, role_id: roleData.id }
      ])
      .select();

    return { data, error };
  },

  // Remove role from user
  removeRole: async (userId: string, roleName: string) => {
    const { data: roleData } = await supabase
      .from('roles')
      .select('id')
      .eq('name', roleName)
      .single();

    if (!roleData?.id) return { error: 'Role not found' };

    const { error } = await supabase
      .from('user_roles')
      .delete()
      .match({ user_id: userId, role_id: roleData.id });

    return { error };
  }
};