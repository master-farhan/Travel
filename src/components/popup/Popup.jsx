import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-back/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-grow p-4 rounded-md w-[300px]">
            {/* header */}
            <div className="flex items-center justify-between">
              <div className="">
                <h1 className="text-lg">Book your trip</h1>
              </div>
              <div className="">
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>

            {/* body */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Nmae"
                className="w-full rounded-full border border-back/30  px-3 py-1 focus:border-primary outline-0 mb-3"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-back/30  px-3 py-1 focus:border-primary outline-0 mb-3"
              />

              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-back/30  px-3 py-1 focus:border-primary outline-0 mb-3"
              />

              <div className="flex justify-center items-center">
                <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary trans text-grow px-3 py-1 rounded-full cursor-pointer font-medium">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
