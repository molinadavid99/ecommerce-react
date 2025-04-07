import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const imagenes = [
  "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1209226542.jpg?crop=0.9661177361347719xw:1xh;center,top&resize=1200:*",
  "https://cdn.mos.cms.futurecdn.net/ZqAcGK8Z38e5gi7Ne4Ht5U-1280-80.jpg",
  "https://myplantin.com/_next/image?url=https%3A%2F%2Fstrapi.myplantin.com%2Fleafy_green_potted_kentia_palm_against_a_gray_wall_2021_09_07_20_46_37_utc_min_1_3467d11742.webp&w=1920&q=75g"
];

function Carrusel() {
  return (
    <Box sx={{ textAlign: "center", padding: 2 }}>
      <Swiper navigation={true} modules={[Navigation]} loop={true}>
        {imagenes.map((imagen, index) => (
          <SwiperSlide key={index}>
            <img src={imagen} alt={`Carrusel ${index}`} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Carrusel;