<script lang="js">
  import CurrencyBlock from "./lib/CurrencyBlock.svelte";
  import fetchCurrency from "./utils/fetchCurrency";
  const exchange = {
    from: "",
    to: "",
    fromVal: 0,
    toVal: 0,
  };

  async function currencyFormatter(e) {
    if (e.target instanceof HTMLInputElement) {
      let { value, dataset } = e.target;
      let id = dataset.id;
      let money = Number(value);
      if (isNaN(money) || !isFinite(money)) exchange[id] = exchange[id];
      else exchange[id] = money;
      calculateRates(id);
    } else if (e.target instanceof HTMLSelectElement) {
      let { name, dataset } = e.target;
      let id = dataset.id;
      exchange[id] = name;
      if (exchange.from !== "" && exchange.to !== "") {
        Promise.all([fetchCurrency(exchange.from), fetchCurrency(exchange.to)]);
        calculateRates(id);
      }
    }
  }

  async function calculateRates(id) {
    id === "from" ? (id = "fromVal") : id === "to" ? (id = "toVal") : id;
    if (exchange.to == "" || exchange.from == "")
      alert("Choose a currency to convert to");
    else {
      if (id === "fromVal") {
        let where = await fetchCurrency(exchange.from);
        exchange.toVal = exchange.fromVal * where[exchange.to];
        if (!Number.isInteger(exchange.toVal)) {
          exchange.toVal = Number(exchange.toVal.toFixed(2));
        }
      }
      if (id === "toVal") {
        let where = await fetchCurrency(exchange.to);
        exchange.fromVal = exchange.toVal * where[exchange.from];
        if (!Number.isInteger(exchange.fromVal)) {
          exchange.fromVal = Number(exchange.fromVal.toFixed(2));
        }
      }
    }
  }
</script>

<main>
  <h1>Currency Converter</h1>
  <section class="section">
    <CurrencyBlock
      {currencyFormatter}
      selectId="from"
      inputId="fromVal"
      inputValue={exchange.fromVal}
    />
    <CurrencyBlock
      {currencyFormatter}
      selectId="to"
      inputId="toVal"
      inputValue={exchange.toVal}
    />
  </section>
  <a target="_blank" href="https://www.exchangerate-api.com"
    >Rates By Exchange Rate API</a
  >
</main>