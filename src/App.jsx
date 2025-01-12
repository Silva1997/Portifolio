import imagem from '../src/assets/image.png'
import icon from '../src/assets/ANGOLA.jpeg'
import { FiCodesandbox, FiFile, FiFigma, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'
import React, { useState } from 'react';
import { Flex, Progress, Anchor,ConfigProvider } from 'antd';
import Drawer from './componet/Drawer/Drawer';
export default function App() {

  // const [nome, setName] = useState("");  // pega os dados do estado nome
  // const [email, setEmail] = useState(""); //pega os dados do estado email
  // const [messagem, setMessagem] = useState(""); //pega os dados do estado messagem

  const [valores, setValores] = useState('');  //Pegar os valores do estado pelo formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValores((prevValores) => ({ ...prevValores, [name]: value, }));
  };
  // Funcao para limpar os dados 
  function handleReset() {
    setName("");
    setEmail("");
    setMessagem("")
  }
  // Funcao para lidar com evento onSubmit ou submicao
  const handleObter = (event) => {

    event.preventDefault();
    console.log("Ola mundo--->", valores);
    handleReset();

  }
  React.useEffect(() => {
    // setName(getName)
    console.log("Ola mundo");
  }, [name])
  return (
    <>
      <nav className="  shadow-sm shadow-red-500/50 overflow-hidden xl:text-white sticky top-0 z-[1000] items-center text-center h-16 pt-4 pb-4 bg-slate-950 flex flex-row justify-end xl:pl-14 xl:pr-16">

        <div className=' xl:text-start xs-min:relative xl:relative xs-min:right-48 xl:right-[35rem]'>
          <img width={40} src={icon} alt='Angola' />
        </div>
        <Navegador />
        <div className='xl:hidden md:hidden lg:hidden  xs-min:w-28'>
          <Drawer />
        </div>
      </nav>


      <main className=" overflow-hidden xl:text-white flex flex-col xs-min:mr-6 xs-min:ml-6 md:mr-16 md:ml-16 xl:xl:mr-48 xl:ml-48 ">
        <p className='text-red-500 xs-min:text-md xs-min:mt-12 md:text-xl md:mt-16 xl:text-xl  leading-8  '>  Olá, meu nome é</p>

        <h3 className="xs-min:text-4xl md:text-6xl md:p-0 xl:text-[3.3rem] xl:leading-[7rem]  font-bold xs-min:mb-2   text-gray-300">Eugénio Silva</h3>

        <h1 className="xl:text-[3rem] md:text-4xl  xl:leading-[3.3rem] xs-min:text-2xl w-full xs-min:mb-3  xl:mb-8 font-bold text-gray-400">     Desenvolvo soluções completas de<br className='xs-min:hidden'></br> software</h1>


        <p className=" xs-min:text-wrap xs-min:text-base md:text-2xl xl:text-2xl  xs-min:text-justify tracking-normal xl:text-justify text-gray-400" >        Sou um engenheiro de informática de gestão especializado em criar (e ocasionalmente projetar) experiências digitais excepcionais. Tenho expertise em aplicações frontend and backend, web e Java, com ampla experiência profissional.
        </p>

        <a className="   xs-min:text-white xl:text-white  xl:fixed xl:top-[24rem] xl:-right-8 hover:xl:text-red-500 active:scale-50 xl:text-sm  xl:rotate-90 cursor-pointer"><span className='flex items-center gap-2 text-sm'><FiSend />Lucaseugeniofernando@gmail.com</span></a>
        {/* <hr className=" xl:fixed xl:rotate-90 top-[28rem] -right-16 h-24 w-[1px] bg-white mt-12" /> */}
        <a className=" xs-min:mb-20 xs-min:mt-20 xs-min:flex xs-min:items-center xs-min:justify-center xs-min:text-white xs-min:text-center xl:fixed xl:top-[20rem] xl:left-8 xl:text-sm  xl:rotate-90 cursor-pointer"><span className='flex items-center gap-2'><FiGithub className=' hover:scale-110 hover:xl:text-red-500' size={30} /> <FiLinkedin className=' hover:scale-110 hover:xl:text-red-500' size={30} /></span></a>


        <div className="flex  xs-min:mb-24 xl:mt-16 xl:mb-12 justify-center">
          <p className="  xs-min:text-white md:w-56 xl:w-56 p-3 xl:cursor-pointer rounded-sm text-center border-2 border-red-500 xl:text-white">Saiba Mais 👇🏽</p>
        </div>






        {/* Sobre min */}
        <div id='sobre'>
          <div className="flex flex-row justify-start  items-center">
            <h1 className=" font-fontjetbrains font-normal text-gray-300 xs-min:text-2xl xs-min:font-semibold xl:text-2xl  font-fira"><a className="xl:text-2xl xs-min:text-red-500  xl:text-red-500 font-jetbrains font-bold">01. </a>Sobre mim</h1> <hr className="xl:w-56 font-bold mt-3 ml-4" />
          </div>

          <div className="grid xs-min:mt-4 xs-min:mb-8 xs-min:grid-cols-1 md:grid-cols-2 md:mt-4 xl:grid-cols-2">


            <div>
              <p className=' xs-min:text-base xs-min:text-white xs-min:text-wrap text-justify  xl:text-base/relaxed font-normal'>
                Olá, eu sou o Eugénio! Minha jornada na TI começou em 2022, antes concluir
                minha graduação em Engenharia Informática de Gestão e ingressar no mercado
                como registrador de dados.
                Em 2024, passei a trabalhar como técnico de informática, e em 2024,
                depois de quase um ano estudando programação web isso frontend e backend.
                Desde então, minha vida tem sido dedicada aos códigos.
              </p>

              <div className="flex-[1.4] mt-3 mr-2 md:mr-0 mb-2">
                <p className="text-gray text-white text-base font-fira font-normal">
                  Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</p>
                <div className="mt-3 grid grid-cols-2 md:w-[70%]">


                  <div className="flex flex-row mb-1 items-center">
                    <p className="text-red-500   font-jetbrains mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z"></path></svg></p>
                    <p className=" text-white  font-jetbrains xl:text-sm md:text-base">JavaScript (ES6+)</p>
                  </div>
                  <div className="flex flex-row mb-1 items-center">
                    <p className="text-red-500 font-jetbrains mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z"></path></svg></p>
                    <p className=" font-jetbrains text-white xl:text-sm md:text-base">MySql</p>

                  </div>
                  <div className="flex flex-row mb-1 items-center">
                    <p className="text-red-500 font-jetbrains mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z"></path></svg></p>
                    <p className="  text-white font-jetbrains xl:text-sm md:text-base">PowerBI</p>

                  </div>




                  <div className="flex flex-row mb-1 items-center">
                    <p className="text-red-500 font-jetbrains mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z"></path></svg></p
                    ><p className=" text-white font-jetbrains xl:text-sm md:text-base">React Native</p>


                  </div>

                  <div className="flex flex-row mb-1 items-center">
                    <p className="text-red-500  font-jetbrains mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z"></path></svg></p>
                    <p className=" font-jetbrains text-white xl:text-sm md:text-base">React.JS</p></div>

                  <div className="flex flex-row mb-1 items-center">
                    <p className="text-red-500  font-jetbrains mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z"></path></svg></p>
                    <p className=" font-jetbrains text-white xl:text-sm md:text-base">Node.Js</p></div></div>
              </div>


            </div>


            <div className="div">
              <div className="flex flex-1 justify-center mt-12 md:mt-0 ml-2 relative">
                <div className="flex justify-center ">

                  <img src={imagem} alt="Joabson de Souza" className=" bg-blue-50 rounded-md z-10 w-44 h-44 md:w-52 md:h-52 lg:xl:w-56 lg:h-56" />

                </div>
                <div id="hover-div" className="rounded-md border border-red-500 absolute 
                top-[10%] right-[20%] md:right-[1%] md:top-[12%] w-44 h-44 md:w-52 md:h-52 lg:xl:w-56 lg:h-56"></div>

              </div>
            </div>
          </div>
        </div>

        {/* Servicos */}
        <div id='servico'>

          <div className="flex flex-row justify-start   items-center">
            <h1 className=" font-fontjetbrains font-normal text-gray-300 xs-min:text-2xl xs-min:font-semibold xl:text-2xl  font-fira"><a className="xl:text-2xl  xl:text-red-500 font-jetbrains font-bold">02. </a>Serviços</h1> <hr className="xl:w-56 font-bold mt-3 ml-4" />
          </div>


          <div className="grid xs-min:mt-8 text-white  xs-min:p-3 xs-min:mb-8 xs-min:grid-cols-1 md:grid-cols-2 xl:mt-8 xl:mb-8 xl:p-2 xl:grid-cols-3 place-items-center gap-4">

            <div className='hover:duration-75 xl:hover:scale-105 hover:border-[1px] hover:border-red-500 bg-[#1a1c29] flex flex-col items-center justify-center  w-full h-56 rounded-md'>
              {/* <img src='' alt='front-end' /> */}
              <span><FiCodesandbox size={80} />      </span>
              <h5 className='font-bold'>Front-end</h5>
              <p className='text-center text-base'>Criação de interfaces interativas e
                responsivas com Html,Css,Tailwind Css,React Js,JavaScript e Ant design.
              </p>
            </div>

            <div className=' hover:duration-75 xl:hover:scale-105 hover:border-[1px] hover:border-red-500 bg-[#1a1c29] flex flex-col items-center justify-center  w-full h-56 rounded-md'>
              {/* <img src='' alt='front-end' /> */}
              <span><FiFile size={80} />      </span>
              <h5 className='font-bold'>Aplicação Web</h5>
              <p className='text-center text-base'>
                Criação de Aplicativos web e moveis para todo tipo de serviços.
              </p>
            </div>

            <div className='hover:duration-75 xl:hover:scale-105 hover:border-[1px] hover:border-red-500 bg-[#1a1c29] flex flex-col items-center justify-center  w-full h-56 rounded-md'>
              {/* <img src='' alt='front-end' /> */}
              <span><FiFigma size={80} />      </span>
              <h5 className='font-bold'>Landing Pages</h5>
              <p className='text-center text-base'>
                Landing Pages otimizadas com design responsivos,voltadas para empresas,vendas...
              </p>
            </div>

          </div>
        </div>

        {/* Habilidades */}
        <div id='habilidade'>

          <div className="flex flex-row justify-start  items-center">
            <h1 className=" font-fontjetbrains font-normal text-gray-300 xs-min:text-2xl xs-min:font-semibold xl:text-2xl  font-fira"><a className="xl:text-2xl  xl:text-red-500 font-jetbrains font-bold">03. </a>Habilidades</h1> <hr className="xl:w-56 font-bold mt-3 ml-4" />
          </div>

          <Barras />
        </div>


        {/* Contacto */}
        <div id='contacto'>
          <div className="flex flex-row justify-start  items-center">
            <h1 className=" font-fontjetbrains font-normal text-gray-300 xs-min:text-2xl xs-min:font-semibold xl:text-2xl  font-fira">
              <a className=" xl:text-2xl  xl:text-red-500 font-jetbrains font-bold">
                04. </a>Contacto</h1> <hr className="xl:w-56 font-bold mt-3 ml-4" />
          </div>
          <p className='text-base mt-3 mb-3 text-white text-start'>Novas oportunidades são sempre bem-vindas!
            Sinta-se à vontade para me enviar uma  mensagem para que possamos conversar melhor.
            Farei o possível para responder o mais rápido possível. Não cobro pelo fornecimento de orçamentos.</p>

          <form onSubmit={handleObter} className='flex justify-center flex-col items-center gap-4 xs-min:mb-24 xl:mb-32 mt-4' >
            <input type='text' onChange={handleChange} name='nome' className=' xs-min:w-[100%] xl:w-[80%] h-12 bg-transparent border-[1px] border-gray-500 xl:text-white' placeholder='Nome' />
            <input type='email' onChange={handleChange} name='email' className=' xs-min:w-[100%]  xl:w-[80%] h-12 bg-transparent border-[1px] border-gray-500 xl:text-white' placeholder='Email' />
            <textarea onChange={handleChange} name='textoarea' className=' xs-min:w-[100%]  xl:w-[80%] bg-transparent border-[1px] border-gray-500 xl:text-white'
              maxLength={150} placeholder='Messagem'></textarea>
            <button type='submit' className=' xs-min:w-56 xl:w-96 text-white h-12 border-[1px] border-red-500 bg-transparent hover:bg-red-500/50'>Enviar</button>
          </form>
        </div>



        <footer className='text-center text-white'>
          © Todos os Diretos Reservados - Eugenio Silva.
        </footer>
      </main>



    </>

  )
}



