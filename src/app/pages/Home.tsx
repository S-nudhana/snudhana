import { Button } from "@/components/ui/button";
import IMG from "../../../public/images/Home_BG.jpg";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../utils/motion/fadeUp";

export default function Home() {
  return (
    <div className="relative w-full h-screen text-charcoalGray font-primary font-normal mb-3 flex justify-center items-center">
      <div className="absolute flex flex-col items-center justify-center pt-10 gap-3">
        <motion.img
          src={IMG.src}
          alt="Home Background"
          className="h-[400px] w-[auto] object-contain shadow-md rounded-lg"
        />
        <motion.div
          className="w-full flex flex-col items-center justify-center pt-5 gap-3"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
        >
          <h1 className="text-[30px] underline underline-offset-[10px] tracking-wider text-black">
            Who am I?
          </h1>
          <motion.div
            className="w-[80%] md:w-2/5 text-center font-secondary font-medium"
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
          >
            I’m Nudhana Sarutipaisan, a Computer Science (CS) student at King
            Monkut's University of Technology. I’m interested in databases and
            backend development but also capable of working on frontend and
            Flutter. I’m a fast learner, eager to learn new things, and have
            strong collaboration skills.
          </motion.div>
          <motion.div
            className="flex gap-3 font-primary"
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ delay: 0.5 }}
          >
            <Button className="rounded-full w-[100px] bg-charcoalGray hover:bg-black transition duration-300 ease-in-out">
              CV
            </Button>
            <Button className="rounded-full w-[100px] bg-charcoalGray hover:bg-black transition duration-300 ease-in-out">
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
