function vacation(groupOfPeople, typeGroup, dayOfTheWeek) {
  let price = 0;

  if (typeGroup === "Students") {
    if (dayOfTheWeek === "Friday") {
      price = 8.45;
    } else if (dayOfTheWeek === "Saturday") {
      price = 9.8;
    } else if (dayOfTheWeek === "Sunday") {
      price = 10.46;
    }

    if (groupOfPeople >= 30) {
      price *= 0.85;
    }
  } else if (typeGroup === "Business") {
    if (groupOfPeople >= 100) {
      groupOfPeople -= 10;
    }
    if (dayOfTheWeek === "Friday") {
      price = 10.9;
    } else if (dayOfTheWeek === "Saturday") {
      price = 15.6;
    } else if (dayOfTheWeek === "Sunday") {
      price = 16.0;
    }
  } else if (typeGroup === "Regular") {
    if (dayOfTheWeek === "Friday") {
      price = 15.0;
    } else if (dayOfTheWeek === "Saturday") {
      price = 20.0;
    } else if (dayOfTheWeek === "Sunday") {
      price = 22.5;
    }

    if (groupOfPeople >= 10 && groupOfPeople <= 20) {
      price *= 0.95;
    }
  }

  let finalPrice = price * groupOfPeople;

  console.log(`Total price: ${finalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
