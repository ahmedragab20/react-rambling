import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
