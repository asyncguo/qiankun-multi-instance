import { Link, Outlet, useOutlet, useRouteProps } from 'umi';
import styles from './index.less';
import { useRef } from 'react';

export default function Layout() {
  const cache = useRef<{
    microApp: string
    element: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null
  }[]>([])
  const element = useOutlet()

  const routeProps = useRouteProps()
  const { microApp } = routeProps

  if (!cache.current.find(r => r.microApp === microApp)) {
    cache.current.push({
      microApp,
      element
    })
  }
  
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/app1">app1</Link>
        </li>
        <li>
          <Link to="/app2">app2</Link>
        </li>
      </ul>

      {
        cache.current.map((app) => {
          return (
            <div
              key={app.microApp}
              hidden={app.microApp !== microApp}
              style={{ border: '1px solid' }}>
              {app.element}
            </div>
          )
        })
      }
    </div>
  );
}
