import React from 'react'
import { Switch, Route,  BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage, AboutPage, PictureSwapper, PostsPage, Posts1, Posts2, Posts3, Posts4, PostsArchive, MessagePage, EmojiMagic } from 'components'
import PictureMain from './pages/picturepages/PictureMain'

import createHistory from 'history/createBrowserHistory'

const history = createHistory()

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
        <Route path="/" component={PictureSwapper} exact />
        <Route path="/picturemain" component={PictureMain} exact />
        <Route path="/pictureswapper" component={PictureSwapper} exact />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
