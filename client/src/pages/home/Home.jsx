import "./Home.css";
import { useEffect, useRef } from "react";

const Home = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const letters = title.textContent.split("");
    let index = 0;

    const interval = setInterval(() => {
      if (index >= letters.length) {
        index = 0;
      }

      title.innerHTML = letters
        .map(
          (letter, i) =>
            `<span style="color: ${
              i === index ? "var(--primary-color)" : "white"
            }">${letter}</span>`
        )
        .join("");

      index++;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div class="text-bg-dark border-0">
        <img
          src="../assets/hero.jpg"
          class="card-img"
          alt="hero background"
          // height="550px"
          loading="lazy"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bold mb-1" ref={titleRef}>
              NEW ITEMS ARRIVAL
            </h5>
            <p class="card-text lead fs-2">Chechout all the new products!</p>
            <button>Products</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
