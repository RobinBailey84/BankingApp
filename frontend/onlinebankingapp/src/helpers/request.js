class Request{

  get(url){
    return fetch(url)
    .then((res) => res.json());
  }

  post(url, body) {
    return fetch(url,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    })
    .then(
      response => {
          if(response.ok){
            return response.json()
          }else{
            return {}
          }
      }
    )
  }
}

export default Request;
