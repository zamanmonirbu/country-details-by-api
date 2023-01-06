fetch('https://restcountries.com/v2/all')
.then(req=>req.json())
.then(data=>displayCountries(data));

    const displayCountries=countries=>{
        const countriesDiv=document.getElementById('countries'); 
        // for (let i = 0; i < countries.length; i++) {
            // const country = countries[i];

            countries.forEach(country => {
         
            const countryDiv = document.createElement('div');
            countryDiv.className='country';
            const countryInfo=`
            <h3 class="countryName">${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="showDetails('${country.name}')" >Details </button>
            `;
            countryDiv.innerHTML=countryInfo;
            countriesDiv.appendChild(countryDiv);
          
        });
    }

           const showDetails=name=>{
            const url= `https://restcountries.com/rest/v2/name/${name}`
            fetch('res=>res.json()')
            .then(data=>console.log(data));
           }


        //     const h3 = document.createElement('h3');
        //     h3.innerText=country.name;
        //     countryDiv.appendChild(h3);
        //    const p = document.createElement('p');
        //     p.innerText=country.capital;
        //     countryDiv.appendChild(p);

        //     countriesDiv.appendChild(countryDiv);
        //     countriesDiv.className='country';
            
            
       
    