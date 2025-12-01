console.log('hello from the e621 script')

const headers = {
    'User-Agent': 'e621-compare-app/1.0 (by KensdenTV on Twitch)'
}
const query = '?tags=rating%3Asafe+score%3A>300+order%3Arandom+limit%3A2+type:gif'

async function getYiffData() {
    const url = `https://e621.net/posts.json${query}`;
    let response = await fetch(url, {headers: headers})
    let data = await response.json()
    console.log(data)
    return data.posts.map(post => ({
        id: post.id,
        artists: post.tags.artist,
        thumb: post.preview.url,
        url: post.file.url,
        score: post.score.total,
    }))
    
}

export { getYiffData };
