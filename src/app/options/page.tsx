import Link from "next/link";
import React from "react";

const OptionsPage = () => {
  return (
    <div className="backgroundImage h-screen flex items-center justify-center">
      <div className="w-[500px] h-[500px] bg-[#fdf5ef] rounded-3xl">
        <div>
          <p className="question text-2xl font-bold text-center text mt-4 text-rose-400">
            Saiba que eu me considero a pessoa mais sortuda do mundo por você
            aceitar sair comigo ❤️
          </p>
          <p className="question text-2xl font-bold text-center text text-rose-400">
            E onde você gostaria de jantar com seu gatinho?
          </p>
        </div>
        <div className="w-full h-auto flex flex-row pt-10">
          <div className="w-1/2 text-lg px-4 ">
            <button className="bg-rose-300 text-white rounded-2xl px-2">
            <Link  href="/newOptions">Quero comer em algum lugar novo!! 😋</Link>
            </button>
          </div>
          <div className="w-1/2 text-lg px-4 ">
            <button className="bg-rose-300 text-white rounded-2xl px-2">
            <Link  href="/classicOptions">Quero ir nos clássicos 😌</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsPage;
