const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

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
app.listen(3000);
