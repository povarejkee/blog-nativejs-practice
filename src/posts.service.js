class PostsService {
  constructor(url) {
    this.url = url
  }

  async addPost(post) {
    try {
      const response = await fetch(`${this.url}/posts.json`, {
        method: 'post',
        body: JSON.stringify(post),
      })

      return response.json()
    } catch (error) {
      console.error(error)
    }
  }

  async getPosts() {
    try {
      const response = await fetch(`${this.url}/posts.json`)
      return response.json()
    } catch (error) {
      console.error(error)
    }
  }

  async getSinglePost(id) {
    try {
      const response = await fetch(`${this.url}/posts/${id}.json`)
      return response.json()
    } catch (error) {
      console.log(error)
    }
  }
}

export const postsService = new PostsService(
  'https://js-wfm-practice.firebaseio.com'
)
