import { useRef } from "react";
import Image from "next/image";
import styles from "../OccupationSection/OccupationSection.module.css";
import { carouselItems } from "../../utils/carouselItems";
import { Paragraph } from "../commons/Paragraph";
import { Heading } from "../commons/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const OccupationSection = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <section className={styles.OccupationSection}>
        <div className={styles.OccupationContainer}>
          <Heading level={"h2"}>Áreas de atuação</Heading>
          <Paragraph>
            Aqui na SouJunior, atuam profissionais iniciantes das diversas áreas
            que compõem uma empresa de tecnologia. Confira abaixo as áreas de
            atuação que temos em nosso quadro atualmente:
          </Paragraph>

          <div className={styles.areasContainer}>
            <Swiper
              spaceBetween={170}
              slidesPerView={9}
              freeMode={true}
              loop={true}
              rewind={true}
              modules={[Controller, Navigation]}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
            >
              {carouselItems.map(({ title, icon }) => (
                <SwiperSlide key={title}>
                  <div className={styles.areaItem}>
                    <Image src={icon} alt={title} width={62} height={62} />
                    <p>{title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <div className={styles.arrowContainer}>
        <button ref={navigationPrevRef}>
          <Image
            src="/assets/button-directional-dark-caroussel.svg"
            width={62}
            height={62}
            alt="Anterior"
          />
        </button>
        <button ref={navigationNextRef}>
          <Image
            src="/assets/button-directional-dark-caroussel.svg"
            width={62}
            height={62}
            alt="Próximo"
          />
        </button>
      </div>
    </>
  );
};
