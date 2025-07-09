import { Temporal, Intl, toTemporalInstant } from "@js-temporal/polyfill";
Date.prototype.toTemporalInstant = toTemporalInstant;

// current date and time
const myDateWithTime = Temporal.Now.plainDateTimeISO();
console.log(myDateWithTime.toString()); // ISO 8601 date format

const myDateWithTimeZone = Temporal.Now.zonedDateTimeISO();
console.log(myDateWithTimeZone.toString());
