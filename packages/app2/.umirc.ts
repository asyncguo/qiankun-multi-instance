import { defineConfig } from "umi";

export default defineConfig({
  mfsu: false,
  routes: [
    { path: "/", component: "index" },
  ],
  plugins: [
    '@umijs/plugins/dist/qiankun',
  ],
  qiankun: {
    slave: {},
  },
  npmClient: 'pnpm',
});
