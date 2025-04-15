import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
// Import Swiper styles
import 'swiper/css';

function HeroBanner() {
  return (
		<div className=' p-5'>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
				style={{ width: "100vw" }}>
				<SwiperSlide style={{ width: "100vw" }}>
					<img
						src='https://rukminim2.flixcart.com/image/850/1000/kavefm80/poster/w/x/z/medium-the-marvel-avengers-wall-poster-for-room-with-gloss-original-imafsckr6vt3wjjv.jpeg?q=20&crop=false'
						alt='marvel'
						className=' object-cover w-100'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='https://www.tallengestore.com/cdn/shop/products/JurassicPark-TRexDinosaur-HollywoodMoviePoster_6afc984c-2cb7-42ad-ae30-a38dd7cff650.jpg?v=1648215413'
						alt='jurassic park'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='https://dcassetcdn.com/design_img/16298/35582/35582_406182_16298_image.jpg'
						alt='Reverend'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='https://m.media-amazon.com/images/I/81lkpobqkVL.jpg'
						alt='XMEN'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default HeroBanner
