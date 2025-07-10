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
