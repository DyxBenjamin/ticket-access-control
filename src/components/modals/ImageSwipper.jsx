import Image from 'next/image'
import React, {useEffect, useRef} from 'react';
import SwiperCore, {Autoplay, Navigation, Pagination, EffectFade} from 'swiper';
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import DynamicSizeNextImage from "@components/utils/DynamicSizeNextImage";

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

export function ImageSwiper({
                                urls,
                                layout,
                                objectFit,
                                height,
                                width,
    imgWidth,
    imgHeight,
                                alt = "",
                                swiperH,
                                swiperW,
                                delayInSeconds = 4,
                            }, objectPosition) {
    const swiperRef = useRef(null);
    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;
        const timer = setInterval(() => {
            if (swiperInstance) {
                swiperInstance.slideNext();
            }
        }, delayInSeconds * 1000);
        return () => {
            clearInterval(timer);
        };
    }, [delayInSeconds]);

    return (
        <div style={{width: width, height: height, padding: "1%"}}>
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                autoplay={{delay:  delayInSeconds * 1000 }}
                loop
                style={{width: width, height: height}}
            >
                {urls.map((src, i) => (
                    <SwiperSlide key={i} style={{textAlign: 'center', width: swiperW, height: swiperH}}>
                        <DynamicSizeNextImage
                            src={src}
                           width={height}
                            height={width}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}
