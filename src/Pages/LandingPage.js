import Slider from "../Component/Slider.js";
import Section2 from "../Component/Section2";
import Welcome from "../Component/Welcome";
import Cards from "../Component/Card";
import Classroom from "../Component/Classroom";
import BackgroundImage from "../Component/Background-img";

import Carousel from "nuka-carousel";

import outbond from "../Asset/img/bg8.jpg";
import hariAnak from "../Asset/img/14.jpg";
import berkebun from "../Asset/img/bg7.jpg";
import camping from "../Asset/img/CAMPING.jpg";
import apiUnggun from "../Asset/img/Apiunggun.jpg";
import usia4thn from "../Asset/img/4-5thn.jpg";
import usia5thn from "../Asset/img/5-6thn.JPG";
import usia6thn from "../Asset/img/6-7thn.JPG";
import { Button } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <div>
      <Carousel wrapAround={true} autoplay animation="fade">
        <Welcome img={hariAnak} />
        <Slider activity="OUTBOUND" img={outbond} />
        <Slider activity="BERKEBUN" img={berkebun} />
        <Slider activity="FUN CAMPING" img={camping} />
        <Slider activity="MENCINTAI ALAM " img={apiUnggun} />
      </Carousel>
      <Section2 />
      <div className=" container mx-auto pt-20 pb-20 pl-10 pr-10 shadow shadow-slate-300 flex flex-col items-center gap-5  ">
        <div className=" flex flex-row gap-5 flex-wrap  ">
          <Classroom
            img={usia4thn}
            Classroom="Kelas A"
            age={"4-5 Tahun"}
            text="Rasio guru dan anak pada kelas ini adalah  1 guru berbanding 8 anak. Kami dapat menyediakan interaksi aktif antara guru dan anak yang lebih intens, karena saat usia ini, anak mempunyai rasa ingin tahu yang tinggi tentang lingkungan di sekitarnya. Balita pada usia ini akan mengeksplorasi melalui bertanya, menemukan sesuatu, dan menginformasikannya kepada orang dewasa terdekat."
          />
          <Classroom
            img={usia5thn}
            Classroom="Kelas B1"
            age="5-6 Tahun"
            text="Rasio guru dan anak pada kelas ini adalah  1 guru berbanding 12 anak. Disini guru harus banyak mendengarkan apa yang dikomunikasikan oleh anak dan hanya sedikit untuk mengarahkan anak apabila membutuhkan bantuan."
          />
          <Classroom
            img={usia6thn}
            Classroom="Kelas B2"
            age="6-7"
            text="Rasio guru dan anak pada kelas ini adalah  1 guru berbanding 15 anak. Guru menfasilitasi pembelajaran, mengarahkan, membimbing dan membina agar bakat dan minat anak dapat terlayani dengan maksimal. "
          />
        </div>
        <Button bg={"#ffb433"} textColor={"white"} w={"120px"}>
          VIEW MORE
        </Button>
      </div>
      <div className=" flex justify-center container mx-auto shadow shadow-slate-300 bg-[#f0f0f0]  ">
        <Cards />
      </div>
      <div className="container mx-auto shadow shadow-slate-300 ">
        <BackgroundImage />
      </div>
    </div>
  );
};

export default LandingPage;
