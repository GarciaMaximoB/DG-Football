// src/sanityClient.js
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "tgq254zv",
  dataset: "production",
  useCdn: true, // `false` si quieres siempre datos frescos
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
