"use client";
import { Paper } from "@mui/material";
import Link from "next/link";
import { useRef, useEffect } from "react";

const Button2 = () => {
  const wrapperRef = useRef(null);
  const noBtnRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const noBtn = noBtnRef.current;

    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const handleNoMouseOver = () => {
      const i =
        Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
      const j =
        Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
      noBtn.style.left = i + "px";
      noBtn.style.top = j + "px";
    };

    noBtn.addEventListener("mouseover", handleNoMouseOver);

    return () => {
      noBtn.removeEventListener("mouseover", handleNoMouseOver);
    };
  }, []);

  return (
    <Paper elevation={3} className="rounded-3xl ">
      <div
        className="wrapper bg-[#fdf5ef] rounded-3xl"
        style={{ position: "relative", width: "500px", height: "500px" }}
      >
        <p className="question text-2xl font-bold text-center text mt-4 text-rose-400">
          Princesinha linda, o que voce quer fazer depois de jantar com seu namorado lindo? hihihi
        </p>

        <div className="w-full flex pt-4">
          <div className="w-[250px] flex justify-center">
            <Link href="options" className="">
              <button className="yes-btn px-4 text-lg font-semibold bg-rose-300 text-white w-40 rounded-2xl">
                Eu aceito e amo muito você✨ ✨
              </button>
            </Link>
          </div>
          <div
            ref={wrapperRef}
            className="text-center  justify-center flex"
            style={{ position: "relative", width: "250px", height: "350px" }}
          >
            <button
              className="no-btn  text-lg font-semibold  bg-rose-300 text-white w-20 rounded-2xl"
              ref={noBtnRef}
              style={{ position: "absolute" }}
            >
              <p>Não!!</p>
            </button>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Button2;
