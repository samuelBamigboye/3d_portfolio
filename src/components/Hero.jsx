import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto mt-[-55px]`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FFA500]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-transparent bg-gradient-to-r from-[#915eff] to-[#FFA500] bg-clip-text'>Samuel <span className="hidden sm:inline">Bamigboye</span></span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop mobile responsive, user interfaces, 
             modern dasboard for web applications using the <span className='text-transparent bg-gradient-to-r from-[#915eff] via-slate-100 to-[#FFA500] bg-clip-text'>MERN Stack.</span>
          </p>
        </div>
      </div>

      
      {/* <ComputersCanvas /> */}
      

      <div className='absolute xs:bottom-10 bottom-42 w-full  justify-center items-center mt-[20px] flex '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2 '>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
