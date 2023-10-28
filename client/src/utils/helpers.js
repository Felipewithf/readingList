export const flattenArrayIfExists = (authors) => {
  let flattenedString = "";
  if (Array.isArray(authors) && authors.length > 0) {
    flattenedString = authors.join(", ");
  } else {
    flattenedString = authors;
  }
  return flattenedString;
};
