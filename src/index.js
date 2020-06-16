import { HeaderComponent } from './components/header.component'
import { NavComponent } from './components/nav.component'
import { PostsComponent } from './components/posts.component'
import { CreateComponent } from './components/create.component'
import { FavoriteComponent } from './components/favorite.component'
import { LoaderComponent } from './components/loader.component'

new HeaderComponent('header')

const posts = {
  name: 'posts',
  component: new PostsComponent('posts', new LoaderComponent('loader')),
}
const create = {
  name: 'create',
  component: new CreateComponent('create'),
}
const favorite = {
  name: 'favorite',
  component: new FavoriteComponent('favorite', new LoaderComponent('loader')),
}

new NavComponent('navigation', [posts, create, favorite])
