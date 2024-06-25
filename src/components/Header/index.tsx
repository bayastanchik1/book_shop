import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [headValue, setHeadValue] = useState("");
  const nav = useNavigate();

  const [sign, setSign] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleClickAdmin() {
    if (email === "aza@gmail.com" && pass === "123") {
      nav("/admin");
      setSign(false);
    } else {
      alert("Повторите попытку");
    }
  }

  return (
    <div id="header">
      {sign ? (
        <div className="">
          <div className="flex flex-col items-center justify-center h-screen dark">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
              <input
                onChange={(e: any) => setEmail(e.target.value)}
                placeholder="Email address"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              
              />
              <input
                onChange={(e: any) => setPass(e.target.value)}
                placeholder="Password"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="password"
              />
              <div className="flex items-center justify-between flex-wrap">
                <label className="text-sm text-gray-200 cursor-pointer">
                  <input className="mr-2" id="remember-me" type="checkbox" />
                  Remember me
                </label>
                <a
                  className="text-sm text-blue-500 hover:underline mb-0.5"
                  href="#"
                >
                  Forgot password?
                </a>
                <p className="text-white mt-4">
                  {" "}
                  Don't have an account?{" "}
                  <a
                    className="text-sm text-blue-500 -200 hover:underline mt-4"
                    href="#"
                  >
                    Signup
                  </a>
                </p>
              </div>
              <button
                onClick={handleClickAdmin}
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="header">
            <NavLink to={"/"} className="text-3xl font-bold cursor-pointer">
              BOOKShop
            </NavLink>
            <div className="icon">
              <div className="searchBox">
                <input
                  onChange={(e: any) => setHeadValue(e.target.value)}
                  className="searchInput"
                  type="text"
                  name=""
                  placeholder="Search Book"
                />
                <button
                  onClick={() => nav(`/search/${headValue}`)}
                  className="searchButton flex items-center justify-center"
                >
                  <svg
                    className="ml-[9px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2_17)">
                      <g filter="url(#filter0_d_2_17)">
                        <path
                          d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          shape-rendering="crispEdges"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_2_17"
                        x="-0.418549"
                        y="3.70435"
                        width="29.7139"
                        height="29.7139"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        ></feColorMatrix>
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2_17"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2_17"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <clipPath id="clip0_2_17">
                        <rect
                          width="28.0702"
                          height="28.0702"
                          fill="white"
                          transform="translate(0.403503 0.526367)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>

              <Link to={"/save"}>
                <div className="bag">
                  <ShoppingCartIcon />
                  <h1>Корзина</h1>
                </div>
              </Link>

              <div
                onClick={() => {
                  setSign(true);
                }}
                className="bag flex flex-col items-center justify-center"
              >
                {/* <NavLink to={"/admin"}> */}
                <span>
                  <AccountCircleIcon />
                </span>
                <span className="mt-1">Aдмин</span>
                {/* </NavLink> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
