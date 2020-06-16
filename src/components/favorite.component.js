import { Component } from '../core/component'
import { postsService } from '../posts.service'
import { renderPost } from '../post.template'

export class FavoriteComponent extends Component {
  constructor(id, loader) {
    super(id)
    this.loader = loader
  }

  init() {
    this.$el.addEventListener('click', async (event) => {
      if (event.target.classList.contains('js-link')) {
        event.preventDefault()

        this.loader.show()
        this.$el.innerHTML = ''

        const post = await postsService.getSinglePost(event.target.textContent)

        this.loader.hide()
        this.$el.innerHTML = renderPost(post, false)

        console.log(post)
      }
    })
  }

  onShow() {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    this.$el.innerHTML = `<ul>${renderFavorites(favorites)}</ul>`
  }
}

function renderFavorites(data) {
  if (!data) {
    return '<p class="text-center">Список избранного пуст</p>'
  }

  return data
    .map((item) => {
      return `<li><a href="" class="js-link">${item}</a></li>`
    })
    .join(' ')
}
