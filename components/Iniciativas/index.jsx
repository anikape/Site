// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Iniciativa.module.css";
import Card from "../commons/Card/Card";
import { iniciativasSouJunior } from "../../utils/iniciativasSwipe";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        className={styles.swiperContainer}
        autoplay={{
          delay: 225000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}>
        {iniciativasSouJunior.map(
          ({ title, subtitle, description, image, type }, id) => (
            <SwiperSlide key={id} className={`${styles["swiper-slide"]}`}>
              <Card
                type={type}
                title={title}
                subtitle={subtitle}
                description={description}
                image={image}
                className={styles.swiperSlide}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
}
