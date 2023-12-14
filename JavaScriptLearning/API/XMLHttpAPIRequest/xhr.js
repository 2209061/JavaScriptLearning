//GET REQUEST
/*const makeRequest=(method,url){
const getData = () => {
  const xhr = new XMLHttpRequest();
  //console.log(xhr);
  xhr.open(method,url);
  xhr.onload = () => {
    let data = xhr.response;
    console.log(JSON.parse(data));
  };

  xhr.onerror = () => {
    console.log('error is here');
  };

  xhr.send();
}
};
const getData =()=>{
makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')


};*/

//POST REQUEST

/*const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  //console.log(xhr);
  xhr.open(method, url, data);
  xhr.onload = () => {
    let data = xhr.response;
    console.log(JSON.parse(data));
  };
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onerror = () => {
    console.log('error is here');
  };
  xhr.send(JSON.stringify(data));
};

const SendData = () => {
  makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: '1',
  });
};

SendData();
*/
const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  //console.log(xhr);
  xhr.open(method, url, data);
  xhr.onload = () => {
    let data = xhr.response;
    console.log(JSON.parse(data));
  };
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onerror = () => {
    console.log('error is here');
  };
  xhr.send(JSON.stringify(data));
};

const UpdateData = () => {
  makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
    title: 'fooMA',
    body: 'barMA',
    userId: '1',
  });
};

UpdateData();
