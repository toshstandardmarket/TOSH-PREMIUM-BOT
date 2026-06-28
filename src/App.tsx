import { motion } from "framer-motion";

function App() {
  return (
    <div className="app">

      <motion.div
        className="logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        ◈
      </motion.div>

      <h1>TOSH PREMIUM BOT</h1>

      <p>
        Real Deriv Automated Trading Terminal
      </p>

    </div>
  );
}

export default App;
