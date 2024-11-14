export function getAllProducts = async (req, res) => {
  try {
    const data = await getAllProducts();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}