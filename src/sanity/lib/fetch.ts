import { createClient } from "next-sanity";

const client = createClient({
    projectId: "mblys1jh",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-03-25"
});

export async function sanityFetch({ 
    query, 
    params = {} 
}: { 
    query: string; 
    params?: Record<string, unknown>; 
}) {
    return await client.fetch(query, params);
}
