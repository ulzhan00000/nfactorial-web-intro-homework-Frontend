import React from 'react'
import './style.css'
import MenuItem from './MenuItem'
import {BOOKMARKS_SVG, EXPLORE_SVG, HOME_SVG, MESSAGES_SVG, NOTIFICATIONS_SVG} from './images'

export default function SideMenu() {

  const menu=[

  {
    icon:HOME_SVG,
    name:'Home'
  },

  {
    icon:EXPLORE_SVG,
    name:'Explore'
  },
  {
    icon:NOTIFICATIONS_SVG,
    name:'Notification'
  },
  {
    icon:MESSAGES_SVG,
    name:'Message'
  },
  {
    icon:BOOKMARKS_SVG,
    name:'Bookmarks'
  }]
  return (
    <div className='w-25 mt-3 mx-5'>
    <img src={require('./images/twitter.png')} className='logo-icon mb-2'/>

    {menu.map((item,index)=><MenuItem item={item} key={index} />)}
    </div>
        
    
  )
}

