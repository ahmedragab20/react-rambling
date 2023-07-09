import { useEffect, useState } from "react";
import Modal from "./components/Modal";

function App() {
  //! The app named posts, but I will use movies api cuz this is the best one i found out there for what i want to do

  const [searchQuery, setSearchQuery] = useState("");
  const url = new URL("https://api.themoviedb.org/3/search/multi");
  const api_key = "96118d622d2c41ec061099bbc178523d";
  const img_base_url = "https://image.tmdb.org/t/p/w500";
  url.search = new URLSearchParams({
    api_key,
    query: searchQuery,
    include_adult: false,
    language: "en-US",
  }).toString();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (abortController) => {
    setLoading(true);
    await fetch(url, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      if (searchQuery.length > 0) {
        await fetchMovies(abortController);
      }
    })();
    return () => {
      abortController.abort();
      setLoading(false);
    };
  }, [searchQuery]);

  const [openedModal, setOpenedModal] = useState(false);
  const toggleModal = () => {
    setOpenedModal(!openedModal);
  };

  const [modalContent, setModalContent] = useState();
  const handleModalContent = (content) => {
    setModalContent(content);
    toggleModal();
  };

  useEffect(() => {
    if (openedModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openedModal]);

  return (
    <>
      <div className="px-2  py-10 bg-slate-100 h-[100svh] overflow-auto">
        <div className="flex justify-center items-center">
          <h2 className=" text-4xl font-extrabold text-slate-700">Search</h2>
        </div>
        <div className="my-5 w-11/12 mx-auto">
          <div className="flex justify-center items-center">
            <input
              type="search"
              className="w-full p-2 border border-slate-300 rounded-xl bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        {/* Results */}
        <div className="w-11/12 mx-auto">
          <div className="flex justify-center items-center flex-wrap">
            {/* Loading */}
            {loading && !!searchQuery.length && (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
              </div>
            )}

            {/* No results */}
            {!loading && !movies.length && !!searchQuery.length && (
              <div className="flex justify-center items-center">
                <h3 className="text-xl font-bold text-slate-700">
                  No results found
                </h3>
              </div>
            )}

            {/* no search query yet */}
            {!searchQuery.length && !movies.length && (
              <div className="flex justify-center items-center flex-col">
                <div className="w-44 h-44 rounded-full overflow-hidden select-none pointer-events-none">
                  <img
                    className="w-full h-full object-contain mix-blend-normal"
                    src="https://cdn.dribbble.com/userupload/6516616/file/original-9d21aa37c60b1789d0a075b2cd7c2672.png?compress=1&resize=752x564"
                    alt=""
                  />
                </div>
                <h3 className="text-md font-bold text-slate-700">
                  Search for something
                </h3>
              </div>
            )}

            {/* Results */}
            {!!movies.length &&
              !loading &&
              movies.map((movie, index) => {
                // check for the movie poster
                if (movie.poster_path)
                  return (
                    <div key={movie.id}>
                      <div
                        onClick={() => {
                          handleModalContent(movie);
                        }}
                        className="bg-slate-200 duration-300 hover:scale-105 cursor-pointer rounded-xl shadow-md max-w-[120px] m-2"
                      >
                        <div className="flex w-[120px] h-[180px] justify-center items-center">
                          <img
                            src={img_base_url + movie.poster_path}
                            alt={movie.name}
                            className="rounded-xl shadow-lg w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2 max-w-full">
                          <h3 className="text-xs max-w-full min-h-[30px] line-clamp-2 font-bold text-slate-700">
                            {movie.name || `Movie ${index + 1}`}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
              })}
          </div>
        </div>
      </div>
      {/* Modal */}
      {openedModal && (
        <Modal toggleModal={toggleModal} content={modalContent} />
      )}
    </>
  );
}

export default App;
