import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "ahmed.ragab@mail.com",
    password: "123",
    remember: false,
  });
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const rememberInput = useRef(null);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password) return;

    localStorage.setItem("user", JSON.stringify({
      ...formData,
      name: "Ahmed Ragab"
    }))

    navigate("/", { replace: true });
  };

  useEffect(() => {
    emailInput.current.value = formData.email;
    passwordInput.current.value = formData.password;
    rememberInput.current.checked = formData.remember;
  }, []);

  return (
    <div>
      <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Sign in to the app
        </h2>
        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();

            handleSubmit();
          }}
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
              onInput={(e) => handleChange("email", e.target.value)}
              ref={emailInput}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onInput={(e) => handleChange("password", e.target.value)}
              ref={passwordInput}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                name="remember"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => handleChange("remember", e.target.checked)}
                ref={rememberInput}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="font-medium text-gray-500 dark:text-gray-400"
              >
                Remember this device
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
        </form>
      </div>
    </div>
  );
}
