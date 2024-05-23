import homebg from './homebg.gif';
import plantbg10 from './plantbg10.png';
import { Link } from 'react-router-dom';

export const  Shop = () => 
    {
    return(
        <div>
    <div className="absolute top-[-2%] left-[0%] h-[10%] w-full flex justify-center gap-[7%] z-10" >
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/'>Home</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/About'>About</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/Guidelines'>Guidelines</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/Shop'>Shop</Link>
          </div>

        <div className="bg-lime-200 h-[70%] w-full absolute top-[0%] left-[0%] p-[2%]">

        </div>

        <div className="bg-lime-200 h-[40%] w-[20%] absolute top-[80%] left-[2%] p-[2%] rounded-[50px]">
        <img src={plantbg10} className="absolute top-[2%] left-[25%] h-[50%] w-[50%] rounded-[50px]"/> 
        <p className="absolute top-[50%] left-[4%] text-black text-2xl"> Variegated jade mini plant</p>
        <p className="absolute top-[65%] left-[40%] text-black text-2xl"> $499</p>
        </div>
        <footer className="bg-neutral-400 absolute top-[410%] left-[0%] h-[9%] w-[100%] p-[1%] rounded-[10px]">
        <p className="absolute top-[-3%] left-[40%] p-[1%] text-white">&copy 2024 Plantopia All rights Reserved</p>
        </footer>
          </div>);}