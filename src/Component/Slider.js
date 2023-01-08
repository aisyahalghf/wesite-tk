import { Button } from "@chakra-ui/react";

const Slider = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url( ${props.img} )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" h-[700px] flex  ">
        <div className=" ml-[10%] mt-[380px] ">
          <h1 className=" text-white text-7xl font-extrabold  tracking-[3px] mb-5 opacity-100 ">
            OUR ACTIVITY
          </h1>
          <h1 className=" text-white text-6xl font-extrabold tracking-[3px] mb-5  ">
            {props.activity}
          </h1>
          <Button
            bg="#ffb433"
            p={5}
            fontSize={15}
            rounded={0}
            className=" text-[#ffffff]"
          >
            DAFTAR SEKARANG
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
