import { Card } from 'antd';
import { Outlet } from 'umi';

export default function Layout() {
  return (
    <Card title="app2 content">
      <Outlet />
    </Card>
  );
}
