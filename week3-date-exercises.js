/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not. 
//(Hint: Remember that Date is a class, so this would have to be an instance of that class...)
const date = new Date();

function isDate(d) {
  return d instanceof Date;
};

console.log(isDate(date));

// 2. Create today's date
const currentDate = new Date();
console.log(currentDate);
// 3. Get the current timestamp (using a static method of Date)
console.log(currentDate.getTime());

// 4. Create a date to represent next Christmas Day
const christmasDay = new Date("25 December 2023 13:30:00 UTC+00:00");
//const christmasDay = new Date(1703507400);
console.log(christmasDay);

// 5. Work out how many days it is until christmas
// Get difference between now and xmas
const milliSecondsDiff = Math.abs(currentDate.getTime() - christmasDay.getTime());
// Divide by number of ms in 1 day:
// milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second
// Math.floor for whole days; Math.ceil to include today
const daysDiff1 = Math.floor(milliSecondsDiff / (1000 * 60 * 60 * 24));
const daysDiff2 = Math.ceil(milliSecondsDiff / (1000 * 60 * 60 * 24));
console.log(daysDiff1);
console.log(daysDiff2); // it includes today

// 6. I'm going to make 2 random dates. 
//I want you to log out which one is earlier (or if they are the same?!)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date1", date1);

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date2", date2);

function dateCompare() {
  if (date1 > date2) {
    console.log(`${date1} is greater than ${date2}`)
  } else if (date1 < date2) {
    console.log(`${date2} is greater than ${date1}`)
  } else {
    console.log(`Both dates are equal`)
  }
}

dateCompare(date1, date2);



// 7. How do I test if a date is valid? ****
function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

console.log(isValidDate(date));


// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object
const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

console.log(`Today is ${month + 1}--${day}--${year}`);

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')
console.log(today.toLocaleDateString("en-GB"));
console.log(today.toLocaleDateString("de-DE"));

// 10. Output the current time in hours, mins & seconds
const hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

console.log(`The current time is ${hour} hours, ${minutes} minutes and ${seconds} seconds.`)


// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.

function startTime() {
  const dateTime = new Date();
  const h = dateTime.getHours();
  const m = dateTime.getMinutes();
  const s = dateTime.getSeconds();

  setTimeout(startTime, 1000);

  console.log(`${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`)
};

startTime();

// 12. Create a copy of today
const newDay = new Date(today.getTime());

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now

const y = newDay.setFullYear(year + 3);
const mo = newDay.setMonth(month + 2);
const d = newDay.setDate(day + 1);

console.log(newDay);

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)
const UTC_Offset = today.getTimezoneOffset();
console.log(UTC_Offset);

// 15. Use the Intl module formatter 
//(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(today));

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.

const timeDuration = new Date();

const years = timeDuration.getFullYear();
const days = timeDuration.getDay();
const months = timeDuration.getMonth();
const hours = timeDuration.getHours();
const mins = timeDuration.getMinutes();
const secs = timeDuration.getSeconds();
const mSecs = timeDuration.getMilliseconds();


function msTime() {
  const milliseconds = new Date(timeDuration);
  return milliseconds.getTime();
}

console.log(msTime());

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates

function daysDiff3() {
  const pastDate = new Date('January 1, 70');
  const recentDate = new Date('January 1, 23');

  const milliSecondsDiff = Math.abs(pastDate.getTime() - recentDate.getTime());
  const secondsDifference = Math.floor(milliSecondsDiff / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const yearsDifference = Math.floor(daysDifference / 365);


  const datesDifference = {
    years: yearsDifference,
    hours: hoursDifference,
    minutes: minutesDifference,
    seconds: secondsDifference,
    milliseconds: milliSecondsDiff
  }

  return datesDifference;
}
console.log(daysDiff3());

/*****************************************************************
 * For date-fns Exercises follow link on page
****************************************************************/