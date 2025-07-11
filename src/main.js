import { Temporal, Intl, toTemporalInstant } from "@js-temporal/polyfill";
Date.prototype.toTemporalInstant = toTemporalInstant;

// current date and time
const myDateWithTime = Temporal.Now.plainDateTimeISO();
console.log(myDateWithTime.toString()); // ISO 8601 date format

const myDateWithTimeZone = Temporal.Now.zonedDateTimeISO();
console.log(myDateWithTimeZone.toString());

// work with different time zones
const nyTime = Temporal.Now.zonedDateTimeISO("America/New_York");
console.log(nyTime.toString());

// convert current NY time to Tokyo time
const tokyoTime = nyTime.withTimeZone("Asia/Tokyo");
console.log(tokyoTime.toString());

// round times
const tokyoTimeWholeHour = tokyoTime.round({
    smallestUnit: "hour",
    roundingMode: "floor",
}); // rounding down to previous whole hour
console.log(tokyoTimeWholeHour.toString());

// works with Intl API
const fourthOfJulyTime = Temporal.PlainDate.from("2025-07-04");
console.log(
    Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    }).format(fourthOfJulyTime),
);

// add or subtract time
const nextWeek = myDateWithTime.add({ weeks: 1 });
console.log("Next week:", nextWeek.toString());
const twoDaysAgo = myDateWithTime.subtract({ days: 2 });
console.log("2 days ago:", twoDaysAgo.toString());
const oneAndAHalfHoursAgo = myDateWithTime.subtract({
    hours: 1,
    minutes: 30,
});
console.log("1.5 hrs ago:", oneAndAHalfHoursAgo.toString());
