// Import Swiper React components
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ScreenShoot as ScreenShootData } from '../../data.json';

const SwipeScreenShoot = () => {
  return (
    <div className="SwipeScreenShoot">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 3000 }} // Configure autoplay options
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 5,
          },
          2000: {
            slidesPerView: 7,
          },
        }}
      >
        {ScreenShootData.Data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img loading="lazy" src={item} alt={`Screenshot ${index + 1}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwipeScreenShoot;
