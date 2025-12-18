import { defineConfig } from "umi";

export default defineConfig({
  mfsu: false,
  routes: [
    {
      path: '/',
      routes: [
        {
          path: '/app1/*',
          microApp: 'app1',
        },
        {
          path: '/app2/*',
          microApp: 'app2',
        },
      ],
    },
  ],
  plugins: [
    "@umijs/plugins/dist/antd",
    '@umijs/plugins/dist/qiankun',
  ],
  antd: {},
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:8061',
        },
        {
          name: 'app2',
          entry: '//localhost:8062',
        },
      ],
    },
  },
  npmClient: 'pnpm',
});
