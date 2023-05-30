const BankSampah = {
  async render() {
    return `
        <h1>Dena Keren</h1>
      `;
  },

  async afterRender() {
    console.log('dena Kere');
  },
};

export default BankSampah;
