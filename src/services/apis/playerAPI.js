import getRequest from "./getRequest";


async function getPlayerInfo(playerID) {
    const endpoint = "https://api.sportsdata.io/v3/nba/scores/json/Player/";
    const keyQuery = "?key=" + process.env.REACT_APP_SPORTS_DATA_API_KEY;
    const url = endpoint + playerID + keyQuery;
    const response = await getRequest(url);
    return response;
}


async function getAllPlayers() {
    const endpoint = "https://api.sportsdata.io/v3/nba/scores/json/Players";
    const keyQuery = "?key=" + process.env.REACT_APP_SPORTS_DATA_API_KEY;

    const url = endpoint + keyQuery;
    const response = await getRequest(url);
    return response;
}



async function getPlayerGames(playerID) {

    const endpoint = "https://api.sportsdata.io/v3/nba/stats/json/PlayerGameStatsBySeason/2021/";

    const keyQuery = "/30?key=" + process.env.REACT_APP_SPORTS_DATA_API_KEY;

    const url = endpoint + +playerID + keyQuery;
    const response = await getRequest(url);
    return response;
}


export { getPlayerInfo, getAllPlayers };
