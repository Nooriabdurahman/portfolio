import Speech from "./speech";
import { motion } from 'framer-motion';
import source from "../../../public/7ffe502b-8088-418c-9eb8-cf24bb4486bb_removalai_preview.png"

const awart = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 }
  }
};

const Hero = () => {
  return (
    <div className="h-[100%] overflow-hidden flex px-[80px]">
      <div className="h-[100%] w-[50%] flex flex-col justify-between">
        <div>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-[47px] mt-[80px] font-extrabold leading-[55px] text-[#fcc1cf]"
          >
            Hey there body <br />
            <span className="text-white">I,m abdurahman</span>
          </motion.h1>
        </div>
        <div className="flex flex-col gap-[15px]">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="font-bold text-[16px]"
          >
            new developer:
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="leading-[20px]"
          >
            i am new developer 
            <br />tha learned javascript  
            <br /> typescript and react
          </motion.p>
          <motion.div
            className="flex flex-row gap-[10px]"
            variants={awart}
            initial="initial"
            animate="animate"
          >
            {[1, 2, 3].map((award) => (
              <motion.div
                key={award}
                className="w-[36px] h-[36px] bg-[white] cursor-pointer flex items-center justify-center rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.img
                  variants={awart}
                  className="w-[25px]"
                  src={`award${award}.png`}
                  alt={`award-${award}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <a href="#services" className="bg-[#3a205c] mb-[20px] w-[40px] rounded-4xl">
          <img
            src={source}
            className="w-[50px]  h-[60px] mix-blend-color-burn m-auto block rounded-full"
            alt="profile"
          />
        </a>
      </div>

      <div className="h-[100%] w-[50%] flex flex-col">
        <a href="#sevices"></a>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col top-0 relative left-[516px] gap-[12px] p-[16px] w-[60px] rounded-b-[10px] bg-[#2f204e]"
          >
            <a href="/">
              <img className="w-[20px]" src="/instagram.png" alt="instagram" />
            </a>
            <a href="/">
              <img className="w-[20px]" src="/youtube.png" alt="youtube" />
            </a>
            <a href="/">
              <img className="w-[20px]" src="/facebook.png" alt="facebook" />
            </a>
            <div className="bg-[#dd4c62] rounded-bl-[9px] relative top-[36px] left-[-31px] text-[12px] rotate-[90deg] h-[20px] w-[90px] text-center">
              follow me
            </div>
          </motion.div>
          <Speech />
          <div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="flex flex-col left-[70px] items-center top-[120px] relative"
            >
              <img
                src="/certificate.png"
                className="w-[10%]"
                alt="certificate"
              />
              <p className="relative text-[#ddd]">high school</p>
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute mb-[50px]"
              style={{
                position: "relative",
                width: "150px",
                height: "150px",
                bottom: "-140px",
                left: "422px",
              }}
            >
              <a href="/#Contect" className="h-[150px] w-[150px]">
                <svg viewBox="0 0 200 200" width="150" height="150">
                  <circle
                    cx="100"
                    cy="100"
                    r="100"
                    fill="pink"
                  />
                  <path
                    id="innerCirclePath"
                    fill="none"
                    d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  />
                  <text>
                    <textPath
                      className="text-2xl"
                      xlinkHref="#innerCirclePath"
                    >
                      Hire now.
                    </textPath>
                  </text>
                  <text>
                    <textPath
                      className="text-2xl"
                      xlinkHref="#innerCirclePath"
                      startOffset="44%"
                    >
                      Contact me.
                    </textPath>
                  </text>
                </svg>
                <svg
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute w-[100%] h-[100%] left-[0] top-0 z-[-1]">
        <div className="absolute left-0 bottom-0 right-0 m-auto h-[90%]">
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            src="abdurahman.png"
            className="w-[80%] relative left-[130px] h-[100%]"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;