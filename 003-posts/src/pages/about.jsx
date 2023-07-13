import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/?about=true");
  }, [navigate]);
  
  return (
    <div className="min-h-[100svh] dark:bg-slate-800 flex justify-center items-center text-5xl font-mono font-extrabold text-slate-500">
      <h1>About</h1>
    </div>
  );
}
