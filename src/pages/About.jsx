import { useEffect } from "react";
import Header from "../Header";

const About = () => {

  useEffect(() => {
    const shapes = document.querySelectorAll(".shape");

    // Créez un objet contenant les facteurs de réduction pour chaque forme
    const reductionFactors = {
      shape1: 0.02,
      shape2: 0.05,
      shape3: 0.02,
      shape4: 0.05,
      shape5: 0.02,
      shape6: 0.05,
      shape7: 0.02,
      shape8: 0.05,
      shape9: 0.02,
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
  }, []); // Le tableau vide [] signifie que cette fonction d'effet ne s'exécutera qu'une fois après le montage du composant

  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className=" w-10/12  mx-auto flex-1 items-center  mt-16 space-y-6">
        <h2 className="text-2xl font-extralight uppercase tracking-max">
          About
        </h2>

        <h2 className="whitespace-pre-line dark:text-blue text-md xs:text-2xl md:text-6xl font-extrabold">
          a frontend developer with affinity for design, intuitive user
          experience and pixel-perfect user interfaces
        </h2>

        <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
          <p className="w-full whitespace-pre-line md:w-1/2">
            I am a frontend-focused software engineer with 6+ years of
            professional development experience, holding a degree of BS Computer
            Science from the University of the Philippines.
            <br /> I have been employed by leading tech companies and emerging
            amazing startup companies throughout my career thus far.
          </p>
          <div className="w-full md:w-1/2">
            Currently, I am a Senior Software Engineer,{" "}
            <span className="font-bold">focusing on the frontend</span>. On a
            daily basis, I work with{" "}
            <div className="contents md:hidden">
              <span>React, </span>
              <span>Redux Toolkit, </span>
              <span>TypeScript, </span>
              <span>Tailwind CSS, </span>
              <span>Firebase and </span>
              <span>Storybook, </span>
            </div>
            <div className=" md:contents">
              <div className="inline-flex items-center justify-center rounded-3xl  py-0.5 px-3 text-sm tracking-wider text-blue  space-x-2 bg-red-400/50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                </svg>
                <div className="mt-0.5">React</div>
              </div>
              ,{" "}
              <div className="inline-flex items-center justify-center rounded-3xl  py-0.5 px-3 text-sm tracking-wider text-blue space-x-2 bg-red-400/50 ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"></path>
                </svg>
                <div className="mt-0.5">Redux Toolkit</div>
              </div>
              ,{" "}
              <div className="inline-flex items-center justify-center rounded-3xl  py-0.5 px-3 text-sm tracking-wider text-blue space-x-2 bg-red-400/50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                </svg>
                <div className="mt-0.5">TypeScript</div>
              </div>
              ,{" "}
              <div className="inline-flex items-center justify-center rounded-3xl  py-0.5 px-3 text-sm tracking-wider text-blue space-x-2 bg-red-400/50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                </svg>
                <div className="mt-0.5">Tailwind CSS</div>
              </div>
              ,{" "}
              <div className="inline-flex items-center justify-center rounded-3xl  py-0.5 px-3 text-sm tracking-wider text-blue space-x-2 bg-red-400/50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"></path>
                </svg>
                <div className="mt-0.5">Firebase</div>
              </div>{" "}
              and{" "}
              <div className="inline-flex items-center justify-center rounded-3xl  py-0.5 px-3 text-sm tracking-wider text-blue  space-x-2 bg-red-400/50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"></path>
                </svg>
                <div className="mt-0.5">Storybook</div>
              </div>
              ,{" "}
            </div>{" "}
            among others, in building and maintaining web applications and
            design systems —
            <span className="font-bold">all built from the ground up</span>.
          </div>
        </div>

        <div
          className="shape absolute "
          id="shape1"
          data-lag="1"
          style={{ bottom: "8%", left: "38%", width: "8%", rotate: "0deg" }}
        >
          <svg
            width="100%"
            viewBox="0 0 181 167"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(58deg)" }}
          >
            <path
              d="M146.5 0.5C169.5 9 180.547 31.887 180.547 60C180.547 88.1129 169.379 115.074 149.5 134.953C129.621 154.832 102.66 166.5 74.5467 166.5C46.4337 166.5 13.5 161.5 0.5 138L74.5467 60L146.5 0.5Z"
              fill="#DF7410"
            ></path>
          </svg>
        </div>
        <div
          className="shape absolute "
          id="shape2"
          data-lag="3"
          style={{ bottom: "8%", left: "35%", width: "9%", rotate: "0deg" }}
        >
          <svg
            width="100%"
            viewBox="0 0 121 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(20deg)" }}
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
          className="shape absolute "
          id="shape3"
          data-lag="1"
          style={{ top: "21%", left: "5%", width: "10%", rotate: "0deg" }}
        >
          <svg
            width="100%"
            viewBox="0 0 166 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(-40deg)" }}
          >
            <path
              d="M165.992 3.30909C165.992 13.5522 166.366 20.3859 162.13 29.8493C157.895 39.3127 151.688 47.9114 143.862 55.1543C136.037 62.3973 133 65.7454 116.522 72.0626C106.298 75.9825 105.5 78 84.2726 78C73.2058 78 67.7244 75.9825 57.5 72.0626C47.2756 68.1427 32.5083 62.3973 24.6829 55.1543C16.8574 47.9114 10.65 39.3127 6.41487 29.8493C2.17978 20.3859 -9.67494e-07 10.2431 0 0L40.5 3.30909H81.7189L125.5 4.5L165.992 3.30909Z"
              fill="#DE5055"
            ></path>
          </svg>
        </div>
        <div
          className="shape absolute "
          id="shape4"
          data-lag="3"
          style={{ top: "20%", left: "6%", width: "10%", rotate: "0deg" }}
        >
          <svg
            width="100%"
            viewBox="0 0 128 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(-40deg)" }}
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
          className="shape absolute "
          id="shape5"
          data-lag="1"
          style={{ top: "24%", right: "10%", width: "8%", rotate: "0deg" }}
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
          className="shape absolute "
          id="shape6"
          data-lag="4"
          style={{ bottom: "9%", right: "8%", width: "9%", rotate: "0deg" }}
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
          className="shape absolute "
          id="shape7"
          data-lag="1"
          style={{ top: "16%", right: "40%", width: "8%", rotate: "0deg" }}
        >
          <svg
            width="100%"
            viewBox="0 0 136 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M136 65C136 102.555 97.0554 134.5 59.5 134.5C21.9446 134.5 0 102.555 0 65C0 27.4446 39.4446 0 77 0C114.555 0 136 27.4446 136 65Z"
              fill="#7C528C"
            ></path>
          </svg>
        </div>
        <div
          className="shape absolute "
          id="shape8"
          data-lag="4"
          style={{ top: "14%", right: "40%", width: "9%", rotate: "0deg" }}
        >
          <svg
            width="100%"
            viewBox="0 0 121 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(180deg)" }}
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
          className="shape absolute "
          id="shape9"
          data-lag="1"
          style={{ bottom: "10%", left: "8%", width: "8%", rotate: "0deg" }}
        >
          <svg
            width="100%"
            viewBox="0 0 166 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(0deg)" }}
          >
            <path
              d="M165.992 3.30909C165.992 13.5522 166.366 20.3859 162.13 29.8493C157.895 39.3127 151.688 47.9114 143.862 55.1543C136.037 62.3973 133 65.7454 116.522 72.0626C106.298 75.9825 105.5 78 84.2726 78C73.2058 78 67.7244 75.9825 57.5 72.0626C47.2756 68.1427 32.5083 62.3973 24.6829 55.1543C16.8574 47.9114 10.65 39.3127 6.41487 29.8493C2.17978 20.3859 -9.67494e-07 10.2431 0 0L40.5 3.30909H81.7189L125.5 4.5L165.992 3.30909Z"
              fill="#2F4858"
            ></path>
          </svg>
        </div>
        <div
          className="shape absolute "
          id="shape10"
          data-lag="4"
          style={{ bottom: "10%", left: "8%", width: "6%", rotate: "0deg" }}
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
        <div
          className="shape absolute "
          id="shape11"
          data-lag="4"
          style={{ top: "44%", right: "30%", width: "13%", rotate: "0deg" }}
        >
          <svg
            width="100%"
            viewBox="0 0 121 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(-32deg)" }}
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
      </div>
    </div>
  );
};

export default About;
