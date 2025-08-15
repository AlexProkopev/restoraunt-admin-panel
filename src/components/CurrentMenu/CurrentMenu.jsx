import { Box, List, Typography } from '@mui/material';
import { selectDishes } from '../../redux/dishes/dishes.selectors';
import { useDispatch, useSelector } from 'react-redux';
import CurrentMenuCard from '../CurrentMenuCard/CurrentMenuCard';
import { useEffect } from 'react';
import { fetchDishes } from '../../redux/dishes/services';
import {
  EffectFlip,
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

function CurrentMenu() {
  const currentMenu = useSelector(selectDishes);
  const dispatch = useDispatch();

  const filterForMenu = (menu) =>
    menu?.filter(
      (dish) => dish.isAvailable && dish.category === 'Горячее блюдо'
    );
  const filteredMenu = filterForMenu(currentMenu);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        Горячие блюда
      </Typography>
      <List>
        <Swiper
          spaceBetween={1}
          slidesPerView={1}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          modules={[ Pagination, Scrollbar, Mousewheel, Keyboard]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {filteredMenu?.map((dish) => (
            <SwiperSlide key={dish._id}>
              <CurrentMenuCard dish={dish} />
            </SwiperSlide>
          ))}
        </Swiper>
      </List>
    </>
  );
}

export default CurrentMenu;
