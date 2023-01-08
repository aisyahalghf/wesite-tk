import img from "../Asset/img/IMG_4687-3.jpg";
import { Box } from "@chakra-ui/react";

const Cards = () => {
  return (
    <div className=" flex flex-row  text-white flex-wrap shadow shadow-slate-300 h-[300%]">
      <img className=" w-[40%]  " src={img} alt="card" />
      <Box className=" flex flex-col font-ABEZE bg-[#e95584] w-[60%] p-10 justify-evenly text-justify  ">
        <h1 className="text-2xl">Pesan dari Kepala Sekolah Kami </h1>
        <p className="tracking-[1px] ">
          Sekolah kami berdiri pada tahun 2021 atas dasar amanah dari masyarakat
          sekitar yang membutuhkan pelayan pendidikan anak usia dini yang
          berusia 4 sampai 6 tahun. Sekolah kami mempunyai visi untuk mewujudkan
          anak yang cerdas, berakhlak mulia, berkarakter dan mencintai
          lingkungan melalui pembelajaran intrakulikuler, project, pembiasaan,
          kegiatan outbound dan outing class yang terprogram
        </p>
        <a href>SELENGKAPNYA DARI YULIANTI</a>
      </Box>
    </div>
  );
};

export default Cards;
