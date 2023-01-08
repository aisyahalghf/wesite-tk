import videoKegiatan from "../Asset/video/videoKegiatan.mp4";
import VideoMarket from "../Asset/video/video-sec1.mp4";
import { Icon } from "@iconify/react";

const Section2 = () => {
  return (
    <div className=" flex flex-col gap-[70px] pt-[5%] pl-10 pb-[5%] container mx-auto shadow shadow-slate-200 ">
      <div className=" flex flex-row  flex-wrap ">
        <Icon
          className="text-5xl text-[#e95584]"
          icon="mdi:horizontal-line"
          rotate={1}
        />
        <div className=" font-extrabold text-4xl w-[400px] gap-5 text-[#d2d2d2]  ">
          A WARM WELCOME
        </div>
        <div className=" font-ABEZE  text-2xl max-w-[70%] tracking-[3px] text-[#1c1c1c] opacity-75">
          Tk Al Danazar 2 Pamulihan adalah lembaga pendidikan anak usia dini
          yang sasaran usianya dari 4 sampai 6 tahun. menawarkan pengajaran yang
          berkualitas yang berorientasi pada bakat dan minat anak.
        </div>
      </div>
      <div className=" flex flex-row items-center flex-wrap ">
        <Icon
          className="text-5xl text-[#e95584]"
          icon="mdi:horizontal-line"
          rotate={1}
        />
        <div className=" font-extrabold text-3xl w-[400px] gap-5 ">
          FUN ACTIVITY
        </div>
        <div className=" font-ABEZE  text-2xl max-w-[70%] tracking-[3px] text-[#1c1c1c] opacity-75">
          Video keseruan kami dengan teman-teman sekolah.
        </div>
      </div>
      <div className=" flex flex-row justify-center gap-10 flex-wrap ">
        <video src={videoKegiatan} controls="controls" autoPlay="true"></video>
        <video src={VideoMarket} controls="controls" autoPlay="true"></video>
      </div>
    </div>
  );
};

export default Section2;
