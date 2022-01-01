import React from 'react'

import './reset.module.scss'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Block from './components/Utils/Block/Block'
import About from './components/Blocks/About/About'
import Education from './components/Blocks/Experience/Experience'
import Skills from './components/Blocks/Skills/Skills'
import { NAV_ITEMS } from './constants/navItems'

const BLOCKS: { title: string; component: () => React.ReactElement }[] = [
  { title: NAV_ITEMS.about, component: About },
  { title: NAV_ITEMS.experience, component: Education },
  { title: NAV_ITEMS.skills, component: Skills },
]

const App = () => {
  return (
    <div>
      <Header />
      <MainPage />
      {BLOCKS.map((block, index) => (
        <Block theme={index % 2 ? 'dark' : 'light'} title={block.title} key={block.title}>
          {block.component()}
        </Block>
      ))}
    </div>
  )
}

export default App
