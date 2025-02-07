(()=>{
    console.log('iife fired')



    const title = document.querySelector('.movie-title')
    const baseUrl = 'https://swapi.dev/api/'

    

    function getNames() {
        fetch(`${baseUrl}people`)
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
                a.dataset.films = name["films"].join(' ');
                li.appendChild(a);
                ul.appendChild(li);
            })

            const namesBox = document.querySelector('.list-div')
            namesBox.appendChild(ul);
        })

        .then(function() {
            const links = document.querySelectorAll(".list-div li a");
            links.forEach(link => {
                link.addEventListener("click", getInfo)
            });
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    getNames()

    function getInfo(e) {
        e.preventDefault();
        console.log("Review called")
        console.log(e.currentTarget.dataset.films);
        const films = e.currentTarget.dataset.films.split(' ');
        const infoBox = document.querySelector('.info-div');
        infoBox.innerHTML = "";
        console.log(infoBox);
        

        films.forEach(film => {
            fetch(film)
            .then(response => response.json())
            .then(function(response) {
                console.log(response.title);
                console.log(response.release_date);
                const heading = document.createElement('h2');
                const span = document.createElement('span');
                const preg = document.createElement('p')
                preg.classList.add('p-reg');
                preg.textContent = response.opening_crawl;
                span.classList.add('year');
                span.textContent = response.release_date;
                heading.classList.add('movie-title');
                heading.textContent = response.title;

                heading.appendChild(span);
                infoBox.appendChild(heading);
                infoBox.appendChild(preg);
                // const clone = reviewTemplate.content.cloneNode(true);
                // const reviewDescription = clone.querySelector(".review-description");
                // reviewDescription.textContent = response.short.review.reviewBody;
                // reviewCon.appendChild(clone);
            })
            .catch()
        })

    }


})();