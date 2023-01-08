import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="   flex flex-row  justify-between font-ABEZE container mx-auto p-10 text-white h-[450px]  ">
      <div className="  flex flex-col justify-evenly  ">
        <div>
          <h1 className="mb-5 font-semibold tracking-[2px] ">CONTACT US</h1>
          <p>+62 821 16880837</p>
        </div>

        <p className="w-[40%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestiae
          dolor commodi laborum aliquid nemo dolorum! Ea nesciunt amet nemo
          quis? Veniam id asperiores placeat alias, nam quis hic blanditiis.
        </p>
      </div>
      <div className=" flex flex-col justify-evenly ">
        <div className=" text-right font-semibold  ">
          <h1>EMPLOYMENT</h1>
          <h1>ENROL</h1>
          <h1>PARENT LOUNGE</h1>
          <h1>STAFF</h1>
        </div>
        <div className="flex flex-row gap-5 text-4xl ">
          <Icon icon="circum:facebook" />
          <Icon icon="et:twitter" />
          <Icon icon="circum:instagram" />
          <Icon icon="et:twitter" />
          <Icon icon="et:twitter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
