"use client"
import Navbar from '@/components/navbar/navbar';
import './globals.css'
import Main from '@/components/main/main';

const Home = () => {
  return (
    <>
    {/* barra de navegacion */}
    <Navbar />
    
    {/* componente main que renderiza otros componentes */}
    <Main />
    </>
  );
}
 
export default Home;