import { useEffect } from "react";
import Header from "../Header";

const Home = () => {

  useEffect(() => {
    const shapes = document.querySelectorAll(".shape");

    // Créez un objet contenant les facteurs de réduction pour chaque forme
    const reductionFactors = {
      shape1: 0.05,
      shape2: 0.02,
      shape3: 0.05,
      shape4: 0.02,
      shape5: 0.05,
      shape6: 0.05,
      shape7: 0.05,
      shape8: 0.02,
      shape9: 0.05,
      shape10: 0.02,
      shape11: 0.05,
    };

    // Ajoutez un écouteur d'événement "mousemove" à la fenêtre
    window.addEventListener("mousemove", (event) => {
      // Obtenez la position de la souris
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Utilisez les coordonnées de la souris pour déplacer les formes avec réduction différente
      shapes.forEach((shape) => {
        // Obtenez l'ID de la forme à partir de son attribut "id"
        const shapeId = shape.id;

        // Vérifiez si un facteur de réduction existe pour cette forme
        if (reductionFactors.hasOwnProperty(shapeId)) {
          // Calculez la nouvelle position avec réduction en fonction de la souris et du facteur de réduction
          const reductionFactor = reductionFactors[shapeId];
          const offsetX = (mouseX - window.innerWidth / 2) * reductionFactor;
          const offsetY = (mouseY - window.innerHeight / 2) * reductionFactor;

          // Appliquez la nouvelle position aux formes
          shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
      });
    });
  }, []); // Le tableau vide [] signifie que cette fonction d'effet ne s'exécutera qu'une fois après le montage du composant.

  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className=" w-10/12 text-center mx-auto flex-1 items-center w-full mt-36 space-y-6">
        <h2 className="text-xl font-extralight tracking-max ">
          <span className="font-bold">HELLO!</span> MY NAME IS
        </h2>
        <h2 className="mt-4 text-center text-8xl font-extrabold whitespace-pre-line">
          <div className="name">
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110">
              L
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110">
              i
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110">
              a
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110">
              m
            </span>
          </div>

          <div className="name">
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110">
              I
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110">
              m
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110">
              a
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110">
              m
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110">
              o
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110">
              v
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110">
              i
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110">
              ć
            </span>
          </div>
        </h2>
        <p className="w-3/12 mx-auto">
          I am a frontend developer who loves to work on the web. I am
          passionate about building simple and elegant solutions to complex
          problems.
        </p>
      </div>
      <div
        className="shape "
        id="shape1"
        style={{ top: "41%", left: "22%", width: "13%" }}
      >
        <svg
          width="100%"
          viewBox="0 0 128 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_237_213" fill="white">
            <path d="M128 0C128 8.4046 126.345 16.7269 123.128 24.4917C119.912 32.2566 115.198 39.3119 109.255 45.2548C103.312 51.1978 96.2566 55.912 88.4917 59.1283C80.7269 62.3446 72.4046 64 64 64C55.5954 64 47.2731 62.3446 39.5083 59.1283C31.7434 55.912 24.6881 51.1978 18.7452 45.2548C12.8022 39.3119 8.08801 32.2566 4.87171 24.4917C1.65541 16.7269 -7.34753e-07 8.40459 0 -5.59506e-06L20.1156 -3.8365e-06C20.1156 5.76298 21.2507 11.4695 23.4561 16.7938C25.6615 22.1181 28.894 26.9559 32.969 31.031C37.0441 35.106 41.8819 38.3385 47.2062 40.5439C52.5305 42.7493 58.237 43.8844 64 43.8844C69.763 43.8844 75.4695 42.7493 80.7938 40.5439C86.1181 38.3385 90.9559 35.106 95.031 31.031C99.106 26.9559 102.339 22.1181 104.544 16.7938C106.749 11.4695 107.884 5.76298 107.884 0H128Z"></path>
          </mask>
          <path
            d="M128 0C128 8.4046 126.345 16.7269 123.128 24.4917C119.912 32.2566 115.198 39.3119 109.255 45.2548C103.312 51.1978 96.2566 55.912 88.4917 59.1283C80.7269 62.3446 72.4046 64 64 64C55.5954 64 47.2731 62.3446 39.5083 59.1283C31.7434 55.912 24.6881 51.1978 18.7452 45.2548C12.8022 39.3119 8.08801 32.2566 4.87171 24.4917C1.65541 16.7269 -7.34753e-07 8.40459 0 -5.59506e-06L20.1156 -3.8365e-06C20.1156 5.76298 21.2507 11.4695 23.4561 16.7938C25.6615 22.1181 28.894 26.9559 32.969 31.031C37.0441 35.106 41.8819 38.3385 47.2062 40.5439C52.5305 42.7493 58.237 43.8844 64 43.8844C69.763 43.8844 75.4695 42.7493 80.7938 40.5439C86.1181 38.3385 90.9559 35.106 95.031 31.031C99.106 26.9559 102.339 22.1181 104.544 16.7938C106.749 11.4695 107.884 5.76298 107.884 0H128Z"
            stroke="#D9D9D9"
            strokeWidth="2"
            strokeDasharray="6 6"
            mask="url(#path-1-inside-1_237_213)"
          ></path>
        </svg>
      </div>

      <div
        className="shape "
        id="shape2"
        style={{ top: "42%", left: "20%", width: "13%" }}
      >
        <svg
          width="100%"
          viewBox="0 0 166 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M165.992 3.30909C165.992 13.5522 166.366 20.3859 162.13 29.8493C157.895 39.3127 151.688 47.9114 143.862 55.1543C136.037 62.3973 133 65.7454 116.522 72.0626C106.298 75.9825 105.5 78 84.2726 78C73.2058 78 67.7244 75.9825 57.5 72.0626C47.2756 68.1427 32.5083 62.3973 24.6829 55.1543C16.8574 47.9114 10.65 39.3127 6.41487 29.8493C2.17978 20.3859 -9.67494e-07 10.2431 0 0L40.5 3.30909H81.7189L125.5 4.5L165.992 3.30909Z"
            fill="#DE5055"
          ></path>
        </svg>
      </div>

      <div
        className="shape "
        id="shape3"
        style={{ top: "72%", left: "18%", width: "9%", rotate: "0deg" }}
      >
        <svg
          width="100%"
          viewBox="0 0 121 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(40deg)" }}
        >
          <mask id="path-1-inside-1_237_291" fill="white">
            <path d="M121 0.5C121 8.44497 119.435 16.3121 116.395 23.6523C113.354 30.9925 108.898 37.662 103.28 43.28C97.662 48.8979 90.9925 53.3543 83.6523 56.3947C76.3121 59.4351 68.445 61 60.5 61C52.555 61 44.6878 59.4351 37.3476 56.3947C30.0075 53.3543 23.338 48.8979 17.72 43.28C12.1021 37.662 7.6457 30.9925 4.60529 23.6523C1.56488 16.3121 -6.94571e-07 8.44497 0 0.499995L60.5 0.5H121Z"></path>
          </mask>
          <path
            d="M121 0.5C121 8.44497 119.435 16.3121 116.395 23.6523C113.354 30.9925 108.898 37.662 103.28 43.28C97.662 48.8979 90.9925 53.3543 83.6523 56.3947C76.3121 59.4351 68.445 61 60.5 61C52.555 61 44.6878 59.4351 37.3476 56.3947C30.0075 53.3543 23.338 48.8979 17.72 43.28C12.1021 37.662 7.6457 30.9925 4.60529 23.6523C1.56488 16.3121 -6.94571e-07 8.44497 0 0.499995L60.5 0.5H121Z"
            stroke="#B84A7E"
            strokeWidth="2"
            strokeDasharray="2 2"
            mask="url(#path-1-inside-1_237_291)"
          ></path>
        </svg>
      </div>

      <div
        className="shape "
        id="shape4"
        style={{ top: "79%", left: "40%", width: "9%", rotate: "0deg" }}
      >
        <svg
          width="100%"
          viewBox="0 0 181 167"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M146.5 0.5C169.5 9 180.547 31.887 180.547 60C180.547 88.1129 169.379 115.074 149.5 134.953C129.621 154.832 102.66 166.5 74.5467 166.5C46.4337 166.5 13.5 161.5 0.5 138L74.5467 60L146.5 0.5Z"
            fill="#7C528C"
          ></path>
        </svg>
      </div>

      <div
        className="shape "
        id="shape5"
        style={{ top: "84%", left: "44%", width: "9%", rotate: "0deg" }}
      >
        <svg
          width="100%"
          viewBox="0 0 121 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(40deg)" }}
        >
          <mask id="path-1-inside-1_237_291" fill="white">
            <path d="M121 0.5C121 8.44497 119.435 16.3121 116.395 23.6523C113.354 30.9925 108.898 37.662 103.28 43.28C97.662 48.8979 90.9925 53.3543 83.6523 56.3947C76.3121 59.4351 68.445 61 60.5 61C52.555 61 44.6878 59.4351 37.3476 56.3947C30.0075 53.3543 23.338 48.8979 17.72 43.28C12.1021 37.662 7.6457 30.9925 4.60529 23.6523C1.56488 16.3121 -6.94571e-07 8.44497 0 0.499995L60.5 0.5H121Z"></path>
          </mask>
          <path
            d="M121 0.5C121 8.44497 119.435 16.3121 116.395 23.6523C113.354 30.9925 108.898 37.662 103.28 43.28C97.662 48.8979 90.9925 53.3543 83.6523 56.3947C76.3121 59.4351 68.445 61 60.5 61C52.555 61 44.6878 59.4351 37.3476 56.3947C30.0075 53.3543 23.338 48.8979 17.72 43.28C12.1021 37.662 7.6457 30.9925 4.60529 23.6523C1.56488 16.3121 -6.94571e-07 8.44497 0 0.499995L60.5 0.5H121Z"
            stroke="#7C528C"
            strokeWidth="2"
            strokeDasharray="2 2"
            mask="url(#path-1-inside-1_237_291)"
          ></path>
        </svg>
      </div>

      <div
        className="shape "
        id="shape6"
        style={{ top: "25%", left: "44%", width: "7%", rotate: "0deg" }}
      >
        <svg
          width="100%"
          viewBox="0 0 128 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.437924 46.9982C6.08165 59.4725 15.4738 63.1904 25.4617 72.5554C35.4495 81.9204 47.6503 90.1823 60.4617 95.0123C73.2731 99.8422 82.4571 103.211 96.1417 102.771C109.826 102.331 114.79 95.1991 127.264 89.5554L83.9617 0.0554054L0.437924 46.9982Z"
            fill="#B84A7E"
          ></path>
        </svg>
      </div>

      <div
        className="shape "
        id="shape7"
        style={{ top: "50%", left: "52%", width: "13%", rotate: "0deg" }}
      >
        <svg
          width="100%"
          viewBox="0 0 248 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="124"
            cy="124"
            r="123.5"
            stroke="#DE5055"
            strokeDasharray="2 2"
          ></circle>
        </svg>
      </div>

      <div
        className="shape "
        id="shape8"
        style={{ top: "47%", left: "69%", width: "9%", rotate: "0deg" }}
      >
        <svg
          width="100%"
          viewBox="0 0 136 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M136 65C136 102.555 97.0554 134.5 59.5 134.5C21.9446 134.5 0 102.555 0 65C0 27.4446 39.4446 0 77 0C114.555 0 136 27.4446 136 65Z"
            fill="#DF7410"
          ></path>
        </svg>
      </div>

      <div
        className="shape "
        id="shape9"
        style={{ top: "54%", left: "66%", width: "11%", rotate: "0deg" }}
      >
        <svg
          width="100%"
          viewBox="0 0 121 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(40deg)" }}
        >
          <mask id="path-1-inside-1_237_291" fill="white">
            <path d="M121 0.5C121 8.44497 119.435 16.3121 116.395 23.6523C113.354 30.9925 108.898 37.662 103.28 43.28C97.662 48.8979 90.9925 53.3543 83.6523 56.3947C76.3121 59.4351 68.445 61 60.5 61C52.555 61 44.6878 59.4351 37.3476 56.3947C30.0075 53.3543 23.338 48.8979 17.72 43.28C12.1021 37.662 7.6457 30.9925 4.60529 23.6523C1.56488 16.3121 -6.94571e-07 8.44497 0 0.499995L60.5 0.5H121Z"></path>
          </mask>
          <path
            d="M121 0.5C121 8.44497 119.435 16.3121 116.395 23.6523C113.354 30.9925 108.898 37.662 103.28 43.28C97.662 48.8979 90.9925 53.3543 83.6523 56.3947C76.3121 59.4351 68.445 61 60.5 61C52.555 61 44.6878 59.4351 37.3476 56.3947C30.0075 53.3543 23.338 48.8979 17.72 43.28C12.1021 37.662 7.6457 30.9925 4.60529 23.6523C1.56488 16.3121 -6.94571e-07 8.44497 0 0.499995L60.5 0.5H121Z"
            stroke="#DF7410"
            strokeWidth="2"
            strokeDasharray="2 2"
            mask="url(#path-1-inside-1_237_291)"
          ></path>
        </svg>
      </div>

      <div
        className="shape "
        id="shape10"
        style={{ top: "75%", left: "66%", width: "11%", rotate: "0deg" }}
      >
        <svg
          width="100%"
          viewBox="0 0 166 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M165.992 3.30909C165.992 13.5522 166.366 20.3859 162.13 29.8493C157.895 39.3127 151.688 47.9114 143.862 55.1543C136.037 62.3973 133 65.7454 116.522 72.0626C106.298 75.9825 105.5 78 84.2726 78C73.2058 78 67.7244 75.9825 57.5 72.0626C47.2756 68.1427 32.5083 62.3973 24.6829 55.1543C16.8574 47.9114 10.65 39.3127 6.41487 29.8493C2.17978 20.3859 -9.67494e-07 10.2431 0 0L40.5 3.30909H81.7189L125.5 4.5L165.992 3.30909Z"
            fill="#2F4858"
          ></path>
        </svg>
      </div>

      <div
        className="shape "
        id="shape11"
        style={{ top: "75%", left: "60%", width: "7%", rotate: "0deg" }}
      >
        <svg
          width="100%"
          viewBox="0 0 248 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="124"
            cy="124"
            r="123.5"
            stroke="#2F4858"
            strokeDasharray="2 2"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Home;
