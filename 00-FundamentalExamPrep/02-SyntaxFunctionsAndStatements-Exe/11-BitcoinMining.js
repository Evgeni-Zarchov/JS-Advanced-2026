function mining(materials) {
  // every third day someone steals 30% from the gold.
  const coinPrice = 11949.16;
  const goldPrice = 67.51;

  let shift = 0;
  let dayOfFirstPurchase = 0;
  let coinCounter = 0;
  let totalIncome = 0;

  for (let product of materials) {
    ++shift;
    if (shift % 3 === 0) {
      product *= 0.7;
    }

    totalIncome += product * goldPrice;
    while (totalIncome >= coinPrice) {
      totalIncome -= coinPrice;
      coinCounter++;

      if (dayOfFirstPurchase === 0) {
        dayOfFirstPurchase = shift;
      }
    }
  }

  console.log(`Bought bitcoins: ${coinCounter}`);
  if (coinCounter > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
  }
  console.log(`Left money: ${totalIncome.toFixed(2)} lv.`);
}

mining([100, 200, 300]);
mining([3124.15, 504.212, 2511.124]);
