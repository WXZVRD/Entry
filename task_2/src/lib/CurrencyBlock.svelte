<script lang="js">
  import currencies from "../currencies.js";
  export let currencyFormatter;
  export let inputId;
  export let selectId;
  export let inputValue;
  let curSign = "";
  $: curName =
    currencies[currencies.findIndex((cur) => cur.sign === curSign)].id;
</script>

<div class="section__card">
  <select
    data-id={selectId}
    name={curName}
    bind:value={curSign}
    on:change={currencyFormatter}
  >
    <option value="" disabled>Choose a currency</option>
    {#each currencies.filter((cur) => cur.sign !== "") as currency}
      <option value={currency.sign}>{currency.id}</option>
    {/each}
  </select>
  <div style="position: relative">
    <label class="input-placeholder" for={inputId}>{curSign}</label>
    <input
      data-id={inputId}
      type="text"
      placeholder="Enter amount here"
      bind:value={inputValue}
      on:input={currencyFormatter}
    />
  </div>
</div>