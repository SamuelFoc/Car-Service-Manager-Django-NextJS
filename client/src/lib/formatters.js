const CURRENCY_FORMATTER = new Intl.NumberFormat("en-GB", {
  currency: "EUR",
  style: "currency",
  minimumFractionDigits: 0,
});

export function formatCurrency(amount) {
  return CURRENCY_FORMATTER.format(amount);
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-GB");

export function formatNumber(number) {
  return NUMBER_FORMATTER.format(number);
}

export function formatDate(inputDate) {
  const [year, month, day] = inputDate.split("-").map(Number);
  const date = new Date(year, month - 1, day); // Month is zero-based in JavaScript Date constructor

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formatter = new Intl.DateTimeFormat("en-GB", options);
  return formatter.format(date);
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
