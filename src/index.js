import { HeaderComponent } from './components/header.component'
import { NavComponent } from './components/nav.component'
import { PostsComponent } from './components/posts.component'
import { CreateComponent } from './components/create.component'
import { FavoriteComponent } from './components/favorite.component'

new HeaderComponent('header')

const posts = {
  name: 'posts',
  component: new PostsComponent('posts'),
}
const create = {
  name: 'create',
  component: new CreateComponent('create'),
}
const favorite = {
  name: 'favorite',
  component: new FavoriteComponent('favorite'),
}

new NavComponent('navigation', [posts, create, favorite])
