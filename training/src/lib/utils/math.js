export const gerRandomNumber = () => Math.floor(Math.random() * 5 + 1);

export const getNextRoundRobin = (total, current) => {
  if (total <= current) {
    return 0;
  }
  if (total === current + 1) {
    return 0;
  }
  return current + 1;
};
