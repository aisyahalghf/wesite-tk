import { Button } from "@chakra-ui/react";

const Welcome = (props) => {
  return (
    <div
      className=" opacity-70 "
      style={{
        backgroundImage: `url( ${props.img} )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" flex flex-col justify-center gap-14 text-center h-[700px] ">
        <h1 className=" text-white text-4xl  tracking-[3px] mb-5 opacity-100 font-sans ">
          Welcome to
        </h1>
        <h1 className=" text-white text-6xl font-semibold tracking-[3px] mb-5  ">
          TK AL DANAZAR 2 <br /> PAMULIHAN
        </h1>
        <h1 className=" text-white text-4xl f tracking-[3px] mb-5  ">
          Play. Explore. Learn. <br />
          <Button
            mt={10}
            bg="#ffb433"
            p={5}
            fontSize={15}
            rounded={5}
            className=" text-[#ffffff]"
          >
            GET STARTED
          </Button>
        </h1>
      </div>
    </div>
    // </div>
  );
};
export default Welcome;
