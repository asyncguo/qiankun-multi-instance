import { defineConfig } from "umi";

export default defineConfig({
  mfsu: false,
  routes: [
    { path: "/", component: "index" },
  ],
  plugins: [
    '@umijs/plugins/dist/qiankun',
  ],
  headScripts:[
    `
      window.addEventListener("popstate", function(){
        console.log("========= app1 popstate change =========");
      })
    `
  ],
  qiankun: {
    slave: {},
  },
  npmClient: 'pnpm',
});
