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
            const url= `https://restcountries.com/v2/name/${name}`
            fetch(url)
            .then(res=>res.json())
            .then(some=>information(some[0]));
           }
           
           const information=clicked=>{
            const details=document.getElementById('countryDetails');
            //console.log(clicked.currencies[0].name);

            details.innerHTML=`<h1>${clicked.name}</h1>
                                <img src="${clicked.flag}">
            `;
            // details.innerHTML=countryOther;

            // console.log(clicked.flags.png);

            
            

           }


        //     const h3 = document.createElement('h3');
        //     h3.innerText=country.name;
        //     countryDiv.appendChild(h3);
        //    const p = document.createElement('p');
        //     p.innerText=country.capital;
        //     countryDiv.appendChild(p);

        //     countriesDiv.appendChild(countryDiv);
        //     countriesDiv.className='country';
            
            
       
    