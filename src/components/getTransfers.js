import { fetchTransfers } from "../contentfulClient";

// Función para transformar los datos de Contentful a la estructura deseada
const transformTransfersData = (transfers) => {
  const transfersByYear = {};

  // Agrupa las transferencias por año
  transfers.forEach((transfer) => {
    const year = transfer.fields.ano;
    const transferData = {
      id: transfer.sys.id,
      player: transfer.fields.jugador,
      team1: transfer.fields.equipo1,
      team2: transfer.fields.equipo2,
    };

    if (!transfersByYear[year]) {
      transfersByYear[year] = [];
    }

    transfersByYear[year].push(transferData);
  });

  // Convierte el objeto en un array y ordénalo por año (de mayor a menor)
  const result = Object.keys(transfersByYear)
    .map((year) => ({
      year: parseInt(year, 10),
      transfers: transfersByYear[year],
    }))
    .sort((a, b) => b.year - a.year); // Ordena de mayor a menor

  return result;
};

// Función principal para obtener y transformar las transferencias
export const getTransfers = async () => {
  try {
    const transfers = await fetchTransfers(); // Obtén las transferencias de Contentful
    const transformedData = transformTransfersData(transfers); // Transforma los datos
    return transformedData;
  } catch (error) {
    console.error("Error fetching and transforming transfers:", error);
    return [];
  }
};
