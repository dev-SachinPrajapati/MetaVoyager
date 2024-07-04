"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components/CustomTexts";

const About = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.25,
        }}
        className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
      >
        <TypingText title="| About MetaVoyager" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">MetaVoyager </span>
          is an innovative platform designed as a gateway to the expansive world
          of the metaverse, focusing on exploration, discovery, and interaction
          within virtual environments. The name
          <span className="font-extrabold text-white">
            {" "}
            "MetaVoyager" combines "Meta" (implying the metaverse) and "Voyager"
            (implying exploration){" "}
          </span>
          suggesting a journey through virtual spaces.
          {/* <span className="font-extrabold text-white"> VR </span> */}
          The platform features immersive worlds where users can explore a
          variety of detailed and interactive virtual environments, each with
          unique themes. Users can create and customize their avatars to
          represent themselves within these virtual worlds.
          <span className="font-extrabold text-white">
            {" "}
            Social interaction is a key component,{" "}
          </span>
          allowing users to host and join virtual meetups, conferences, and
          social events, as well as connect with others for networking and
          community-building.
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        ></motion.img>
      </motion.div>
    </section>
  );
};

export default About;
