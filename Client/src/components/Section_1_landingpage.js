import React, { PureComponent } from 'react'
import Searchbar from './Searchbar'
import Slogan from './Slogan'
import Navbar from './Navbar'
import Logo  from './Logo'

export default class Section_1_Landingpage extends PureComponent {
  render() {
    return (
      <div className='section1'>
        <Navbar></Navbar>
        <Slogan></Slogan>
        <Logo></Logo>
        <Searchbar></Searchbar>
      </div>
    )
  }
}
