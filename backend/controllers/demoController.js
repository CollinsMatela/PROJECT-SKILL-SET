
export const getDemo = (req, res) => {
  res.json({
    message: "GET demo route working!",
  });
};

export const createDemo = (req, res) => {
  const data = req.body;

  res.json({
    message: "POST demo route working!",
    received: data,
  });
};
