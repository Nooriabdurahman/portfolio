import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import SignIn from '../content.tsx/signIn';

interface Item {
  id: number;
  img: string;
  title: string;
  desc: string;
  link: string;
}

const items: Item[] = [
  {
    id: 1,
    img: '/Capture.PNG',
    title: 'Granda project',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur...',
    link: 'https://velvety-truffle-41eebe.netlify.app/',
  },
  {
    id: 2,
    img: '/fuckyourmother.PNG',
    title: 'Blendora project',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur...',
    link: 'https://phenomenal-wisp-3a356e.netlify.app',
  },
  {
    id: 3,
    img: '/fuckkall.PNG',
    title: 'Basic clock project',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur...',
    link: 'https://67cfde6a7bb3e9146b5fe520--admirable-entremet-8cd378.netlify.app',
  },
  {
    id: 4,
    img: '/hekkk.PNG',
    title: 'Headphone',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur...',
    link: 'https://67cfde6a7bb3e9146b5fe520--admirable-entremet-8cd378.netlify.app',
  },
  {
    id: 5,
    img: '/fjfj.PNG',
    title: 'Git News Project',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur...',
    link: 'https://roaring-buttercream-41e3dd.netlify.app/',
  },
];

const ListType: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-[100px] p-10">
      <div className="w-[40%] rounded-[5%] overflow-hidden">
        <img className="w-[1000px] h-[400px] object-cover" src={item.img} alt={item.title} />
      </div>
      <div className="w-[40%] flex flex-col gap-[20px]">
        <h1 className="text-[56px]">{item.title}</h1>
        <p className="font-light">{item.desc}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <button className="bg-pink-500 text-white p-[12px] rounded-[10px] font-medium cursor-pointer">
            Visit project
          </button>
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="h-[100vh] w-full flex items-center justify-center bg-gray-800 text-white">
     <SignIn/>
    </footer>
  );
};
 
const Portfolio = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * (items.length - 1)]);

  return (
    <div className="portfolio">
      <header className="h-[100vh] flex items-center justify-center">
        <h2 className="text-[56px] font-bold text-center">Portfolio Gallery</h2>
      </header>

    
      <section ref={ref} className="h-[500vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div className="flex h-screen w-max" style={{ x: xTranslate }}>
            {items.map((item) => (
              <ListType key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;