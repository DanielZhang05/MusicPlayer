"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
exports.default = (0, vite_1.defineConfig)({
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
