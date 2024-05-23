import { Link } from 'react-router-dom';
import Gardeningtips from './Gardeningtips.gif';

export const  Guidelines = () => 
    {
    return(
        <div>
    <div className="absolute top-[-2%] left-[0%] h-[10%] w-full flex justify-center gap-[7%] z-10" >
    <Link className="no-underline hover:text-green-500 text-3xl text-white mt-[2%]" to='/'>Home</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-white mt-[2%]" to='/About'>About</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-white mt-[2%]" to='/Guidelines'>Guidelines</Link>
    <Link className="no-underline hover:text-green-500 text-3xl text-white mt-[2%]" to='/Shop'>Shop</Link>
          </div>

        <div className=" bg-lime-400 absolute top-[2%] left-[0%] h-[80%] w-full rounded-[50px]">
        <img src={Gardeningtips} className="absolute top-[0%] left-[0%] h-full w-full rounded-[50px]"/> 
        </div>
        
        <div className=" bg-lime-600 absolute top-[90%] left-[4%] h-[110%] w-[45%] rounded-[50px]">
            <p className="p-[2%] text-3xl text-white font-sans">    
                What are the requirements for plant growth?
            </p>
        <p className="p-[10%] text-1xl text-white font-sans">            
        Plants are much like humans; they need air, light, warmth, water and nutrients to be healthy. If a plant lacks even one of those,
         it can affect its growth and die.
        Let’s take a closer look at each factor and how understanding them can help you grow crops successfully.<br/>
        #1 Air
        Plants need air to breathe and grow well, just like we do. Plants take in CO2 (Carbon Dioxide), and then
         photosynthesis takes place to convert the CO2 into food. As this is the case, smoke, gases, and other air
          pollutants can damage plants.<br/>
        #2 Light
        Plants also need light to be able to grow, as light also helps in the photosynthesis process. Most plants need
         about 3 to 6 hours of light daily to thrive. If a plant is kept in the dark, it will grow tall and spindly in
          search of light, become weak, and die. An alternative to a bright window for commercial crop growing is 
          horticultural growing lights.<br/>
        #3 Warmth
        Temperature and warmth affect plants throughout every stage of their growth. For a seed to germinate, for example,
         it must be kept within a specific temperature range. As the plant grows, it also needs warmth to start fruiting.
          Without heat, a plant seed will not germinate and grow into a healthy plant. Different plants have different ideal
           temperatures for growth according to where they are native – which makes growing certain crops outside difficult
            in some areas of the world.<br/>
        #4 Water
        Water helps a plant make and move more nutrients. Water also has a vital role to play in photosynthesis. Without water,
         a plant will have a weak stem, dry leaves, and die. With no water or too much, a plant dies.<br/>
        #5 Nutrients
        Plants need several nutrients to be able to grow. The three most important nutrients are nitrogen, phosphorus, and potassium.<br/>
        Nitrogen – assists in above-ground growth and gives plants their dark green colour.
        Phosphorus – helps plant cell division, aids in flower seed production, and develops a robust root system.
        Potassium – helps to fight off disease and provides for strong stems.<br/>
        </p>
        </div>
        <div className=" bg-lime-400 absolute top-[90%] left-[51%] h-[110%] w-[45%] rounded-[50px]">
        <p className="p-[2%] text-3xl text-white font-sans">    
              Seven Requirements for Growing Plants Indoors
        </p>
        <p className="p-[10%] text-2xl text-white font-sans">
            1. Room to grow. Always pick the right size pot and don't put too many plants in it.<br/>
            2. Temperature. Plants grow best if the temperature does not go below 55 degrees F or above 75 degrees F.<br/>
            3. Light. Plants can grow in lots of different kinds of light, but they love sunlight the best. Give your
             plant 7 to 12 hours of strong light each day.<br/>
            4. Water. If roots are not given enough water, the plants will wilt and die. But, if the roots are given 
            too much water they will rot and the plant will also die. Water your plants only when they need it.<br/>
            5. Air. Plants don't breathe like people, but they do take up air through their leaves and roots.<br/>
            6. Nutrients. Plants take up food from the soil (called nutrients) to help them grow strong. Three 
            important nutrients are nitrogen, phosphorus, and potassium.<br/>
            7. Time. You need to devote some of your time each day to care for your plants. Also, be patient,
             plants need time to grow.<br/>
        </p>
        </div>

<footer className="bg-neutral-400 absolute top-[510%] left-[0%] h-[9%] w-[100%] p-[1%] rounded-[10px]">
    <p className="absolute top-[-3%] left-[40%] p-[1%] text-white">&copy 2024 Plantopia All rights Reserved</p>
</footer>
</div>);}