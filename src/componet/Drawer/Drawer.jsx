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

 
      <button onClick={showDrawer} className="text-red-500">
      
        <CiMenuBurger className="text-red font-bold lg:text-[3.5rem] xs-min:text-[1.8rem]" />
      </button>

      <Drawer title="Menu" onClose={onClose} open={open}>
    
      <Anchor
            className='mt-1 text-black flex items-center  relative md:right-4  xs-min:right-[1rem] w-[31.9rem]'
    
            direction='vertical'
            targetOffset={'65'}
    
            items={[
              {
                key: 'part-1',
                href: '#sobre',
                title: <h6 className=" xs-min:font-fontjetbrains xs-min:font-normal text-black text-base  font-semibold hover:text-red-500 cursor-pointer"> <span className="text-red-500 ">01.</span> Sobre</h6>
    
              },
              {
                key: 'part-2',
                href: '#servico',
                title: <h6 className=" xs-min:font-fontjetbrains xs-min:font-normal text-black text-base  font-semibold   hover:text-red-500  cursor-pointer">  <span className="text-red-500 ">02.</span> Serviço</h6>
                ,
              },
              {
                key: 'part-3',
                href: '#habilidade',
                title: <h6 className=" xs-min:font-fontjetbrains xs-min:font-normal text-black  text-base  font-semibold  hover:text-red-500  cursor-pointer">  <span className="text-red-500 ">03.</span> Habilidade</h6>
    
              },
              {
                key: 'part-4',
                href: '#contacto',
                title: <h6 className=" xs-min:font-fontjetbrains xs-min:font-normal text-black  text-base  font-semibold  hover:text-red-500  cursor-pointer">  <span className="text-red-500 ">04.</span> Contacto</h6>
    
              },
              {
                key: 'part-5',
                href: '#',
                title: <button className=" xs-min:font-fontjetbrains xs-min:font-normal  hover:bg-red-500/40  hover:text-black md:text-red-500 xs-min:text-red-500 border-[2px] h-10 border-red-600 rounded-sm md:w-24   xs-min:w-24 ">
                  <a className="list-none " href='https://drive.google.com/file/d/12eLKbV0dz-isS5PrtRYgnqwEYZVNOB5f/view?usp=drive_link' target="_blank">Curriculo</a></button>,
    
              },
            ]}
          />
      </Drawer>
    </>
  );
};
export default Menus;
