import React, {useState} from 'react'

function Login() {
    const PopupLogin = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const openLoginPopup = () => setIsOpen(true);
        const closeLoginPopup = () => setIsOpen(false);

        PopupLogin()
      
        return (
          <div>
            <button onClick={openLoginPopup}>Login</button>
            {isOpen && (
              <div className="login-popup">
                <button onClick={closeLoginPopup}>Close</button>
                <form>
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                  <button type="submit">Submit</button>
                </form>
              </div>
            )}
          </div>
        )
}}

export default Login;
