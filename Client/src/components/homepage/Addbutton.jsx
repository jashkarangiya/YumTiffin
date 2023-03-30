import React, { PureComponent } from 'react'
import Popup from 'reactjs-popup';
import '../../../node_modules/reactjs-popup/dist/index';
import './Addbutton.css';

export default class Addbutton extends PureComponent {
  render() {
    return (
        <div>
        <Popup trigger=
            {<button id='add-button'> Add </button>}
            modal nested>
            {
                close => (
                    <div className='modal'>
                        <div className='content'>
                            Welcome to GFG!!!
                            Welcome to GFG!!!

                            Welcome to GFG!!!

                            Welcome to GFG!!!

                            Welcome to GFG!!!

                            Welcome to GFG!!!

                        </div>
                        <div>
                            <button onClick=
                                {() => close()}>
                                    Close modal
                            </button>
                        </div>
                    </div>
                )
            }
        </Popup>
    </div>
    )
  }
}
