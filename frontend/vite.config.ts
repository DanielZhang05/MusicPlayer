import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // 以当前 frontend 目录为 Vite 项目根目录
  plugins: [],
  server: {
    port: 5173, // 自定义开发服务器端口
    proxy: {
      "/api": "http://localhost:3000", // 代理后端 API
    },
  },
  build: {
    outDir: "dist", // 构建输出目录
  },
});
