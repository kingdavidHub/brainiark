import { Button } from "@/components/ui/button";
import "./style.css";
import { Link } from "lucide-react";
const Home = () => {
  return (
    <section>
      <div className="lg:h-[500px] w-full sketch-overlay">
        <div className=" lg:h-[500px] p-12 flex flex-col gap-4 items-center ">
          <div className="bg-black w-full max-w-[700px] text-center px-4 py-6 rounded-lg">
            <h1 className="text-xl sm:text-3xl text-white">
              Unlock Infinite Possibilities with Brainiark
            </h1>
          </div>
          <h2 className="text-center">
            Empowering you with tools, insights, and knowledge to conquer
            challenges and spark innovation
          </h2>

          <div className="flex gap-3">
            <Button>Get Started</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
