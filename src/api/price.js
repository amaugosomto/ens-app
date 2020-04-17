import 'whatwg-fetch'

export default function getEtherPrice() {
  return fetch(
    'https://cors-anywhere.herokuapp.com/https://api.liquid.com/products/560'
  )
    .then(res => res.json())
    .catch(() => '') // ignore error
}
