import React, { Fragment, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import './reset.module.scss'
import { PhotoType } from './constants/actions/photo'
import { PhotoState } from './type/reducers/photo'
import apis from './apis/apis'
import { NAV_ITEMS } from './constants/navItems'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Block from './components/Utils/Block/Block'
import About from './components/Blocks/About/About'
import Experience from './components/Blocks/Experience/Experience'
import Skills from './components/Blocks/Skills/Skills'
import Portfolios from './components/Blocks/Portfolios/Portfolios'
import Contact from './components/Blocks/Contact/Contact'
import Footer from './components/Footer/Footer'

const BLOCKS: { title: string; component: () => React.ReactElement }[] = [
  { title: NAV_ITEMS.about, component: About },
  { title: NAV_ITEMS.experience, component: Experience },
  { title: NAV_ITEMS.skills, component: Skills },
  { title: NAV_ITEMS.portfolios, component: Portfolios },
  { title: NAV_ITEMS.contact, component: Contact },
]

const DEFAULT_PHOTO_LINK = 'https://i.imgur.com/DrW99tw.jpg'

const App = () => {
  const dispatch = useDispatch()

  const getPhotoLink = useCallback(async () => {
    try {
      const result = await apis.personalInfo.getPhotoLink()
      const photoLink: PhotoState['link'] = result.data?.link
      dispatch({
        type: PhotoType.SET_PHOTO_LINK,
        payload: photoLink || DEFAULT_PHOTO_LINK,
      })
    } catch (error) {
      console.error(error)
      dispatch({
        type: PhotoType.SET_PHOTO_LINK,
        payload: DEFAULT_PHOTO_LINK,
      })
    }
  }, [dispatch])

  useEffect(() => {
    getPhotoLink()
  }, [getPhotoLink])

  return (
    <Fragment>
      <Header />
      <MainPage />
      {BLOCKS.map((block, index) => (
        <Block theme={index % 2 ? 'dark' : 'light'} title={block.title} key={block.title}>
          {block.component()}
        </Block>
      ))}
      <Footer />
    </Fragment>
  )
}

export default App
