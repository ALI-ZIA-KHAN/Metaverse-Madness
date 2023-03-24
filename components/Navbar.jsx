'use client';
//^^all components inside app direct are server components,it auto matically adopts Server Components with no extra work to reqire serverComponents explicitly but when you want to use hooks of client like useState etc you have to use 'use client'
import { motion } from 'framer-motion';
//motion is most imp from framer motion
import styles from '../styles';
//we have put the animation in separate file that's why eporting
import { navVariants } from '../utils/motion';

const Navbar = () => (
  //it could be anything like motion.div etc
  <motion.nav
  //these are props
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        METAVERSUS
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
