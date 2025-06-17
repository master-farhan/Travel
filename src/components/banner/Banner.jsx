import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import Boxpng from "../../assets/box.png";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-100">
      <div className="min-h-[550px] flex justify-center items-center backdrop:blur-xl py-12 sm:py-0 ">
        <div className="py-10 px-5 sm:px-10 lg:px-30 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* image  */}
            <div className="">
              <img
                data-aos="fade-right"
                src={Boxpng}
                alt=""
                className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
              />
            </div>
            {/* text */}
            <div className="overflow-hidden">
              <h1
                data-aos="fade-left"
                data-aos-duration="400"
                className="text-3xl font-bold sm:text-4xl"
              >
                Explore all corners of the world with us
              </h1>
              <p
                className="text-sm text-gray-500 tracking-wide leading-8"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                laudantium repellendus unde ut. Libero earum eos ad, qui vitae
                impedit? Temporibus eveniet tempora voluptas!
              </p>
              <div
                className="flex gap-6 py-5"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                    <p>Flight</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100" />
                    <p>Hotel</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100" />
                    <p>Wi-fi</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-red-100" />
                    <p>Foods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
