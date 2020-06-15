import { Component } from '../core/component'
import { postsService } from '../posts.service'

export class PostsComponent extends Component {
  constructor(id, loader) {
    super(id)
    this.loader = loader
  }

  async onShow() {
    this.loader.show()

    const fbPosts = await postsService.getPosts()
    const transformedPosts = Object.keys(fbPosts).map((post) => {
      return { id: post, ...fbPosts[post] }
    })

    this.loader.hide()

    this.$el.innerHTML = transformedPosts.map(renderPost).join(' ')
  }

  onHide() {
    this.$el.innerHTML = ''
  }
}

function renderPost(post) {
  const typeHTML =
    post.type === 'news'
      ? '<li class="tag tag-blue tag-rounded">Новость</li>'
      : '<li class="tag tag-rounded">Заметка</li>'

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
            <button class="button-small button-round button-primary">В избранное</button>
          </div>
        </div>`
}
