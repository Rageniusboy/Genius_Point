import { useState, useEffect } from "react";
import { X } from "lucide-react";
import addPopupImg from "../assets/add-popup.png";

export default function AddPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000); // 0.5 sec delay after load

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4">
      <div className="relative max-w-4xl w-full">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        {/* Banner Image */}
        <img
          src={addPopupImg}
          alt="Topper Results"
          className="max-h-[90vh] w-auto mx-auto rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
}
