import { supabase } from './config';
import { AGORA_APP_ID } from './config';

export const liveAPI = {
  // Create live session
  createLiveSession: async (sessionData: any) => {
    const { data, error } = await supabase
      .from('live_sessions')
      .insert([sessionData])
      .select();
    return { data, error };
  },

  // Get live session details
  getLiveSession: async (sessionId: string) => {
    const { data, error } = await supabase
      .from('live_sessions')
      .select('*')
      .eq('id', sessionId)
      .single();
    return { data, error };
  },

  // Initialize Agora client
  initializeAgoraClient: async (channelName: string) => {
    // This is a placeholder for Agora SDK initialization
    // You'll need to implement the actual Agora client initialization here
    return {
      appId: AGORA_APP_ID,
      channelName,
      // Add other necessary Agora configurations
    };
  },

  // End live session
  endLiveSession: async (sessionId: string) => {
    const { data, error } = await supabase
      .from('live_sessions')
      .update({ status: 'ended', ended_at: new Date().toISOString() })
      .eq('id', sessionId)
      .select();
    return { data, error };
  },
};