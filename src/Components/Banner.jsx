import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        navigation
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="bg-blue-100 p-10 rounded-lg text-center">
            <img
              src="/assets/undraw_to-do-list_eoia.svg"
              alt="To Do List Illustration"
              className="mx-auto mb-6 h-48"
            />
            <h2 className="text-3xl font-bold text-blue-800 mb-2">
              Get Freelance Tasks Done Faster
            </h2>
            <p className="text-gray-600">Access top-rated freelancers now!</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-purple-100 p-10 rounded-lg text-center">
            <img
              src="/assets/undraw_creative-flow_t3kz.svg"
              alt="Creative Flow Illustration"
              className="mx-auto mb-6 h-48"
            />
            <h2 className="text-3xl font-bold text-purple-800 mb-2">
              Need a Logo or Branding?
            </h2>
            <p className="text-gray-600">Hire professional designers today.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-green-100 p-10 rounded-lg text-center">
            <img
              src="/assets/undraw_idea_hz8b.svg"
              alt="Idea Illustration"
              className="mx-auto mb-6 h-48"
            />
            <h2 className="text-3xl font-bold text-green-800 mb-2">
              Launch Your Website Idea
            </h2>
            <p className="text-gray-600">Find expert developers to build it now.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
