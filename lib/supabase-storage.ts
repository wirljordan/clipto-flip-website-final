import { supabase } from './supabase'

export const uploadVideo = async (file: File, orderId: string): Promise<{ url: string; error: string | null }> => {
  try {
    // Create a unique filename with order ID and timestamp
    const timestamp = Date.now()
    const fileExtension = file.name.split('.').pop()
    const fileName = `${orderId}_${timestamp}.${fileExtension}`
    
    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from('customer-videos')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })
    
    if (error) {
      console.error('Storage upload error:', error)
      return { url: '', error: error.message }
    }
    
    // Get the public URL for the uploaded file
    const { data: urlData } = supabase.storage
      .from('customer-videos')
      .getPublicUrl(fileName)
    
    return { url: urlData.publicUrl, error: null }
    
  } catch (error) {
    console.error('Video upload error:', error)
    return { url: '', error: 'Failed to upload video' }
  }
}

export const deleteVideo = async (fileName: string): Promise<{ error: string | null }> => {
  try {
    const { error } = await supabase.storage
      .from('customer-videos')
      .remove([fileName])
    
    if (error) {
      console.error('Storage delete error:', error)
      return { error: error.message }
    }
    
    return { error: null }
    
  } catch (error) {
    console.error('Video delete error:', error)
    return { error: 'Failed to delete video' }
  }
} 