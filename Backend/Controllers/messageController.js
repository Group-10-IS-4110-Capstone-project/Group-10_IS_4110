const sendMessage = (req, res) => {
  try {
    const { message } = req.body;
    const { id } = req.params;
    res.status(201).json({ msg: "hello" });
  } catch (error) {
    console.log("Error in sendMessage controller", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { sendMessage };
