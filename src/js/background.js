const id = [ //kody konkretnej pogody
    { key: "01d", link: "./src/background/01d.jpg", description: "clear sky" },
    { key: "02d", link: "./src/background/02d.jpg", description: "few clouds" },
    { key: "03d", link: "./src/background/03d.jpg", description: "scattered clouds" },
    { key: "04d", link: "./src/background/04d.jpg", description: "broken clouds" },
    { key: "10d", link: "./src/background/10d.jpg", description: "rain" },
    { key: "11d", link: "./src/background/11d.jpg", description: "thunderstorm" },
    { key: "13d", link: "./src/background/13d.jpg", description: "snow" },
]

export const changebackground = (data) => {  //zmiana tła
    for (const i = 0; i < id.length; i++) { 
        if (id[i].key == data.weather[0].icon) {
            document.body.style.backgroundImage = `url(${id[i].link})`
        }
    }
};