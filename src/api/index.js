import config from './config'
const { apiKey } = config

export default function getArtist(country){
    const _url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${apiKey}&format=json`    
    return fetch(_url)
        .then( res => res.json() )
        .then( json => json.topartists.artist )        
}