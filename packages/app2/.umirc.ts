import { defineConfig } from "umi";

export default defineConfig({
  mfsu: false,
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  plugins: [
    '@umijs/plugins/dist/qiankun',
  ],
  qiankun: {
    slave: {},
  },
  npmClient: 'pnpm',
});