function Navegador() {

  return (

    <div className='   md:flex md:flex-row md:items-center md:gap-3 xs-min:hidden xl:flex xl:flex-row xl:items-center xl:gap-3'>
     
     
     <ConfigProvider
  theme={{
    token: {
      colorPrimary:'#fff'
    },
  }}
>
<Anchor
        className='mt-1 text-white flex items-center  relative md:right-4  xl:right-[1rem] w-[40.9rem]'
        showInkInFixed={false}
        direction='horizontal'
        targetOffset={'65'}

        items={[
          {
            key: 'part-1',
            href: '#sobre',
            title: <h6 className=" xl:font-fontjetbrains xl:font-normal text-white text-base  font-semibold hover:text-red-500 cursor-pointer"> <span className="text-red-500 ">01.</span> Sobre</h6>

          },
          {
            key: 'part-2',
            href: '#servico',
            title: <h6 className=" xl:font-fontjetbrains xl:font-normal text-white text-base  font-semibold   hover:text-red-500  cursor-pointer">  <span className="text-red-500 ">02.</span> Serviço</h6>
            ,
          },
          {
            key: 'part-3',
            href: '#habilidade',
            title: <h6 className=" xl:font-fontjetbrains xl:font-normal text-white  text-base  font-semibold  hover:text-red-500  cursor-pointer">  <span className="text-red-500 ">03.</span> Habilidade</h6>

          },
          {
            key: 'part-4',
            href: '#contacto',
            title: <h6 className=" xl:font-fontjetbrains xl:font-normal text-white  text-base  font-semibold  hover:text-red-500  cursor-pointer">  <span className="text-red-500 ">04.</span> Contacto</h6>

          },
          {
            key: 'part-5',
            href: '#',
            title: <button className=" xl:font-fontjetbrains xl:font-normal  hover:bg-red-500/40  hover:text-white md:text-red-500 xl:text-red-500 border-[2px] h-10 border-red-600 rounded-sm md:w-24   xl:w-24 ">Curriculo</button>,

          },
        ]}
      />
</ConfigProvider>
     
      {/*
     <h6 className="  hover:xl:text-red-500 cursor-pointer"> <span className="xl:text-red-500 ">01.</span> Sobre</h6>
      <h6 className="  hover:xl:text-red-500  cursor-pointer">  <span className="xl:text-red-500 ">02.</span> Experiência</h6>
      <h6 className=" hover:xl:text-red-500  cursor-pointer"> <span className="xl:text-red-500 ">03.</span> Trabalhos</h6>
      <h6 className=" hover:xl:text-red-500  cursor-pointer"><span className="xl:text-red-500 ">04.</span> Contato</h6>
      <button className="  hover:xl:bg-red-500/40  hover:xl:text-white xl:text-red-500 border-[2px] h-10 border-red-600 rounded-sm   xl:w-24 ">Curriculo</button> */}
    </div>



  )
}

