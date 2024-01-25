async function getGames() {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "2c73c05d2fmsh23e7b8ea2c1914dp138e0cjsn38d1547857db",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
    };

    // categories
    try {
        const api = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter", options);
        const response = api.json();
        console.log(response);
    } catch (error) {
        console.error(error);
    }

    // details
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452";
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getGames();
