import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <div className="flex items-end gap-2">
    <div className="w-[53%] flex gap-4 justify-between rounded-bl-2xl rounded-tl-2xl h-[89px] rounded-t-2xl relative
    top-[106px]
    left-[190px]
 bg-white p-4">
      {/* Text Animation */}
      <TypeAnimation
        sequence={[
          "Hello, welcome to our website!",
          1000,
          "Enjoy exploring our content.",
          1000,
          "Feel free to reach out for help!",
          1000,
        ]}
        wrapper="span"
        speed={50}
        deletionSpeed={60}
        repeat={Infinity}
        className="text-lg text-gray-700"
      />
      
      {/* Image */}
    </div>
    <img className="w-16 h-16 rounded-full bg-[#dc4a67] relative
    top-[106px]
    left-[190px]" src="/man.png" alt="User" />
    </div>
  );
};

export default Speech;
