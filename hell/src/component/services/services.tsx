import { motion, useMotionValue, useTransform, animate, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

interface Hello {
  target: number;
  className: string;
}

const Services = () => {
  const { scrollY } = useScroll();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Check the initial scroll position when component mounts
    if (scrollY.get() >= 550) {
      setStartAnimation(true);
    }

    const unsubscribe = scrollY.onChange((latest) => {
      if (latest >= 550) {
        setStartAnimation(true);
      } else {
        setStartAnimation(false);
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.1 } },
  };

  const CountUp: React.FC<Hello> = ({ target, className }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));

    useEffect(() => {
      if (startAnimation) {
        const controls = animate(count, target, {
          duration: 2,
          ease: "easeInOut",
        });
        return () => controls.stop();
      }
    }, [count, target, startAnimation]);

    return <motion.span className={className}>{rounded}</motion.span>;
  };

  return (
    <motion.div
      className="h-screen overflow-hidden flex px-[80px]"
      initial="hidden"
      animate={startAnimation ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="w-[50%] flex flex-col justify-center">
        <motion.h1
          className="text-[47px] mt-[80px] font-extrabold leading-[55px] tracking-[-1px]"
          variants={itemVariants}
        >
          How do I help?
        </motion.h1>

        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="flex gap-4 mt-4 bg-[#2f2140] rounded-2xl py-[15px] pl-[15px] w-[360px]"
            variants={itemVariants}
          >
            <div
              className={`rounded-full h-[50px] w-[50px] flex items-center justify-center ${
                i === 1 ? "bg-[#dd4b67]" : i === 2 ? "bg-[#075759]" : "bg-[#615510]"
              }`}
            >
              <img src={`/service${i}.png`} alt="" className="h-[30px] w-[30px]" />
            </div>
            <div>
              {i === 1 && "Web Development"}
              {i === 2 && "New Growth"}
              {i === 3 && "Branding"}
              <br />
              <span>35 projects</span>
            </div>
          </motion.div>
        ))}

        <motion.div className="flex gap-[140px] mt-[20px]">
          <div>
            <CountUp target={104} className="text-[#b73c58] font-extrabold text-[40px]" />
            <p>Projects completed</p>
          </div>
          <div>
            <CountUp target={72} className="text-[#b73c58] font-extrabold text-[40px]" />
            <p>Happy clients</p>
          </div>
        </motion.div>
      </div>
      <motion.div className="flex items-center mt-[130px]" variants={imageVariants}>
        <img src="/WhatsApp_Image_2025-03-10_at_12.48.45_PM-removebg-preview.png" alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Services;