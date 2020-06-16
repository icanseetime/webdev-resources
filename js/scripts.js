fetch('/js/topics.json')
    .then(response => response.json())
    .then(topics => {
        console.log(topics)
        let topicContainer = document.getElementById('topic-container')

        topics.forEach(topic => {
            const div = document.createElement('div')
            const h2 = document.createElement('h2')
            const a = document.createElement('a')

            a.href = `/topic/${topic.url}.html`
            a.id = "main-link"
            div.id = "topic-box"
            h2.innerHTML = topic.name
            // img.src = `/img/${topic.img}`

            a.appendChild(div)
            div.appendChild(h2)

            topicContainer.appendChild(a)
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
            h2.innerHTML = link.name
            img.src = `/img/linker/${link.img}`

            a.appendChild(div)
            div.appendChild(img)
            div.appendChild(h2)
            linkContainer.appendChild(a)
        });
    })
