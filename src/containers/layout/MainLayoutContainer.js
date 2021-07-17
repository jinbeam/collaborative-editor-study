import { useState } from 'react';




import { useRecoilState } from 'recoil';
import { menuState } from '../../states/menu';
import MainLayout from '../../components/layout/MainLayout';

export default function MiniDrawer({children}) {
  const [menu, setMenu] = useRecoilState(menuState);
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <MainLayout
        menu={menu}
        setMenu={setMenu}
        children={children}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
    />
  );
}