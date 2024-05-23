import plant2 from './plant2.jpg';
import plant14 from './plant14.jpg';
import plant7 from './plant7.webp';
import plant15 from './plant15.jpeg';
import plant16 from './plant16.webp';
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
    </div>
    <div >
        <img src={aboutbg} className="absolute top-[2%] left-[0%] h-[98%] w-full rounded-[50px]"/> 
</div>
          
    <main className=" absolute top-[120%] left-[10%] h-[10%] w-[90%] p-[20%] rounded-[390px]">
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
              <div className="bg-red-100 absolute top-[250%] left-[-5%] h-[170%] w-[100%] p-[20%] rounded-[10px]">
              <h1 className=" text-black-700 text-7xl font-sans absolute top-[8%] left-[43%] text-white hover:text-purple-300">Contact</h1>
              <div className="bg-red-200 absolute top-[20%] left-[8%] h-[5%] w-[40%] p-[10%] rounded-[10px]">
                <p className="absolute top-[20%] left-[11%]  font-sans hover:font-serif italic text-2xl text-white font-bold">
                Phone: 123-456-7890<br/>
                WhatsApp: 123-456-7890<br/>
                Email: info@wildplanthaven.com<br/>
                Address: 123 Greenery Lane, Plantopia<br/>
                Working Hours: Mon-Fri: 9am-5pm<br/>
                </p>
                </div>
                <div className="bg-[#545458] absolute top-[20%] left-[50%] h-[20%] w-[40%] p-[10%] rounded-[10px]">
                <iframe className="absolute top-[0%] left-[0%] h-[100%] w-[100%] " 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124366.14150251259!2d80.2193408!3d13.0711552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715851963347!5m2!1sen!2sin" 
                title="map"></iframe>
                </div>
                <div className="bg-red-100 absolute top-[55%] left-[2%] h-[40%] w-[96%] p-[10%] rounded-[10px]">
                <h1 className=" text-black-700 text-4xl font-sans absolute top-[10%] left-[45%] text-white">Get In Touch</h1>
                   <form onSubmit={handleSubmit}>
                        <input className="absolute top-[30%] left-[30%] p-[1%] rounded-[50px] w-[20%]" type="text" name="name" values={FormData.name}  onChange={handleChange} placeholder="Name"/>
                            <p className="absolute top-[22%] left-[32%] text-red-600">{Ferrors.name}</p>
                            <input className="absolute top-[30%] left-[54%] p-[1%] rounded-[50px] w-[20%]" type="email" name="email" values={FormData.email}  onChange={handleChange} placeholder="Email"/>
                            <p className="absolute top-[22%] left-[56%] text-red-600">{Ferrors.email}</p>
                        <textarea className="absolute top-[45%] left-[30%] p-[1%] rounded-[50px] w-[45%]" type="text" name="msg" placeholder="Message"/>
                        <button value="submit" name="submit" className="absolute top-[70%] left-[48%] bg-orange-400 rounded-[30px] p-[1%] w-[8%] hover:bg-lime-300">Submit</button>
                    </form> 
                </div>
              </div>
              <footer className="bg-neutral-400 absolute top-[430%] left-[-5%] h-[9%] w-[100%] p-[1%] rounded-[10px]">
    <p className="absolute top-[-3%] left-[40%] p-[1%] text-white">&copy 2024 Plantopia All rights Reserved</p>
</footer>

</main>
</div>);
}