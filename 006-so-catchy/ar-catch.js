import catchLib from "ar-catch";

const { $catch, useCache } = catchLib;

const fetch = $catch();
const cache = useCache("PER-SESSION");
(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    customOptions: {
      method: "GET",
      cache: "PER-SESSION",
    },
  });

  console.log(res);

  console.log(cache.getCachedKeys());
})();
