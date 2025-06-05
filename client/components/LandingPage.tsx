import { useNavigate } from 'react-router'

const Landing = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    // console.log('Login button clicked! Navigating to product page...')
    navigate('/products')
  }

  return (
    <section className="hero is-fullheight is-warning landing-page-hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          {/* App Name */}
          <h1 className="title is-1 has-text-white mb-6 team-name">
            Oh Emm Gee Da Reviews
          </h1>

          {/* Login Container */}
          <div className="box has-background-white-ter py-5 px-6 login-box">
            <h2 className="title is-5 has-text-grey-dark">Welcome</h2>

            {/* Username Input - doesn't do anything */}
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input is-medium"
                  type="text"
                  placeholder="Username"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>

            {/* Password Input - doesn't do anything */}
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input is-medium"
                  type="password"
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>

            {/* Login Button */}
            <div className="field">
              <button
                className="button is-danger mb-3 login-button"
                onClick={handleLogin} // Opens App.tsx when clicked
              >
                Login
              </button>
            </div>

            {/* Register Button (Placeholder for Stretch) */}
            <div className="field">
              <button className="button is-primary">Register</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
