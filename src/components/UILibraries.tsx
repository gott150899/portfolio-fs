import { motion } from 'framer-motion';
import { 
  SiMantine, 
  SiMui, 
  SiAntdesign, 
  SiBootstrap,
} from 'react-icons/si';

// Note: SiPrime is usually Amazon Prime, but might be acceptable as placeholder or if SiPrimereact exists (it doesn't usually).
// Taiga UI doesn't have a Si icon. I'll use a generic icon for Taiga and Prime if specific ones fail/aren't ideal.
// For now, I'll use specific ones where I know them, and generic for others.

import { BsLayersHalf } from "react-icons/bs"; // For Taiga?
import { RiLayoutMasonryFill } from "react-icons/ri"; // For Prime?

const libs = [
  { name: "Mantine UI", icon: <SiMantine />, color: "hover:text-[#339AF0]" },
  { name: "Material UI", icon: <SiMui />, color: "hover:text-[#007FFF]" },
  { name: "Ant Design", icon: <SiAntdesign />, color: "hover:text-[#1890FF]" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "hover:text-[#7952B3]" },
  { name: "PrimeReact", icon: <RiLayoutMasonryFill />, color: "hover:text-[#06B6D4]" }, // Using generic layout icon
  { name: "Taiga UI", icon: <BsLayersHalf />, color: "hover:text-[#E91E63]" }, // Using generic layers icon
];

const UILibraries = () => {
    return (
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="py-12 border-b border-slate-900/50 bg-slate-950/30 overflow-hidden"
      >


        <div className="relative flex overflow-x-hidden group mask-gradient w-full">
            <div className="animate-marquee whitespace-nowrap flex gap-12 md:gap-24 items-center">
                {[...libs, ...libs, ...libs].map((lib, i) => ( 
                    <div 
                        key={i} 
                        className={`flex items-center gap-3 text-slate-500 transition-all duration-300 cursor-default group/item ${lib.color}`}
                    >
                        <span className="text-3xl md:text-4xl opacity-70 group-hover/item:opacity-100 transition-opacity">
                            {lib.icon}
                        </span>
                        <span className="font-bold text-lg md:text-xl uppercase tracking-wider opacity-70 group-hover/item:opacity-100 transition-opacity">
                            {lib.name}
                        </span>
                    </div>
                ))}
            </div>
            
             <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 md:gap-24 items-center ml-[100%]">
                 {[...libs, ...libs, ...libs].map((lib, i) => (
                    <div 
                        key={`dup-${i}`} 
                        className={`flex items-center gap-3 text-slate-500 transition-all duration-300 cursor-default group/item ${lib.color}`}
                    >
                        <span className="text-3xl md:text-4xl opacity-70 group-hover/item:opacity-100 transition-opacity">
                            {lib.icon}
                        </span>
                        <span className="font-bold text-lg md:text-xl uppercase tracking-wider opacity-70 group-hover/item:opacity-100 transition-opacity">
                            {lib.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </motion.section>
    );
  };
  
  export default UILibraries;
