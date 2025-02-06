(()=>{
    console.log('iife fired')


    const title = document.querySelector('.movie-title')
    const baseUrl = 'https://swapi.dev/api/people/'

    

    function getNames() {
        fetch(`${baseUrl}?=people`)
        .then(
            response => response.json())
        .then(function(response) {
            console.log(response);
            
            const names = response.results;
            const ul = document.createElement("ul");
            ul.classList.add('names-ul')
            names.forEach(name => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.textContent = name["name"];
                a.dataset.people = name["name"];
                li.appendChild(a);
                ul.appendChild(li);
            })

            const namesBox = document.querySelector('.list-div')
            namesBox.appendChild(ul);
        })
        // .then(function() {
        //     const links = document.querySelectorAll("#movie-box li a");
        //     links.forEach(function(link){
        //         link.addEventListener("click", getReview)
        //     })
        // })
        .catch(function(err) {
            console.log(err);
        })
    }

    getNames()
})();