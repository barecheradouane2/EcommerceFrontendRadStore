function SellingInfoCover() {
    return (
        <div className="flex  flex-wrap-reverse items-center justify-between  bg-second-100 p-6 rounded-2xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl  font-bold">
              Here happening in your sales last weeks
            </h1>
            <div className="flex items-center gap-2">
              <h2 className="text-third-100 text-2xl font-bold">
                8.577.00 DZD
              </h2>
              <h3 className="font-bold text-xl">Sales</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-third-100">20 product are sellings</span>
              <span>and its increasing from last weeks</span>
            </div>

            <div>
              <button
                className="bg-white text-third-100 px-4 py-2  rounded-2xl
            cursor-pointer hover:bg-third-100 hover:text-white transition-all duration-300 ease-in-out
            "
              >
                view Orders
              </button>
            </div>
          </div>

          <div className="max-w-[300px]">
            <img
              className="w-full h-full object-cover"
              src="../../public/dashborad.svg"
              alt=""
            />
          </div>
        </div>
    )
}

export default SellingInfoCover
