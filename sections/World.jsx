"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <TypingText
                title="| People on the World"
                textStyles="text-center"
            />
            <TitleText
                title={
                    <>
                        Track friends around you and invite them to play
                        together in the same world
                    </>
                }
                textStyles="text-center"
            />
            <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="relative mt-[60px] flex w-full h-[550px]"
            >
                <img
                    src="/map.png"
                    alt="map"
                    className="w-full h-full object-contain"
                />
                <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img
                        src="/people-01.png"
                        alt="people"
                        className="w-full h-full"
                    />
                </div>
                <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img
                        src="/people-02.png"
                        alt="people"
                        className="w-full h-full"
                    />
                </div>
                <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img
                        src="/people-03.png"
                        alt="people"
                        className="w-full h-full"
                    />
                </div>
                <div className="absolute top-[40%] left-[20%] w-[200px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]">
                    <img
                        src="/place-01.png"
                        alt="place"
                        className="w-full h-full rounded-[24px]"
                    />
                    <div className="absolute bottom-5 left-5">
                        <div className="flex gap-[5px] items-center">
                            <div className="flex ml-[10px]">
                                <img
                                    src="/people-01.png"
                                    alt="people"
                                    className="w-[24px] h-[24px] rounded-full ml-[-10px]"
                                />
                                <img
                                    src="/people-02.png"
                                    alt="people"
                                    className="w-[24px] h-[24px] rounded-full ml-[-10px]"
                                />
                                <img
                                    src="/people-03.png"
                                    alt="people"
                                    className="w-[24px] h-[24px] rounded-full ml-[-10px]"
                                />
                            </div>
                            <p className="text-white text-[12px]">
                                +264 has joined
                            </p>
                        </div>
                        <p className="text-white font-bold text-[18px] font-normal">
                            The Upside Down
                        </p>
                    </div>
                </div>
                <div className="absolute top-[10%] right-[20%] w-[200px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]">
                    <img
                        src="/place-02.png"
                        alt="place"
                        className="w-full h-full rounded-[24px]"
                    />
                    <div className="absolute bottom-5 left-5">
                        <div className="flex gap-[5px] items-center">
                            <div className="flex ml-[10px]">
                                <img
                                    src="/people-01.png"
                                    alt="people"
                                    className="w-[24px] h-[24px] rounded-full ml-[-10px]"
                                />
                                <img
                                    src="/people-02.png"
                                    alt="people"
                                    className="w-[24px] h-[24px] rounded-full ml-[-10px]"
                                />
                                <img
                                    src="/people-03.png"
                                    alt="people"
                                    className="w-[24px] h-[24px] rounded-full ml-[-10px]"
                                />
                            </div>
                            <p className="text-white text-[12px]">
                                +264 has joined
                            </p>
                        </div>
                        <p className="text-white font-bold text-[18px] font-normal">
                            Hawkins Labs
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default World;
