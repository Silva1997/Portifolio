import  {  useState } from "react";
import { Drawer,Anchor } from "antd";
import {CiMenuBurger} from 'react-icons/ci'


const Menus = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  return (
    <>
      <button onClick={showDrawer} className="text-white">
        <CiMenuBurger className="text-red font-bold lg:text-[3.5rem] xs-min:text-[1.8rem]    xl:text-[2.5rem]" />
      </button>

      <Drawer title="Menu" onClose={onClose} open={open}>
      <Anchor

       targetOffset={'65'}
        items={[
          {
            key: 'part-1',
            href: '#home',
            title: 'Home',
          },
          {
            key: 'part-2',
            href: '#sobre',
            title: 'Sobre',
          },
          {
            key: 'part-3',
            href: '#servico',
            title: 'Servicos',
          },
          {
            key: 'part-4',
            href: '#equipa',
            title: 'Equipa',
          },
        ]}
      />
      
      </Drawer>
    </>
  );
};
export default Menus;
