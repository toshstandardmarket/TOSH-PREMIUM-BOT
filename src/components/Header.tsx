import { motion } from "framer-motion";
import { Shield } from "lucide-react";

function Header() {
  return (
    <header className="header">

      <div className="brand">
        <motion.div
          className="brand-logo"
          animate={{
            boxShadow: [
              "0 0 10px #d4af37",
              "0 0 30px #d4af37",
              "0 0 10px #d4af37"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          ◈
        </motion.div>

        <h2>TOSH PREMIUM BOT</h2>
      </div>


      <div className="header-actions">

        <button className="shield">
          <Shield size={22}/>
        </button>


        <button className="login">
          Login
        </button>


        <a
          className="signup"
          href="https://partner-tracking.deriv.com/click?a=31609&o=1&c=3&link_id=1"
        >
          Sign Up
        </a>

      </div>

    </header>
  );
}

export default Header;
