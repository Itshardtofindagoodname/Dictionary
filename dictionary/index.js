async function fetchData(term) {
    const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${term}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '40f11ed69amsh59f01c62fdbff18p1822d2jsn69bfef9d99ff',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  const txt = document.getElementById('searchinput');
  const btn = document.getElementById('searchbtn');
  const def = document.getElementById('def');
  const seti = document.getElementById('searchtitle');
  
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    const term = txt.value;
    try {
      const result = await fetchData(term);
      def.innerHTML = '';
      seti.textContent = txt.value;
    result.list.forEach(meaning => {
      const listItem = document.createElement('p');
      listItem.textContent = meaning.definition;
      def.appendChild(listItem);
    });
    } catch (error) {
      console.error(error);
    }
  });
