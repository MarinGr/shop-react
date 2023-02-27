export function subtractAmount(amount, setAmount) {
  if (amount > 1) {
    setAmount((prevAmount) => Number(prevAmount) - 1);
  }
}

export function increaseAmount(setAmount) {
  setAmount((prevAmount) => Number(prevAmount) + 1);
}

export function unFav(e, item, removeFavourite) {
  e.preventDefault();
  removeFavourite(item);
}

export function addFav(e, item, addFavourite) {
  e.preventDefault();
  addFavourite(item);
}
