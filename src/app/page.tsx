import Image from "next/image";
import old1 from "../images/old.png";
import old2 from "../images/old2.png";
import old3 from "../images/old3.png";
import { IconButton,  Paper } from "@mui/material";
import Link from "next/link";
import { ArrowForward } from "@mui/icons-material";

export default function Home() {
  return (
    <main className="z-10 bg-slate-800">
      <section>
        <div className="">
          <div className="flex justify-center w-full">
            <div className="text-5xl font-extrabold text-red-600 font-sans">
              <p className="text-center mt-28">DOS MESMOS CRIADORES DE:</p>
              <div className="mt-4 bg-slate-600 rounded-3xl">
                <Paper
                  elevation={3}
                  className="flex flex-col items-center max-w-[750px] rounded-3xl px-4 bg-slate-600 "
                >
                  <Image
                    src={old1}
                    className="my-4 rounded-2xl"
                    alt=""
                    width={700}
                  />
                  <Image
                    src={old2}
                    className="my-4 rounded-2xl"
                    alt=""
                    width={700}
                  />
                  <Image
                    src={old3}
                    className="my-4 rounded-2xl"
                    alt=""
                    width={700}
                  />
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className=" h-full flex items-center justify-center">
          <div>
            <p className="text-6xl font-extrabold text-red-600 text-center mt-28">
              <p>VEM AÍ:</p>
              🔥 MÊSVERSÁRIO - EDIÇÃO JULHO/23 🔥
            </p>
            <div className="text-center mt-4 ">
              <Link href='/invitation'>

              <IconButton
                color="error"
                size="large"
                className="ml-4 border border-solid border-red-600 hover:bg-red-600 hover:border-red-600 hover:text-slate-100"
                >
                <ArrowForward fontSize="inherit" />
              </IconButton>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
