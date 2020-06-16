export function renderPost(post, withButton = true) {
  const typeHTML =
    post.type === 'news'
      ? '<li class="tag tag-blue tag-rounded">Новость</li>'
      : '<li class="tag tag-rounded">Заметка</li>'

  const btn = (JSON.parse(localStorage.getItem('favorites')) || []).includes(
    post.id
  )
    ? `<button class="button-small button-round button-danger" data-fbid=${post.id}>Избранное -</button>`
    : `<button class="button-small button-round button-primary" data-fbid=${post.id}>Избранное +</button>`

  return `<div class="panel">
          <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
              ${typeHTML}
            </ul>
          </div>
          <div class="panel-body">
            <p class="multi-line">${post.fulltext}</p>
          </div>
          <div class="panel-footer w-panel-footer">
            <small>${post.date}</small>
            ${withButton ? btn : ''}
          </div>
        </div>`
}
