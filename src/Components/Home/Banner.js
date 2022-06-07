import React from "react";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div>
        <Slider {...settings}>
          {/* slide-1 */}
          <div>
            <div className="hero1-bg object-cover w-auto h-[600px] flex flex-col justify-center items-center">
              <p className="text-8xl font-bold text-white text-center uppercase">
                <span className="bg-yellow-400 bg-opacity-80 px-5 py-2 text-center">
                  ALL NEW COLLECTION
                </span>
              </p>
              <h1 className="text-2xl bg-black text-center text-white font-bold uppercase">
                From Year 2022!
              </h1>
              <button className="btn  btn-warning mt-5">Grab Them Now!</button>
            </div>
          </div>
          {/* slide-2 */}
          <div>
            <div className="hero2-bg object-cover w-auto h-[600px] flex flex-col justify-center items-center">
              <h1 className="text-2xl text-center text-white uppercase">
                These latest tools
              </h1>
              <p className="text-8xl text-center font-bold text-yellow-400 uppercase">
                will save your time.
              </p>

              <button className="btn btn-outline btn-warning">
                Collection
              </button>
            </div>
          </div>
          {/* slide-3 */}
          <div>
            <div className="hero3-bg object-cover w-auto h-[600px] flex flex-col justify-center items-center text-center">
              <p className="text-yellow-400 text-2xl text-left">
                Save 30% before 30 June
              </p>
              <h1 className="text-8xl text-slate-100 font-bold mb-5">
                BUY IT NOW!
              </h1>
              <button className="btn btn-outline btn-warning">Check Out</button>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Banner;
