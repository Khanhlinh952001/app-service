const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Proxy middleware
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://openapi.11st.co.kr",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/openapi/OpenApiService.tmall",
    },
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
