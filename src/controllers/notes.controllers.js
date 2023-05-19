const note = async (req, res) => {
  return res.status(200).json("Hola de note");
}

module.exports = {
  note
}