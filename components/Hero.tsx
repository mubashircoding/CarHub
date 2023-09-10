// 'use client';
// import Image from "next/image";
// import CustomButton from './CustomButton';
// const Hero = () => {
//   const handleScroll = () => {

//   }
//   return (
//     <div className='hero'>
//       <div className="flex-1 pt-36 padding-x">
//         <h1 className='hero__title'>
//           Find, Book, or Rent a car
//         </h1>
//         <p className='hero__subtitle'>Streamline your car rental experiance</p>
//         <CustomButton title="Explore cars" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll}/>
//       </div>
//       <div className="hero__image-container">
//         <div className="hero__image"><Image src="/hero.png"/></div>
//       </div>
//     </div>
//   )
// }

// export default Hero
"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    // Add your scroll handling logic here
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find, Book, or Rent a car</h1>
        <p className="hero__subtitle">Streamline your car rental experience</p>
        <CustomButton
          title="Explore cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Hero Image"
            fill
            className="object-contain"
          />
        </div>
          <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;  
