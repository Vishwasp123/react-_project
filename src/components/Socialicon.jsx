import React, { useEffect, useRef } from "react";
import { google_login } from "../services/auth_api";
import { useNavigate } from "react-router-dom";

function Socialicon() {
  const navigate = useNavigate();
  const googleBtnRef = useRef(null);

  const handleCredentialsResponse = async (response) => {
    try {
      const idToken = response.credential;
      await google_login(idToken);
      navigate("/talk_space");
    } catch {
      alert("Google login failed. Please try again.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.google && googleBtnRef.current) {
        clearInterval(interval);

        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleCredentialsResponse,
        });

        window.google.accounts.id.renderButton(googleBtnRef.current, {
          type: "icon",          // only icon
          theme: "filled_black", // visible on light background
          size: "large",
          width: 40,
        });
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4">
      {/* Google icon-only official button */}
      <div
        ref={googleBtnRef}
        className="w-10 h-10 flex items-center justify-center cursor-pointer"
      />

      {/* Other icons (UI only) */}
      <div className="w-9 h-9 bg-gray-100 flex items-center justify-center cursor-pointer">
        <img
          src="https://www.freeiconspng.com/uploads/apple-icon-4.png"
          alt="Apple"
          className="w-10 h-auto"
        />
      </div>

      <div className="w-9 h-9 bg-gray-100 flex items-center justify-center cursor-pointer">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/042/148/655/small/facebook-logo-facebook-social-media-icon-free-png.png"
          alt="Facebook"
          className="w-10 h-auto"
        />
      </div>
    </div>
  );
}

export default Socialicon;
