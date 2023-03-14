const Home = () => {
  return (
    <div className="hero">
      <div class="text-bg-dark border-0">
        <img
          src="../assets/hero.jpg"
          class="card-img"
          alt="hero background image"
          // height="550px"
          loading="lazy"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bold mb-1">NEW ITEMS ARRIVAL</h5>
            <p class="card-text lead fs-2">Chechout all the new products!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
