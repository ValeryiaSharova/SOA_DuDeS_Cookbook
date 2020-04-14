const fetch = require("node-fetch");

module.exports = async (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];

    const response = await fetch(
      "http://localhost:2000/api/authentication/validateToken",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: token,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "no auth" });
  }
};
