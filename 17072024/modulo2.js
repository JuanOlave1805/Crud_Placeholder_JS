const sendDocument = async(event,objeto
) => {
    fetch('http://localhost:3000/documento', {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export default sendDocument