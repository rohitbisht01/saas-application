const compactNumberFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
});

export const formatCompactNumber = (number: number): string => {
  return compactNumberFormatter.format(number);
};
