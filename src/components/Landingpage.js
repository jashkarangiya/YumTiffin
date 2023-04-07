import React, { PureComponent } from 'react'
import Footer from './Footer';
import Section_1_landingpage from './Section_1_landingpage'
import Section_2_landingpage from './Section_2_landingpage';
import Section_3_landingpage from './Section_3_landingpage';
import Section_4_landingpage from './Section_4_landingpage';
export default class 
 extends PureComponent {
  render() {
    return (
      <div>
    <Section_1_landingpage></Section_1_landingpage>
    <Section_2_landingpage></Section_2_landingpage>
    <Section_3_landingpage></Section_3_landingpage>
    <Section_4_landingpage></Section_4_landingpage>
    <Footer></Footer>
      </div>
    )
  }
}
