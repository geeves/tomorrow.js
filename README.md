# tomorrow.js
Tomorrow.js is a tool that returns a JavaScript Date object 24 hours from the moment it is initialized.

## Usage

    const tomorrow = new Tomorrow();
    
    const date = tomorrow.is();
    
## Pretty Print

    const dateString = tomorrow.toString();
    
    
## Advanced Usage

Return tomorrow's date in a string formatted by JavaScript's [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)

    const defaultParts = {
      era : "long",
      weekday : "long",
      year : "numeric",
      month : "long",
      day : "2-digit",
      hour : "numeric",
      minute : "numeric",
      second : "numeric",
      hour12 : true,
      timeZone : "America/New_York",
      timeZoneName : "long"
    };
    const tomorrow = new Tomorrow("en-GB", formatParts);
    
    tomorrow.toString(); // Sunday, 01 4 2018 Anno Domini, 1:50:35 pm Eastern Daylight Time
