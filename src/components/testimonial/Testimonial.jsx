import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from "swiper";
import 'swiper/css/pagination'
import  './styling/testimonial.css'

import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum necessitatibus distinctio quo libero repellat labore inventore quibusdam recusandae iure ducimus cum quisquam dicta delectus doloribus, maxime ullam. Eligendi, non.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum necessitatibus distinctio quo libero repellat labore inventore quibusdam recusandae iure ducimus cum quisquam dicta delectus doloribus, maxime ullam. Eligendi, non.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum necessitatibus distinctio quo libero repellat labore inventore quibusdam recusandae iure ducimus cum quisquam dicta delectus doloribus, maxime ullam. Eligendi, non.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum necessitatibus distinctio quo libero repellat labore inventore quibusdam recusandae iure ducimus cum quisquam dicta delectus doloribus, maxime ullam. Eligendi, non.",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Client always get</span>
        <span>Exceptional work</span>
        <span>from me..</span>
      </div>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      {/* swiper slider
          swiper slider */}
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable:true}}
    //   className={swiper}
      >
          {clients.map((clients,index)=>{
              return(
                  <SwiperSlide key={index} >
                    <div className="testimonials">
                        <img src={clients.img} alt="" />
                        <span>{clients.review}</span>
                    </div>
                  </SwiperSlide>
              )
          })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
