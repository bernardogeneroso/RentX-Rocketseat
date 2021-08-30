export function formatCurrent(
  price: number | undefined,
  local: 'pt-PT' | 'en-US',
  currency: 'EUR' | 'USD'
) {
  if (!price) return

  return `${price.toLocaleString(local, {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol',
  })} €`
}
