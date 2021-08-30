export function formatCurrent(
  price: number,
  local: 'pt-PT' | 'en-US',
  currency: 'EUR' | 'USD'
) {
  return `${price.toLocaleString(local, {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol',
  })} €`
}
