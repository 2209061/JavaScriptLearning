//console.log('hi');
/*console.clear();
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => {
    if (!res.ok) {
      const message = `Error : $(res.status)`;

      throw new Error(message);
    }
    return res.json();
  })

  .then(res => console.log(res))
  .catch(err => console.log(err));*/

//Creating resource
/*console.clear();
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',

  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },

  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
})
  .then(res => {
    if (!res.ok) {
      const message = `Error : $(res.status)`;

      throw new Error(message);
    }
    return res.json();
  })

  .then(res => console.log(res))
  .catch(err => console.log(err));*/

//update id

/*console.clear();
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',

  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },

  body: JSON.stringify({
    id: '1',
    title: 'fooMA',
    body: 'barMA',
    userId: 1,
  }),
})
  .then(res => {
    if (!res.ok) {
      const message = `Error : $(res.status)`;

      throw new Error(message);
    }
    return res.json();
  })

  .then(res => console.log(res))
  .catch(err => console.log(err));*/

//Update single content

/*console.clear();
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',

  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },

  body: JSON.stringify({
    title: 'fooMAAAA',
  }),
})
  .then(res => {
    if (!res.ok) {
      const message = `Error : $(res.status)`;

      throw new Error(message);
    }
    return res.json();
  })

  .then(res => console.log(res))
  .catch(err => console.log(err));*/
//DELETE
/*console.clear();

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then(res => {
    if (!res.ok) {
      const message = `Error : $(res.status)`;

      throw new Error(message);
    }
    return res.json();
  })

  .then(res => console.log(res))
  .catch(err => console.log(err));*/

const makeRequest = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    const message = `Error : $(res.status)`;
    throw new Error(message);
  }
  return res.json();
  const data = await res.json();
  return data;
};

const getData = () => {
  makeRequest('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

getData();
