import formatDate from "./formatDate";
import {exists} from "./textUtils";
import isObject from "./isObject";

const defaultParts = {
  era : "long",
  weekday : "long",
  year : "numeric", //
  month : "long",
  day : "2-digit",
  hour : "numeric",
  minute : "numeric",
  second : "numeric",
  hour12 : true,
  timeZone : "UTC", // America/New_York
  timeZoneName : "long"
};

const dateTimeComponents = {
  weekday: [ "narrow", "short", "long" ],
  era: [ "narrow", "short", "long" ],
  year: [ "2-digit", "numeric" ],
  month: [ "2-digit", "numeric", "narrow", "short", "long" ],
  day: [ "2-digit", "numeric" ],
  hour: [ "2-digit", "numeric" ],
  minute: [ "2-digit", "numeric" ],
  second: [ "2-digit", "numeric" ],
  timeZoneName: [ "short", "long" ]
};

export default class Tomorrow {
  constructor(dateFormat, formatParts) {
    const day = 86400000;
    this.dateFormat = exists(dateFormat) ? dateFormat : "en-US";
    this.formatParts = isObject(formatParts) ? formatParts : defaultParts;
    this.tomorrowMillis = Date.now() + day;
  }

  /**
   * Returns Tomorrow's Date Object
   * @returns {Date}
   */
  is() {
    return new Date(this.tomorrowMillis);
  }

  toString() {
    return formatDate({
      dayInMillis: this.tomorrowMillis,
      format: this.dateFormat,
      formatParts: this.formatParts
    });
  }
}
