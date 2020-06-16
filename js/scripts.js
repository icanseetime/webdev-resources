fetch('/js/emner.json')
    .then(response => response.json())
    .then(emner => {
        console.log(emner)
        let emneContainer = document.getElementById('emne-container')

        emner.forEach(emne => {
            const div = document.createElement('div')
            const h2 = document.createElement('h2')
            const a = document.createElement('a')

            a.href = `/emner/${emne.url}.html`
            a.id = "main-link"
            div.id = "emne-box"
            h2.innerHTML = emne.navn
            // img.src = `/img/${emne.img}`

            a.appendChild(div)
            div.appendChild(h2)

            emneContainer.appendChild(a)
        });
    })

fetch('js/nyttigeLinker.json')
    .then(response => response.json())
    .then(linker => {
        console.log(linker)
        let linkContainer = document.getElementById('link-container')

        linker.forEach(link => {
            const div = document.createElement('div')
            const h2 = document.createElement('h2')
            const a = document.createElement('a')
            const img = document.createElement('img')

            a.href = link.url
            a.id = "main-link"
            div.id = "link-box"
            h2.innerHTML = link.navn
            img.src = `/img/linker/${link.img}`

            a.appendChild(div)
            div.appendChild(img)
            div.appendChild(h2)
            linkContainer.appendChild(a)
        });
    })
    