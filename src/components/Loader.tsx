import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Loader({ done }: { done: () => void }) {

  const [progress, setProgress] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setProgress((old)=>{

        if(old >= 100){

          clearInterval(timer);

          setTimeout(done,700);

          return 100;

        }

        return old + 25;

      });

    },700);


    return ()=>clearInterval(timer);

  },[done]);


  return (

    <div className="loader">

      <motion.div
      className="loader-logo"
      animate={{
        rotate:360
      }}
      transition={{
        duration:4,
        repeat:Infinity
      }}
      >

      ◈

      </motion.div>


      <h1>
        TOSH PREMIUM BOT
      </h1>


      <p>
        Loading System {progress}%
      </p>


    </div>

  );

}


export default Loader;
