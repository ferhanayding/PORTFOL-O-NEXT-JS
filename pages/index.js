import { motion } from "framer-motion";
import Layout from "../components/Layout";
import React from "react";
import Typical from "react-typical";
import GithubIcon from "../components/icons/Github";
import TwitterIcon from "../components/icons/Twitter";
import Link from "next/link";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={[
          "React Devoloper",
          2000,
          "React Enthusiant",
          2000,
          "Chess Player",
          2000,
          "Musicant",
          2000,
          "Football player",
          2000,
        ]}
      />
    );
  },
  (props, prevProps) => true
);
export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img
        src="/images/ball-1.svg"
        alt="ball-1"
        className="hidden md:block h-auto absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 120, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <motion.img
        src="/images/ball-1.svg"
        alt="ball-2"
        className="hidden md:block h-auto absolute bottom-10 left-20 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.5 } }}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white ">
              <span className=" text-lg font-normal ">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Girfield
            </h1>
            <div className=" font-extrabold mt-5 text-2xl  text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-yellow-400 bg-clip-text md:mt-3 ">
              <TypingAnimation />
            </div>
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/ferhanayding"
                target={"_blank"}
                rel="noopener noreforrer"
                className="flex items-center justify-center text-gray-800 dark:text-gray-100 dark:hover:text-blue-600 hover:text-blue-500 transition-colors duration-300  "
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
              <motion.a
                href="https://twitter.com/ferhanayding"
                target={"_blank"}
                rel="noopener noreforrer"
                className="flex items-center justify-center text-gray-800 dark:text-gray-100 dark:hover:text-blue-600 hover:text-blue-500 transition-colors duration-300  "
                whileHover={{ scale: 1.1 }}
              >
                <TwitterIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>
          {/* code area */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Reprehenderit,
                    doloribus!
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="https://avatars.githubusercontent.com/u/73706149?v=4"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">2</span> =
                        ["Reactjs", "Postgresql", "Nodejs","Mongo
                        db","Spring-boot","Java"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link href="/projects">
                      <a className="transition duration-300">Projects</a>
                    </Link>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}
