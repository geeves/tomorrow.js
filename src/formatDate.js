const formatDate = ({dayInMillis, format, formatParts}) => {
  return new Intl.DateTimeFormat([format, "en-US"], formatParts).format(new Date(dayInMillis));
};

export default formatDate;
