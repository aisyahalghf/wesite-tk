import { Icon } from "@iconify/react";
import { Button } from "@chakra-ui/react";
import logo from "../Asset/img/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between h-[120px] items-center text-[#565652] container mx-auto">
      <div className="flex flex-col items-center  ">
        <div>
          <img className=" w-[50px] " src={logo} alt="logo" />
        </div>
        <div className="  font-semibold  text-xs mt-1 ">TK AL DANAZAR 2</div>
        <div className="  font-semibold  text-xs ">PAMULIHAN</div>
      </div>
      <div className=" flex flex-row gap-5 items-center  ">
        <Icon className="text-[30px]" icon="material-symbols:search" />
        <Icon className="text-[30px]" icon="ph:phone" rotate={3} />
        <Icon className="text-[30px]" icon="arcticons:mapsgo" />
        <div className=" flex gap-1 ">
          <Button p={5} fontSize={15} rounded={0} className=" text-[#ffb433]">
            TOUR IGS
          </Button>
          <Button
            bg="#ffb433"
            p={5}
            fontSize={15}
            rounded={0}
            className=" text-[#ffffff]"
          >
            Daftar Sekarang
          </Button>
        </div>
        <Icon className="text-[30px]" icon="gg:menu-grid-o" rotate={1} />

        <div className=" font-semibold ">MENU</div>
      </div>
    </nav>
  );
};

export default Navbar;
