import bgImage from "../Asset/img/Apiunggun.jpg";
import { Button } from "@chakra-ui/react";

const BackgroundImage = () => {
  return (
    <div
      className=" backdrop-blur-sm bg-white/30 "
      style={{
        backgroundImage: `url( ${bgImage} )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" h-[700px]  backdrop-blur-s  bg-white/20 w-[400px]   ">
        <div className=" ml-[10%] flex flex-col justify-evenly  h-[700px] ">
          <h1 className=" text-white font-extrabold  tracking-[3px] mb-5 text-xs ">
            NEWS
          </h1>
          <h1 className=" text-white text-7xl font-extrabold tracking-[8px] mb-5  ">
            LATEST NEWS & EVENTS
          </h1>
          <Button
            bg="#ffb433"
            w={"150px"}
            p={5}
            fontSize={15}
            rounded={0}
            className=" text-[#ffffff]"
          >
            READ NEWS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
