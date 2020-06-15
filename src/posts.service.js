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
}

export const postsService = new PostsService(
  'https://js-wfm-practice.firebaseio.com'
)
