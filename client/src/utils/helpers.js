export const flattenArrayIfExists = (authors) => {
  let flattenedString = "";
  if (Array.isArray(authors) && authors.length > 0) {
    flattenedString = authors.join(", ");
  } else {
    flattenedString = authors;
  }
  return flattenedString;
};

export const truncateText = (text) => {
  if (typeof text === 'string' && text.length > 250) {
    return text.slice(0, 247) + "...";
  }
  return text;
};
