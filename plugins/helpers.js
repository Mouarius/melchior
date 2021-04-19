const toPriceFormat = (number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(number)
}

export default { toPriceFormat }
