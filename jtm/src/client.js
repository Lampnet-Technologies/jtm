import { createClient } from "@sanity/client";

export default createClient({
  projectId: "l8q5fbz7", 
  dataset: "production", 
  useCdn: true, 
  apiVersion: "2025-04-15" 
});
