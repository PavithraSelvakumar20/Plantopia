import plant2 from './plant2.jpg';
import plant14 from './plant14.jpg';
import plant7 from './plant7.webp';
import plant15 from './plant15.jpeg';
import plant16 from './plant16.webp';
import plantbg16 from './plantbg16.jpg';
import { Link } from 'react-router-dom';
import aboutbg from './aboutbg.gif';
import { useState } from 'react';
import { useEffect } from 'react';

export const  About = () => 
    {

        const initialValues={name:" ",email:" "};
      const[formData,setFormData]=useState(initialValues);
        const [Ferrors, setErrors] = useState({});
        const[isSubmit,setIsSubmit]=useState(false);
        const handleChange = (e) =>
          {
              const {name,value} = e.target;
              setFormData({
                  ...formData,[name]:value
              });
          };
          const handleSubmit = (e) => {
            e.preventDefault();
            setErrors(validate(formData));
            setIsSubmit(true);
           

        };
        useEffect(()=>{
          if(Object.keys(Ferrors).length===0 && isSubmit)
         {
             console.log(formData);
             window.location.href='/About';
         }
      });
      const validate = (values) =>
        {
            let errors={};
            if(values.name===" ")
                {
                   errors.name="name is required!";
                }
           if(values.email===" ")
            {
              errors.email="emailid is required";
            }
            else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email))
              {
                  errors.email="emailid is not valid!";
              }
                return errors;  
        };

    return(
    <div>
        <div className="absolute top-[-2%] left-[0%] h-[10%] w-full flex justify-center gap-[7%] z-10" >
    <Link className="no-underline hover:text-green-500 text-3xl text-white mt-[2%]" to='/'>Home</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-white mt-[2%]" to='/About'>About</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-white mt-[2%]" to='/Guidelines'>Guidelines</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-white mt-[2%]" to='/Shop'>Shop</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-white mt-[2%]" to='/Contact'>Contact</Link>
    </div>
    <div className=" absolute top-[2%] left-[0%] h-[60%] w-full rounded-[50px]">
        <img src={plantbg16} className="absolute top-[0%] left-[0%] h-full w-full blur-sm rounded-[50px]"/> 
        <div className=" bg-[#7d8373] absolute top-[20%] left-[30%] h-[60%] w-[40%] rounded-[50px]">
          <p className="absolute top-[10%] left-[30%] h-[60%] w-[40%] text-3xl text-white rounded-[50px]">
          Make space For Plants
                      </p>
          <p className="absolute top-[40%] left-[30%] h-[60%] w-[40%] text-1xl text-white rounded-[50px]">
          If you have a garden and a library,You have everything you need. Plants make a positive impact on your environment.
                    </p>

        </div>
</div>
          
    <main className=" absolute top-[60%] left-[10%] h-[10%] w-[90%] p-[20%] rounded-[390px]">
        <h1 className=" red text-red-700 text-7xl font-sans absolute top-[25%] left-[13%] ">About Us</h1>
        <img src={plant2} className="absolute top-[15%] left-[58%] h-[70%] rounded-[20px]"/>
        
              <p className="absolute top-[45%] left-[5%] text-1xl font-sans hover:font-serif italic">Welcome to Plantopia, where we live and breathe all things green!<br/> From exotic ferns to vibrant succulents,
               we're your go-to source <br/> for plant paradise. Discover the secrets of nurturing your leafy friends with <br/>our expert growing guidelines. 
               We'll turn your black thumb into a <br/>green thumb in no time!Need some gardening inspo? Look no<br/> further! Our gardening tips will have you pruning, 
               potting, and propagating<br/> like a pro in no time.
              </p>
              <div className="bg-[#f0efeb] absolute top-[110%] left-[-5%] h-[30%] w-[100%] p-[30%] rounded-[10px]">
              <h1 className=" red text-black-700 text-7xl font-sans absolute top-[10%] left-[45%]  hover:bg-purple-300">Blogs</h1>
              <img src={plant16} className="absolute top-[30%] left-[3%] h-[30%] w-[20%] rounded-[20px]"/>
              <img src={plant15} className="absolute top-[30%] left-[27%] h-[30%] w-[20%] rounded-[20px]"/>
              <img src={plant14} className="absolute top-[30%] left-[53%] h-[30%] w-[20%] rounded-[20px]"/>
              <img src={plant7} className="absolute top-[30%] left-[77%] h-[30%] w-[20%] rounded-[20px]"/>
              <p className="absolute top-[63%] left-[3%]  font-sans hover:font-serif italic">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna<br/>
               aliqua.</p>
               <p className="absolute top-[63%] left-[27%]  font-sans hover:font-serif italic">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna<br/>
               aliqua.</p>
               <p className="absolute top-[63%] left-[53%]  font-sans hover:font-serif italic">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna<br/>
               aliqua.</p>
               <p className="absolute top-[63%] left-[77%]  font-sans hover:font-serif italic">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna<br/>
               aliqua.</p>
              <button value="know more" name="knowmore" className="absolute top-[77%] left-[9%] bg-rose-400 rounded-[30px] p-[1%] hover:bg-purple-300 ">know more</button>
              <button value="know more" name="knowmore" className="absolute top-[77%] left-[33%] bg-rose-400 rounded-[30px] p-[1%] hover:bg-purple-300 ">know more</button>
              <button value="know more" name="knowmore" className="absolute top-[77%] left-[59%] bg-rose-400 rounded-[30px] p-[1%] hover:bg-purple-300 ">know more</button>
              <button value="know more" name="knowmore" className="absolute top-[77%] left-[83%] bg-rose-400 rounded-[30px] p-[1%] hover:bg-purple-300 ">know more</button>
              </div>
              
              <footer className="bg-neutral-400 absolute top-[250%] left-[-5%] h-[9%] w-[100%] p-[1%] rounded-[10px]">
    <p className="absolute top-[-3%] left-[40%] p-[1%] text-white">&copy 2024 Plantopia All rights Reserved</p>
</footer>

</main>
</div>);
}