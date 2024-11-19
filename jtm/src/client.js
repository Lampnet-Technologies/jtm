import { createClient } from "@sanity/client";

export default createClient({
  projectId: "orubexp3", 
  dataset: "production", 
  useCdn: true, 
  apiVersion: "2024-10-19" 
});
