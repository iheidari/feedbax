export const generateQueryString = queryStringObject => {
  let queryString = '';
  for (let queryObject in queryStringObject) {
    if (queryStringObject[queryObject])
      queryString += `${queryObject}=${queryStringObject[queryObject]}&`;
  }
  if (queryString)
    queryString = queryString.substring(0, queryString.length - 1);
  return queryString;
};
