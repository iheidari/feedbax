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

export const reverseOrder = (order, newSort, oldSort) => {
  if (newSort !== oldSort) return 'asc';
  if (order) {
    if (order === 'asc') return 'desc';
    else if (order === 'desc') return 'asc';
    //TODO: throw an exception in case of invalid value
    //else throw('order value is not valied')
  }
  return 'asc';
};
