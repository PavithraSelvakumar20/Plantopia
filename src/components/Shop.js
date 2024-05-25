import shopbg from './shopbg.webp';
import plant19 from './plant19.webp';
import plant20 from './plant20.webp';
import plant21 from './plant21.webp';
import plant22 from './plant22.webp';
import plant23 from './plant23.webp';
import plant24 from './plant24.webp';
import plant25 from './plant25.webp';
import plant26 from './plant26.webp';
import plant27 from './plant27.webp';
import plant28 from './plant28.webp';
import plant29 from './plant29.webp';
import plant30 from './plant30.webp';
import plant31 from './plant31.webp';
import plant32 from './plant32.webp';
import plant33 from './plant33.webp';
import plant34 from './plant34.webp';
import plant35 from './plant35.webp';
import plant36 from './plant36.webp';
import plant37 from './plant37.webp';
import plant38 from './plant38.webp';
import plant39 from './plant39.webp';
import plant40 from './plant40.webp';
import plant41 from './plant41.webp';
import plant42 from './plant42.webp';

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
    <Link className="no-underline hover:text-green-500 text-3xl text-black mt-[2%]" to='/Contact'>Contact</Link>
          </div>

        <div className="h-[70%] w-full absolute top-[0%] left-[0%] ">
        <img src={shopbg} className="absolute top-[0%] left-[0%] h-[60%] w-full rounded-[25px]"/> 
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[50%] left-[6%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant19} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[28%] text-black text-1xl"> Peace Lilly Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹299</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[50%] left-[29%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant20} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[26%] text-black text-1xl"> Bamboo Palm Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹399</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[50%] left-[52%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant21} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[30%] text-black text-1xl"> Jade Mini Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹199</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[50%] left-[76%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant22} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[24%] text-black text-1xl"> Anthurium Red Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹270</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[100%] left-[6%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant23} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[28%] text-black text-1xl"> Areca Palm Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹399</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[100%] left-[29%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant24} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[16%] text-black text-1xl"> Snake Plant-Golden Hahni</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹190</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[100%] left-[52%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant25} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[24%] text-black text-1xl"> Money Plant Golden</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹199</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[100%] left-[76%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant26} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[28%] text-black text-1xl"> Ficus Bonsai Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹270</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[150%] left-[6%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant27} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[15%] text-black text-1xl"> Chlorophytum Spider Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹280</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[150%] left-[29%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant28} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[20%] text-black text-1xl"> Money Plant Variegated</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹190</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[150%] left-[52%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant29} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[20%] text-black text-1xl"> Aglaonema Red Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹350</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[150%] left-[76%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant30} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[34%] text-black text-1xl"> Rubber Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹299</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[200%] left-[6%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant31} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[32%] text-black text-1xl"> Peacock Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹230</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[200%] left-[29%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant32} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[29%] text-black text-1xl"> Ixora Plant-Pink</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹250</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[200%] left-[52%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant33} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[17%] text-black text-1xl"> Peperomia Green Creeper</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹260</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[200%] left-[76%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant34} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[23%] text-black text-1xl"> Bird Of Paradise Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹145</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[250%] left-[6%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant35} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[32%] text-black text-1xl"> Croton Petra</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹345</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[250%] left-[29%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant36} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[25%] text-black text-1xl"> Fittonia Green Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹199</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[250%] left-[52%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant37} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[30%] text-black text-1xl"> Futura Superba</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹190</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[250%] left-[76%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant38} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[27%] text-black text-1xl"> Aralia Golden Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹240</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[300%] left-[6%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant39} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[28%] text-black text-1xl"> Christmas Cactus</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹499</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[300%] left-[29%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant40} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[31%] text-black text-1xl"> Dwarf ZZ Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹340</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[300%] left-[52%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant41} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[17%] text-black text-1xl"> Philodendron Micans Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹360</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <div className="bg-[#ffffff] h-[40%] w-[18%] absolute top-[300%] left-[76%] p-[2%] drop-shadow-2xl rounded-[30px]">
        <img src={plant42} className="absolute top-[5%] left-[20%] h-[50%] w-[60%] rounded-[25px]"/> 
        <p className="absolute top-[57%] left-[17%] text-black text-1xl"> Sansevieria Superba Plant</p>
        <p className="absolute top-[66%] left-[40%] text-black text-2xl"> ₹260</p>
        <button value="Add to cart" name="addtocart" className="absolute top-[78%] left-[32%] bg-rose-400 rounded-[20px] p-[3%] hover:bg-purple-300 ">Add To Cart</button>
        </div>

        <footer className="bg-neutral-400 absolute top-[350%] left-[0%] h-[9%] w-[100%] p-[1%] rounded-[10px]">
        <p className="absolute top-[-3%] left-[40%] p-[1%] text-white">&copy 2024 Plantopia All rights Reserved</p>
        </footer>
          </div>);}