import { supabase } from './config';

export const coursesAPI = {
  // Create course
  createCourse: async (courseData: any) => {
    const { data, error } = await supabase
      .from('courses')
      .insert([courseData])
      .select();
    return { data, error };
  },

  // Get course by ID
  getCourseById: async (courseId: string) => {
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        producer:producer_id (
          id,
          email
        ),
        co_producers:course_co_producers (
          co_producer_id,
          percentage
        ),
        affiliations (
          affiliate_id,
          status,
          commission_percentage
        )
      `)
      .eq('id', courseId)
      .single();
    return { data, error };
  },

  // Update course
  updateCourse: async (courseId: string, courseData: any) => {
    const { data, error } = await supabase
      .from('courses')
      .update(courseData)
      .eq('id', courseId)
      .select();
    return { data, error };
  },

  // Add co-producer
  addCoProducer: async (courseId: string, coProducerId: string, percentage: number) => {
    const { data, error } = await supabase
      .from('course_co_producers')
      .insert([{
        course_id: courseId,
        co_producer_id: coProducerId,
        percentage
      }])
      .select();
    return { data, error };
  },

  // Get producer courses
  getProducerCourses: async (producerId: string) => {
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        co_producers:course_co_producers (
          co_producer_id,
          percentage
        ),
        affiliations (
          affiliate_id,
          status,
          commission_percentage
        ),
        transactions (
          amount,
          status,
          created_at
        )
      `)
      .eq('producer_id', producerId);
    return { data, error };
  },

  // Get co-producer courses
  getCoProducerCourses: async (coProducerId: string) => {
    const { data, error } = await supabase
      .from('course_co_producers')
      .select(`
        percentage,
        course:course_id (
          *,
          producer:producer_id (
            id,
            email
          ),
          transactions (
            amount,
            status,
            created_at
          )
        )
      `)
      .eq('co_producer_id', coProducerId);
    return { data, error };
  }
};