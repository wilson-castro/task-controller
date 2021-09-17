
export const colorCheckBox = (card) => {
  const data = new Date(card.dataDeadline.split('/').reverse().join('/'));
  let today = new Date()

  if (card.completed === true)
    return "success"
  else if (data < today) {
    return "danger"
  } else {
    return ""
  }
}
