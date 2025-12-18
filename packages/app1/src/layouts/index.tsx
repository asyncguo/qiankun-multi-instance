import { Card } from 'antd';
import { Outlet } from 'umi';

export default function Layout() {
  return (
    <Card title="app1 content">
      <Outlet />
    </Card>
  );
}
