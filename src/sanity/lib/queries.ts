import { groq } from "next-sanity";


export const allproducts = groq`*[_type == "product"]`;
export const four = groq`*[_type == "product"][0..3]`;
export const fourToNine = groq`*[_type == "product"][4..9]`;
export const trendingPro = groq`*[_type == "product"][1..4]`;
export const one = groq`*[_type == "product"][5]`;

// export const specificProducts = groq*[_type == "product"][1, 2, 3, 8];