import { supabase } from './config';

export const studentsAPI = {
  // Get all students
  getAllStudents: async () => {
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .order('created_at', { ascending: false });
    return { data, error };
  },

  // Get student by ID
  getStudentById: async (studentId: string) => {
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .eq('id', studentId)
      .single();
    return { data, error };
  },

  // Update student profile
  updateStudentProfile: async (studentId: string, profileData: any) => {
    const { data, error } = await supabase
      .from('students')
      .update(profileData)
      .eq('id', studentId)
      .select();
    return { data, error };
  },

  // Get student progress
  getStudentProgress: async (studentId: string, courseId: string) => {
    const { data, error } = await supabase
      .from('progress')
      .select('*')
      .eq('student_id', studentId)
      .eq('course_id', courseId)
      .single();
    return { data, error };
  },
};