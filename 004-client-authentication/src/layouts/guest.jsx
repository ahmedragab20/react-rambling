import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function GuestLayout() {
  const navigate = useNavigate();
  const route = location.pathname;
  const authPages = ["login"];

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (route.includes("auth") && !authPages.includes(route.split("/")[2])) {
      navigate("/auth/login", { replace: true });

      return;
    }

    if (!!user) {
      navigate("/", { replace: true });
    }
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <Outlet />
      </div>
    </section>
  );
}
