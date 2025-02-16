import { createClient } from "contentful";

const client = createClient({
  space: "wggnzqzazo5d", // Reemplaza con tu Space ID
  environment: "master",
  accessToken: "ExzZ8ETO5P43EiGEbX_yFdCUceaeH07dOxorM0zv7h0", // Reemplaza con tu Access Token
});

export const fetchPlayers = async () => {
  try {
    const response = await client.getEntries({
      content_type: "jugadores",
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching players from Contentful:", error);
  }
};

export const fetchTransfers = async () => {
  try {
    const response = await client.getEntries({
      content_type: "transferencias", // Asegúrate de que este es el ID de tu content type de transferencias
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching transfers from Contentful:", error);
  }
};
