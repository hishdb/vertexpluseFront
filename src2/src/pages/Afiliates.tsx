import MenuBar from "../components/MenuBar";
import './styles.css';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import AffiliateStartEarningSection from "../components/AffiliateStartEarningSection";
import AffiliateStartEarningFromYourTraffic from "../components/AffiliateStartEarningFromYourTraffic";
import AffiliateFirstElement from "../components/AffiliateFirstElement";

function Affiliate() {
    return (
        <div className="flex flex-col min-h-screen cursor-pointer">
        <main className="h-screen">
            <MenuBar />
            <div className="h-[calc(100%)]"> {/* Adjust based on MenuBar height */}
            <Swiper
                style={{

                    height: "100%"
                }}
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet custom-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper custom-swiper"
            >
                <SwiperSlide>
                    <AffiliateFirstElement/>
                </SwiperSlide>
                    
                <SwiperSlide>
                <AffiliateStartEarningSection data-swiper-parallax="-200" />
                </SwiperSlide>

                <SwiperSlide>
                    <AffiliateStartEarningFromYourTraffic/>
                </SwiperSlide>
            </Swiper>
            </div>
        </main>
        </div>
    );
}

export default Affiliate;