const Barras = () => (
  <Flex gap="small" vertical


    className='mt-4 xs-min:text-white xs-min:text-sm mb-4 xs-min:w-44 xl:w-full'>


    <div className='flex items-center gap-6'>
      <h5 className='xl:text-red-500'>REACT.JS</h5>
      {/* <Progress
        percent={100}
        percentPosition={{
          align: 'start',
          type: 'inner',
        }}
        size={[208, 20]}


        strokeColor={{
          from: 'red',
          to: 'pink',
        }}
        status='active'
      /> */}

<div class="flex w-56 h-4 overflow-hidden font-sans text-xs font-medium  flex-start bg-white">
      <div class="flex items-center justify-center w-[80%] h-full overflow-hidden text-white break-all bg-gray-900 ">
        80% Completo
      </div>
    </div>  
    </div>


    <div className='flex items-center gap-4'>
      <h5 className='xl:text-red-500'>HTML/CSS</h5>
      {/* <Progress
        percent={80}
        percentPosition={{
          align: 'start',
          type: 'inner',
        }}
        size={[250, 20]}
        style={{ borderRadius: '0%' }}
        strokeColor={{
          from: 'violet',
          to: 'violet',
        }}
        status='active'
      /> */}

<div class="flex w-56 h-4 overflow-hidden font-sans text-xs font-medium  flex-start bg-white">
      <div class="flex items-center justify-center w-[80%] h-full overflow-hidden text-white break-all bg-pink-500 ">
        80% Completo
      </div>
    </div> 
    </div>

    <div className='flex items-center w-full gap-4'>
      <h5 className='xl:text-red-500'>TAILWINDCSS</h5>
      {/* <Progress
        percent={70}
        percentPosition={{
          align: 'start',
          type: 'inner',
        }}
        size={[250, 20]}
        style={{ borderRadius: '0%' }}
        strokeColor={{
          from: 'green',
          to: '#87d068',
        }}
        status='active'
      /> */}

<div class="flex xs-min:w-[9rem] xl:w-46 h-4 overflow-hidden font-sans text-xs font-medium  flex-start bg-white">
      <div class="flex items-center justify-center w-[70%] h-full overflow-hidden text-white break-all bg-cyan-500 ">
        70% Completo
      </div>
    </div> 
    </div>

    <div className='flex items-center gap-14'>
      <h5 className='xl:text-red-500'>GITHUB</h5>

      <div class="flex w-56 h-4 overflow-hidden font-sans text-xs font-medium  flex-start bg-white">
      <div class="flex items-center justify-center w-[70%] h-full overflow-hidden text-white break-all bg-blue-500 ">
        70% Completo
      </div>
    </div> 
      {/* <Progress
        percent={70}
        percentPosition={{
          align: 'start',
          type: 'inner',
        }}
        size={[250, 20]}
        style={{ borderRadius: '0%' }}
        strokeColor={{
          from: 'green',
          to: '#87d068',
        }}
        status='active'
      /> */}
    </div>

    <div className='flex items-center gap-7'>
      <h5 className='xl:text-red-500'>JAVASCRIPT</h5>
      <div class="flex w-56 h-4 overflow-hidden font-sans text-xs font-medium  flex-start bg-white">
      <div class="flex items-center justify-center w-[40%] h-full overflow-hidden text-white break-all bg-yellow-500 ">
        40% Completo
      </div>
    </div> 
      {/* <Progress
        percent={40}
        percentPosition={{
          align: 'start',
          type: 'inner',
        }}
        size={[400, 20]}
        style={{ borderRadius: '0%' }}
        strokeColor={{
          from: 'green',
          to: '#87d068',
        }}
        status='active'
      /> */}
    </div>

  </Flex>
);