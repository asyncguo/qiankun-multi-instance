import { Link, useOutlet, useRouteProps } from 'umi';
import { useRef, useState } from 'react';
import { Card, Tabs } from 'antd';

export default function Layout() {
  const [tabs] = useState([
    { key: 'app1', label: <Link to="/app1">App1</Link> },
    { key: 'app2', label: <Link to="/app2">App2</Link> },
  ])
  const cache = useRef<{
    microApp: string
    element: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null
  }[]>([])
  const element = useOutlet()

  const routeProps = useRouteProps()
  const { microApp } = routeProps

  console.log('microApp',microApp)

  if (!cache.current.find(r => r.microApp === microApp)) {
    cache.current.push({
      microApp,
      element
    })
  }
  
  return (
    <Card title="Main App">
      <Tabs
        activeKey={microApp}
        items={tabs}
      />

        {
          cache.current.map((app) => {
            return (
              <div
                key={app.microApp}
                hidden={app.microApp !== microApp}>
                {app.element}
              </div>
            )
          })
        }
    </Card>
  );
}
