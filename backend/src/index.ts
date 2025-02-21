import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // 解析 JSON 请求体

// 示例 API 路由
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
