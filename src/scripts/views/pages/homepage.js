const Homepage = {
  async render() {
    return `
    <div class="container">
    <div class="hero_title">
      <h1>Bantu Pulihkan Bumi dengan Mengelola Sampah bersama Tracycle</h1>
      <div class="hero_subtitle">
        Mari bergabunglah bersama kami dalam upaya mengelola sampah. Jadikan lingkunganmu nyaman dan bebas dari sampah. Kami
        siap memberikan dukungan dalam pengelolaan sampah di sekitarmu!
      </div>
      <button class="exchange_button">Tukarkan Sampah</button>
    </div>
    <img class ="image_hero" src="./images/amico.png" alt="Hero Image" />
  </div>
  <div class="deskripsi_container">
    <div class="nama">
      <h1>Tracycle</h1>
    </div>
    <div class="deskripsi_paragraf">
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </div>
  </div>
  <div class="layanan_container">
    <div class="layanan_title">
      <h1>Layanan Yang Kami Sediakan</h1>
    </div>
    <div class="sub_layanan">
      <div class="=layanan">
        <div class="image_layanan">
          <img src="./images/bank_sampah.jpeg" alt="Layanan Image 1" />
        </div>
        <div class="layanan_title">
          <h1>Bank Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptas at? Nulla quis consectetur eveniet
            architecto
          </p>
        </div>
      </div>
      <div class="=layanan">
        <div class="image_layanan">
          <img src="./images/bank_sampah.jpeg" alt="Layanan Image 2" />
        </div>
        <div class="layanan_title">
          <h1>Bank Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptas at? Nulla quis consectetur eveniet
            architecto
          </p>
        </div>
      </div>
      <div class="=layanan">
        <div class="image_layanan">
          <img src="./images/bank_sampah.jpeg" alt="Layanan Image 3" />
        </div>
        <div class="layanan_title">
          <h1>Bank Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptas at? Nulla quis consectetur eveniet
            architecto
          </p>
        </div>
      </div>
    </div>
  </div>
    `;
  },

  async afterRender() {
    console.log('denakeren');
  },
};

export default Homepage;
