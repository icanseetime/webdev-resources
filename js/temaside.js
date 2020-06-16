fetch('../js/emner.json')
    .then(response => response.json())
    .then(emner => {
        // HEAD
        function addStylesheet(linkName, location, hashtag) {
            linkName = document.createElement('link')
            linkName.rel = "stylesheet"
            linkName.href = location
            document.querySelector('head').appendChild(linkName)
            linkName.id = hashtag
        }

        function addScript(scriptName, location) {
            scriptName = document.createElement('script')
            scriptName.src = location
            document.querySelector('body').appendChild(scriptName)
        }

        //Adding stylesheets
        addStylesheet("style", "../styles.css", "css-mode")
        addStylesheet("fonts", "https://fonts.googleapis.com/css2?family=Baloo+2&family=Roboto&display=swap")
        addStylesheet("darkmode", "../css/darkmode.css")
        // addStylesheet("lightmode", "../css/lightmode.css")

        //Adding scripts
        addScript("lysbryter", "../js/lysbryter-underside.js")
        addScript("navigation", "../js/navigation.js")


        // BODY
        let body = document.querySelector('body')


        //Header
        let header = document.createElement('header')
        let h1 = document.createElement('h1')

        h1.innerHTML = emner[0].navn

        header.appendChild(h1)

        body.appendChild(header)


        // Navigation
        let nav = document.createElement('nav')
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        let img = document.createElement('img')


        img.id = "light-switch"
        img.src = "../img/sun.png"
        img.alt = "Sun"

        body.appendChild(nav)
        nav.appendChild(ul)
        ul.appendChild(li)
        ul.appendChild(img)

        // Main section
        let main = document.createElement('main')
        let section = document.createElement('section')

        body.appendChild(main)
        main.appendChild(section)

        let resourcesList = document.createElement('ul')
        
    })