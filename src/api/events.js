async function bxRequest(actionName, data = {}) {
  return new Promise((resolve, reject) => {
    window.BX.ajax.runAction(`zlata:events.event.${actionName}`, {
      data: data
    })
    .then(response => resolve(response.data))
    .catch(error => reject(error));
  });
}

export async function getEvents(page = 1, tag = null) {
  return await bxRequest('list', { page, tag });
}

export async function getEvent(id) {
  return await bxRequest('detail', { id });
}

export async function getTags() {
  return await bxRequest('tags');
}
