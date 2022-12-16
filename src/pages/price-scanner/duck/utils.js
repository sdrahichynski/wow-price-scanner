export const newPlanKey = (() => {
  let counter = 1;

  const plans = ["A", "B", "C", "D", "E"];

  const getPlanKey = (index) => {
    if (index < plans.length) return plans[index];

    return `${getPlanKey(Math.floor(index / plans.length) - 1)}${getPlanKey(
      index % plans.length
    )}`;
  };

  return () => {
    return getPlanKey(counter++);
  };
})();
