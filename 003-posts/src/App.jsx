import { useEffect, useState } from "react";

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
      console.log("cleanup");
      abortController.abort();
      setLoading(false);
    };
  }, [searchQuery]);
  return (
    <>
      <div className="px-2 py-10 bg-slate-100 h-[100svh] overflow-auto">
        <div className="flex justify-center items-center">
          <h2 className=" text-4xl font-extrabold text-slate-700">Search</h2>
        </div>
        <div className="my-5">
          <div className="flex justify-center items-center">
            <input
              type="search"
              className="w-11/12 p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        {/* movies */}
        <div>
          <div className="flex justify-center items-center flex-wrap">
            {loading && (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
              </div>
            )}

            {!!movies.length &&
              !loading &&
              movies.map((movie, index) => {
                // check for the movie poster
                if (movie.poster_path)
                  return (
                    <div
                      key={movie.id}
                      className="bg-slate-200 rounded-xl shadow-md max-w-[120px] m-2"
                    >
                      <div className="flex justify-center items-center">
                        <img
                          src={img_base_url + movie.poster_path}
                          alt={movie.name}
                          className="rounded-xl shadow-lg"
                        />
                      </div>
                      <div className="p-2 max-w-full">
                        <h3 className="text-xs max-w-full min-h-[30px] line-clamp-2 font-bold text-slate-700">
                          {movie.name || `Movie ${index + 1}`}
                        </h3>
                      </div>
                    </div>
                  );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
