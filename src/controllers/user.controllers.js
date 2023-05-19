const user = async (req, res) => {
  return res.status(200).json("Hola de user");
}

module.exports = {
  user
}