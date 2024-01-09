import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-10/12 mx-auto mt-20 flex items-center justify-between text-lg relative">
      <Link to="/" className="relative">
        <span
          className="myName relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          imamovic.dev
        </span>
        {location.pathname !== "/" && (
          <div
            className={`absolute pl-3	space-x-4 text-white flex ${
              isHovered ? "opacity-100" : "opacity-0"
            } goHome`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>go to home</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              className="mt-0.5 md:mt-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
            </svg>
          </div>
        )}
      </Link>
      <nav>
        <ul className="flex items-center justify-around space-x-2 lg:space-x-16">
          <li>
            {location.pathname === "/about" && (
              <div className="absolute left-1/2 top-5 -translate-x-1/2 rotate-180 xs:top-11 md:top-2.5 md:-left-4 md:rotate-0">
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 166 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    color: "#DE5055",
                  }}
                >
                  <path
                    d="M165.992 3.30909C165.992 13.5522 166.366 20.3859 162.13 29.8493C157.895 39.3127 151.688 47.9114 143.862 55.1543C136.037 62.3973 133 65.7454 116.522 72.0626C106.298 75.9825 105.5 78 84.2726 78C73.2058 78 67.7244 75.9825 57.5 72.0626C47.2756 68.1427 32.5083 62.3973 24.6829 55.1543C16.8574 47.9114 10.65 39.3127 6.41487 29.8493C2.17978 20.3859 -9.67494e-07 10.2431 0 0L81.7189 3.30909H165.992Z"
                    fill="#DE5055"
                  />
                </svg>
              </div>
            )}
            <a className="link" href="/">
              <Link
                to="/about"
                className={location.pathname === "/about" ? "activeLink" : ""}
              >
                about
              </Link>
            </a>
            <div className="absolute more  bottom-full -left-2 flex flex-row w-[150px] items-center space-x-2 text-xs transition duration-300 ease-in-out md:group-hover:flex">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fillRule="nonzero"
                    d="M17.841 15.659l.176.177.178-.177a2.25 2.25 0 0 1 3.182 3.182l-3.36 3.359-3.358-3.359a2.25 2.25 0 0 1 3.182-3.182zM12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 7.75-7.996L12 14zm0-13c3.315 0 6 2.685 6 6a5.998 5.998 0 0 1-5.775 5.996L12 13c-3.315 0-6-2.685-6-6a5.998 5.998 0 0 1 5.775-5.996L12 1zm0 2C9.79 3 8 4.79 8 7s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
                  ></path>
                </g>
              </svg>
              <span>more of me</span>
            </div>
          </li>
          <li>
            {location.pathname === "/projects" && (
              <div className="absolute left-1/2 top-5 -translate-x-1/2 rotate-180 xs:top-11 md:top-2.5 md:-left-4 md:rotate-0">
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 166 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    color: "#DE5055",
                  }}
                >
                  <path
                    d="M165.992 3.30909C165.992 13.5522 166.366 20.3859 162.13 29.8493C157.895 39.3127 151.688 47.9114 143.862 55.1543C136.037 62.3973 133 65.7454 116.522 72.0626C106.298 75.9825 105.5 78 84.2726 78C73.2058 78 67.7244 75.9825 57.5 72.0626C47.2756 68.1427 32.5083 62.3973 24.6829 55.1543C16.8574 47.9114 10.65 39.3127 6.41487 29.8493C2.17978 20.3859 -9.67494e-07 10.2431 0 0L81.7189 3.30909H165.992Z"
                    fill="#DE5055"
                  />
                </svg>
              </div>
            )}
            <a className="link" href="/">
              <Link
                to="/projects"
                className={
                  location.pathname === "/projects" ? "activeLink" : ""
                }
              >
                projects
              </Link>
            </a>
            <div className="absolute more  bottom-full -left-2 flex flex-row w-[150px] items-center space-x-2 text-xs transition duration-300 ease-in-out md:group-hover:flex">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z"></path>
                </g>
              </svg>
              <span>my work</span>
            </div>
          </li>
          <li>
            {location.pathname === "/contact" && (
              <div className="absolute left-1/2 top-5 -translate-x-1/2 rotate-180 xs:top-11 md:top-2.5 md:-left-4 md:rotate-0">
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 166 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    color: "#DE5055",
                  }}
                >
                  <path
                    d="M165.992 3.30909C165.992 13.5522 166.366 20.3859 162.13 29.8493C157.895 39.3127 151.688 47.9114 143.862 55.1543C136.037 62.3973 133 65.7454 116.522 72.0626C106.298 75.9825 105.5 78 84.2726 78C73.2058 78 67.7244 75.9825 57.5 72.0626C47.2756 68.1427 32.5083 62.3973 24.6829 55.1543C16.8574 47.9114 10.65 39.3127 6.41487 29.8493C2.17978 20.3859 -9.67494e-07 10.2431 0 0L81.7189 3.30909H165.992Z"
                    fill="#DE5055"
                  />
                </svg>
              </div>
            )}
            <a className="link" href="/">
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "activeLink" : ""}
              >
                contact
              </Link>
            </a>
            <div className="absolute more  bottom-full -left-2 flex w-[150px] items-center space-x-2 text-xs transition duration-300 ease-in-out md:group-hover:flex">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z"></path>
                </g>
              </svg>
              <span>say hi :{`)`}</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
