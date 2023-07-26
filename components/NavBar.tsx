import { useRouter } from "next/router";
import { cls } from "./utils";
import { motion, useAnimation, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navVarient = {
  top: {
    backgroundColor: "rgba(15, 23, 43, 0.9)",
  },
  scroll: {
    backgroundColor: "rgba(15, 23, 43, 0.9)",
  },
};

const ScrollUp = {
  top: {
    opacity: "0",
  },
  scroll: {
    opacity: "1",
  },
};

export default function NavigationBar() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const buttonAnimation = useAnimation();
  const [lanToggle, set_lanToggle] = useState<"KR" | "EN">("EN");
  const [toggleMenu, set_toggleMenu] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
        buttonAnimation.start("scroll");
      } else {
        navAnimation.start("top");
        buttonAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation, buttonAnimation]);

  const mobileMenu = () => {
    set_toggleMenu((prev) => !prev);
  };

  return (
    <>
      <div>
        <motion.nav
          variants={navVarient}
          animate={navAnimation}
          transition={{ duration: 0.1 }}
          initial={"top"}
          className="fixed top-0 w-full z-20 flex flex-col"
        >
          <div className="flex justify-between items-center lg:px-0 px-5">
            <Link href="/">
              <motion.img
                src="/mainlogo.png"
                className="lg:w-40 w-28 my-8 lg:ml-24"
              />
            </Link>
            <div className="lg:flex hidden justify-between text-sm items-center text-white space-x-10">
              <Link
                href="#jury"
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/#jury"
                    ? "text-[#fea116]"
                    : "hover:text-[#fea116] transition-colors"
                )}
              >
                <span>JURY</span>
              </Link>
              <Link
                href="#past"
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/#past"
                    ? "text-[#fea116]"
                    : "hover:text-[#fea116] transition-colors"
                )}
              >
                <span>PAST WINNERS</span>
              </Link>
              <Link
                href="#regulation"
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/#regulation"
                    ? "text-[#fea116]"
                    : "hover:text-[#fea116] transition-colors"
                )}
              >
                <span>REGULATION</span>
              </Link>
              <Link
                href="#notice"
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/#notice"
                    ? "text-[#fea116]"
                    : "hover:text-[#fea116] transition-colors"
                )}
              >
                <span>NOTICE</span>
              </Link>
              <Link
                href="#contact"
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/#contact"
                    ? "text-[#fea116]"
                    : "hover:text-[#fea116] transition-colors"
                )}
              >
                <span>CONTACT</span>
              </Link>

              <button className="bg-[#fea116] py-8 px-20 text-white text-2xl tracking-wider flex justify-center items-center gap-3 hover:bg-[#fdad35] transition">
                APPLY
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>

            </div>
            <button className="text-white lg:hidden block" onClick={mobileMenu}>
              {toggleMenu ? (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </motion.svg>
              )}
            </button>
          </div>
          {toggleMenu ? (
            <motion.div className={`text-white lg:hidden flex flex-col text-xs`}>
              <Link
                href="/regulation"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-[#fea116]"
                    : "hover:text-[#fea116] transition-colors"
                )}
              >
                <span>MAIN</span>
              </Link>
              <Link
                href="/jury"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-[#fea116]"
                    : "hover:text-[#fea116] transition-colors"
                )}
              >
                <span>WELCOME</span>
              </Link>
              <Link
                href="/contact"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-[#fea116]"
                    : "hover:text-[#fea116] transition-colors"
                )}
              >
                <span>INFORMATION</span>
              </Link>
              <Link
                href="/notice"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-[#fea116]"
                    : "hover:text-[#fea116] transition-colors"
                )}
              >
                <span>JURY</span>
              </Link>
              <Link
                href="/past"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-[#fea116]"
                    : "hover:text-[#fea116] transition-colors"
                )}
              >
                <span>CONTACT</span>
              </Link>
              <Link
                href="/past"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-[#fea116]"
                    : "hover:text-[#fea116] transition-colors"
                )}
              >
                <span>NOTICE</span>
              </Link>
              <Link
                href="/past"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-[#fea116]"
                    : "hover:text-[#fea116] transition-colors"
                )}
              >
                <span>PAST WINNERS</span>
              </Link>

              <button className="bg-[#fea116] py-6 text-white text-lg tracking-wider flex justify-center items-center gap-3 hover:bg-[#fdad35] transition">
                APPLY
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>

            </motion.div>
          ) : null}
        </motion.nav>
      </div>
      <motion.button
        onClick={scrollToTop}
        variants={ScrollUp}
        initial={{ opacity: 0 }}
        animate={buttonAnimation}
        transition={{ duration: 0.1 }}
        className="fixed bottom-4 right-4 bg-white lg:p-5 p-3 rounded-full hover:bg-gray-300 transition shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </motion.button>
    </>
  );
}
