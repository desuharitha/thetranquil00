export async function loadR2Catalog(){
 const response=await fetch(new URL('./r2-catalog.json',import.meta.url),{cache:'no-store'});
 if(!response.ok)throw Error('R2 test catalog unavailable.');
 const catalog=await response.json();
 if(!Array.isArray(catalog.tracks)||catalog.tracks.length!==3)throw Error('Exactly three test tracks required.');
 return catalog.tracks.map(track=>{let url;try{url=new URL(track.url)}catch{throw Error('R2 test prepared; sample URLs are not configured yet.')}if(url.protocol!=='https:'||url.username||url.password)throw Error('HTTPS without embedded credentials required.');return {...track,url:url.href,collection:'R2 three-file test'}});
}