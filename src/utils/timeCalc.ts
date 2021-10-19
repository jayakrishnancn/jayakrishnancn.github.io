export const getChaiTime = minutes => {
  minutes = minutes || 1
  let cups = Math.round(minutes / 5) || 1
  cups = cups > 5 ? 5 : cups
  return `${new Array(cups).fill("☕️").join("")} ${minutes} min read`
}
