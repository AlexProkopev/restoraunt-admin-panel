import {
  Pagination,
  Scrollbar,
  Mousewheel,
  Keyboard,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { List, Typography } from '@mui/material';
import DishCard from '../../CurrentMenuCard/CurrentMenuCard';
function MenuSaladsField({ filteredMenuSalads }) {
  return (
    <>
     <Typography variant="h4" component="h2" gutterBottom>
        Салаты
      </Typography>
    <List>
        <Swiper
          spaceBetween={1}
          slidesPerView={7}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          pagination={{ clickable: true }}
          modules={[ Pagination, Scrollbar, Mousewheel, Keyboard]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {filteredMenuSalads?.map((dish) => (
            <SwiperSlide key={dish._id}>
              <DishCard dish={dish} />
            </SwiperSlide>
          ))}
        </Swiper>
      </List>
      </>
  )
}

export default MenuSaladsField