import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-10/12 mx-auto mt-20 flex items-center justify-between text-lg">
    <span>imamovic.dev</span>
    <nav>
      <ul className="flex items-center justify-around space-x-16">
        <li>
          <Link to="/about">
          <a className="link" href="/">
            about
          </a>
          </Link>
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
          <a className="link" href="/">
            projects
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
          <a className="link" href="/">
            contact
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
