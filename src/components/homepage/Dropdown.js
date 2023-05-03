import "./Drop.css";
import { PopupMenu } from "react-simple-widgets";
import User from '../../images/user.png'

export default function App() {
  return (
    <div id="app">
      <div className="text-end">
        <PopupMenu> 
          <button className="btn btn-primary" id='b'>
          <img src={User} id='navicon'></img>
          </button>

          <div className="card-text-start">
            <div className="card-body px-4 py-4">
              <div id="circle-avatar" className="text-center mx-auto mb-4">
                <span id='nameinitial'>K</span>
              </div>

              <h5 className="text-center mb-0" id='c'>John Doe</h5>
              <p className="text-center mb-2">jd@gmail.com</p>

              

              <div className="d-grid" id='logbut'>
                <button className="btn btn-secondary" id='logout'>
                  <a href='/' id='l'>Logout</a>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
      </div>
    </div>
  );
}
