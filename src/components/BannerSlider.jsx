import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import sl1 from "./../assets/SliderImg/1.jpg";
// import sl2 from "./../assets/SliderImg/2.jpg";
// import sl3 from "./../assets/SliderImg/3.jpg";

const BannerSlider = () => {
  return (
    // <div className="h-[640px] bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]">
    <div className="py-12 lg:h-[560px] mb-10 bg-gradient-to-r flex justify-center items-center from-gray-100 via-[#a7f3d0] to-gray-100">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* One */}
        <SwiperSlide>
          <div className="text-gray-800">
            <div className="max-w-[1240px] mx-auto flex flex-col px-4 lg:px-0 justify-center items-center sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-3xl md:text-5xl font-bold leading-none ">
                  Ac mattis senectus erat pharetra
                </h1>
                <p className="mt-6 mb-8 md:text-lg sm:mb-12">
                  Dictum aliquam porta in condimentum ac integer
                  <br className="hidden md:inline lg:hidden" />
                  turpis pulvinar, est scelerisque ligula sem
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                  >
                    Suspendisse
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-100"
                  >
                    Malesuada
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src={sl1}
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* tow */}
        <SwiperSlide>
          <div className="text-gray-800">
            <div className="max-w-[1240px] mx-auto flex flex-col px-4 lg:px-0 justify-center items-center sm:py-12 lg:py-24 lg:flex-row-reverse lg:justify-between">
              <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-3xl md:text-5xl font-bold leading-none ">
                  Ac mattis senectus erat pharetra
                </h1>
                <p className="mt-6 mb-8 md:text-lg sm:mb-12">
                  Dictum aliquam porta in condimentum ac integer
                  <br className="hidden md:inline lg:hidden" />
                  turpis pulvinar, est scelerisque ligula sem
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                  >
                    Suspendisse
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-100"
                  >
                    Malesuada
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src={sl1}
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* three */}
        <SwiperSlide>
          <div className="text-gray-800">
            <div className="max-w-[1240px] mx-auto flex flex-col px-4 lg:px-0 justify-center items-center sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-3xl md:text-5xl font-bold leading-none ">
                  Ac mattis senectus erat pharetra
                </h1>
                <p className="mt-6 mb-8 md:text-lg sm:mb-12">
                  Dictum aliquam porta in condimentum ac integer
                  <br className="hidden md:inline lg:hidden" />
                  turpis pulvinar, est scelerisque ligula sem
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                  >
                    Suspendisse
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-100"
                  >
                    Malesuada
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src={sl1}
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
