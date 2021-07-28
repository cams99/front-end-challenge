export const validateQuantity = input =>
  !input || isNaN(Number(input)) || Number(input) < 0
