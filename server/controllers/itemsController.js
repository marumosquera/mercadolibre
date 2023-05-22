const axios = require("axios");

async function searchItems(req, res) {
  const query = req.query.q;
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    );

    const items = response.data.results.map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 2,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    }));

    const categories = response.data.filters
    .filter((filter) => filter.id === "category")
    .flatMap((filter) =>
      filter.values.flatMap((value) =>
        value.path_from_root.map((path) => path.name)
      )
    );

    const result = {
      author: {
        name: "Elisa",
        lastname: "Mosquera",
      },
      categories: categories,
      items: items,
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrio un error en el servidor" });
  }
}

// Controlador para /api/items/:id
async function getItemById(req, res) {
    const itemId = req.params.id;
    try {
      // Consulta el endpoint para obtener los detalles del producto
      const itemResponse = await axios.get(`https://api.mercadolibre.com/items/${itemId}`);
      const itemData = itemResponse.data;
  
      // Consulta el endpoint para obtener la descripcion del producto
      const descriptionResponse = await axios.get(`https://api.mercadolibre.com/items/${itemId}/description`);
      const descriptionData = descriptionResponse.data;
  
      // Estructura los datos en el formato especificado
      const result = {
        author: {
          name: "Elisa",
          lastname: "Mosquera",
        },
        item: {
          id: itemData.id,
          title: itemData.title,
          price: {
            currency: itemData.currency_id,
            amount: itemData.price,
            decimals: 2, 
          },
          picture: itemData.thumbnail,
          condition: itemData.condition,
          free_shipping: itemData.shipping.free_shipping,
          sold_quantity: itemData.sold_quantity,
          description: descriptionData.plain_text,
        },
      };
  
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrio un error en el servidor" });
    }
}

// Controlador para /api/categories/:id
async function getCategoriesById(req, res) {
  const categoriesId = req.params.id;
  try {
    // Consulta el endpoint para obtener los detalles del producto
    const categoriesResponse = await axios.get(`https://api.mercadolibre.com/categories/${categoriesId}`);
    const categoriesData = categoriesResponse.data;

    // Estructura los datos en el formato especificado
    const result = {
      author: {
        name: "Elisa",
        lastname: "Mosquera",
      },
      categories: {
        id: categoriesData.id,
        title: categoriesData.name,
        categories: categoriesData.path_from_root
      },
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrio un error en el servidor" });
  }
}

module.exports = {
  searchItems,
  getItemById,
  getCategoriesById
};
