export default function Modal({ toggleModal, content }) {
  const img_base_url = "https://image.tmdb.org/t/p/w500";

  return (
    <div
      onClick={(event) => {
        if (event.target !== event.currentTarget) {
          return;
        }

        toggleModal();
      }}
      className="fixed top-0 left-0 overflow-hidden w-full h-[100svh] flex items-end bg-[rgba(225,225,225,0.2)] dark:bg-[rgba(51,51,51,0.2)] backdrop-blur-sm cursor-pointer"
    >
      <div className="w-full relative h-1/2 flex justify-center items-center cursor-default rounded-t-2xl">
        <div className="px-3 pt-5 absolute inset-0 z-10 w-full h-full overflow-hidden  bg-slate-200 dark:bg-slate-950 rounded-t-2xl">
          <div>
            <div className="flex justify-center items-center flex-col pb-5">
              <div className="w-full h-64 overflow-hidden rounded-t-xl">
                <div className="absolute z-0 h-64 left-0 top-0 w-full bg-black">
                  <img
                    className="w-full h-full object-cover"
                    src={img_base_url + content.backdrop_path}
                    alt=""
                  />
                </div>
                <div className="absolute flex justify-center items-center z-10 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm h-64 top-0 left-0 w-full">
                  <div className="w-36 shadow-2xl shadow-slate-800 overflow-hidden select-none rounded-lg pointer-events-none">
                    <img
                      className="w-full h-full object-conver mix-blend-normal"
                      src={img_base_url + content.poster_path}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 truncate">
                  {content.name || "Movie Name"}
                </h3>
                <p className="text-sm mt-2 dark:selection:bg-slate-800 text-slate-700 dark:text-slate-500 px-1 line-clamp-3">
                  {content.overview}
                </p>
                <div className="mt-4">
                  <button disabled className="px-3 py-2 disabled:bg-slate-400 dark:disabled:bg-slate-900 disabled:cursor-not-allowed select-none rounded-xl bg-slate-800 dark:bg-slate-700 text-white shadow-2xl hover:shadow-none hover:bg-slate-600 dark:hover:bg-slate-500">
                    <span className="pr-3">❤️</span>
                    Add to favourite (soon maybe 🤷🏻)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-0 inset-0 -top-7 rounded-t-xl w-full h-full bg-black  blur-lg opacity-40"></div>
      </div>
    </div>
  );
}
