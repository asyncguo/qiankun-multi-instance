export const modifyClientRenderOpts = (context: any) => {
  // @ts-ignore
  if (window.__POWERED_BY_QIANKUN__) {
    const { history, basename } = context;

    const rawHistoryListen = history.listen;

    history.listen = (fn: any) => {
      const listener = (...args: any[]) => {
        const { location } = args[0];

        // 只有路由匹配时才执行真正的订阅函数
        if (location.pathname.startsWith(basename)) {
          fn(...args);
        }
      };
      const unlistener = rawHistoryListen(listener);

      return () => {
        unlistener();
      };
    };

    return context;
  }

  return context;
};