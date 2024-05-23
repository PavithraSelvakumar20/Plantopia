import homebg from './homebg.gif';
import plant2 from './plant2.jpg';
import { Link } from 'react-router-dom';

export const  Home = () => 
    {
    return(
        <div>
    <div className="absolute top-[-2%] left-[0%] h-[10%] w-full flex justify-center gap-[7%] z-10" >
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/'>Home</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/About'>About</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/Guidelines'>Guidelines</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/Shop'>Shop</Link>
          </div>
    <div>
        <img src={homebg} className="absolute top-[2%] left-[4%] h-[100%] rounded-[50px]"/> 

</div>
<footer className="bg-neutral-400 absolute top-[110%] left-[0%] h-[9%] w-[100%] p-[1%] rounded-[10px]">
    <p className="absolute top-[-3%] left-[40%] p-[1%] text-white">&copy 2024 Plantopia All rights Reserved</p>
</footer>
</div>);}