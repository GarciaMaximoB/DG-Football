// src/sanityClient.js
import{ createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "tgq254zv",
  dataset: "production",
  useCdn: true,
  apiVersion:'2024-09-10'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
