import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'le59ttvl', 
  dataset: 'production',      
  apiVersion: '2023-10-10',    
  useCdn: true,            
});