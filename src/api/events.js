const BASE =
'/bitrix/services/main/ajax.php?action=vendor:events.event.';


function mapEvent(e){

  return {

    id:e.id,

    title:e.name,

    description:e.preview,

    fullDescription:e.text || e.preview,

    date:e.date,

    image:'https://picsum.photos/600/400?'+e.id,

    location:'online',

    organizer:'Bitrix',

    participants:100,

    requirements:'без требований',

    tags:e.tags || []

  }

}



export async function getEvents(page = 1, tags = []){

  let url =
  BASE + 'list&page=' + page;


  if(tags.length){

    url += '&tag=' + tags.join(',');

  }


  let r =
  await fetch(url)
  .then(r => r.json())


  return r.data.items.map(mapEvent)

}



export async function getEvent(id){

  let r =
  await fetch(
    BASE + 'detail&id=' + id
  ).then(r => r.json())


  return mapEvent(r.data)

}



export async function getTags(){

  let r =
  await fetch(
    BASE + 'tags'
  ).then(r => r.json())


  return r.data

}