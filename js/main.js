(()=>{
    const baseUrl = 'https://swapi.dev/api/';
    const imagesMap = {
        "https://swapi.dev/api/films/1/": "img/poster-1.jpeg",
        "https://swapi.dev/api/films/2/": "img/poster-2.jpg",
        "https://swapi.dev/api/films/3/": "img/poster-3.jpg",
        "https://swapi.dev/api/films/4/": "img/poster-4.jpg",
        "https://swapi.dev/api/films/5/": "img/poster-5.jpg",
        "https://swapi.dev/api/films/6/": "img/poster-6.jpg"
    };
    
    function getNames() {
        const loaderNames = document.querySelector('.list-div .loader');
        loaderNames.classList.toggle('hidden');
        fetch(`${baseUrl}people`)
        .then(
            response => response.json())
        .then(function(response) {

            
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
            
            loaderNames.classList.toggle('hidden');
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

        console.log(e.currentTarget.dataset.films);
        const films = e.currentTarget.dataset.films.split(' ');
        const infoBox = document.querySelector('.info-div');
        infoBox.innerHTML = "";

        films.forEach(film => {
            fetch(film)
            .then(response => response.json())
            .then(function(response) {

                const heading = document.createElement('h2');
                const span = document.createElement('span');
                const preg = document.createElement('p');
                const poster = document.createElement("img");

                poster.src = imagesMap[film];
                poster.classList.add('poster')
                
                preg.classList.add('p-reg');
                preg.classList.add('scrollanim');
                preg.textContent = response.opening_crawl;

                span.classList.add('year');
                span.textContent = response.release_date;

                heading.classList.add('movie-title');
                heading.textContent = response.title;

                heading.appendChild(span);
                infoBox.appendChild(heading);

                
                infoBox.appendChild(preg);
                infoBox.appendChild(poster);

            })
            .catch(function(err) {
                console.log(err);
            })

        })
    }



    gsap.registerPlugin(ScrollTrigger)

    const welcomeLogo = document.querySelector('#welcome-logo')
    const welcomeImg = document.querySelector('.welcome img')
    const welcomeText = document.querySelectorAll('.welcgsap')

    gsap.fromTo(welcomeLogo,
        {opacity: 0, scale: 3}, {opacity: 1, scale: 1, duration: 1.4, ease: "power4.out"
        });

    gsap.fromTo(welcomeImg,
        {y: 400, opacity: 0, scale: .4}, {y: 0, opacity: 1, scale: 1, duration: 1.4, ease: "power4.out"
        });

    welcomeText.forEach(parapgraph => {
        gsap.set(parapgraph, {opacity: 0, scale: 4});
        gsap.to(parapgraph, {
            opacity: 1,
            scale: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: welcomeImg,
                start: 'top bottom',
                end: 'bottom 60%',
                scrub: true,

            }
        });
    });    
})();