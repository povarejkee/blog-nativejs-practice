import { Component } from '../core/component'
import { postsService } from '../posts.service'
import { renderPost } from '../post.template'

export class PostsComponent extends Component {
  constructor(id, loader) {
    super(id)
    this.loader = loader
  }

  init() {
    this.$el.addEventListener('click', (event) => {
      const { fbid } = event.target.dataset
      let favorites = JSON.parse(localStorage.getItem('favorites')) || []

      if (fbid) {
        if (!favorites.includes(fbid)) {
          favorites.push(fbid)

          event.target.classList.add('button-danger')
          event.target.textContent = 'Избранное -'
        } else {
          favorites = favorites.filter((item) => item !== fbid)

          event.target.classList.remove('button-danger')
          event.target.textContent = 'Избранное +'
        }

        localStorage.setItem('favorites', JSON.stringify(favorites))
      }
    })
  }

  async onShow() {
    this.loader.show()

    const fbPosts = await postsService.getPosts()
    const transformedPosts =
      fbPosts &&
      Object.keys(fbPosts).map((post) => {
        return { id: post, ...fbPosts[post] }
      })

    this.loader.hide()

    this.$el.innerHTML = fbPosts
      ? transformedPosts.map((item) => renderPost(item, true)).join(' ')
      : '<p class="text-center">Постов нет</p>'
  }

  onHide() {
    this.$el.innerHTML = ''
  }
}
