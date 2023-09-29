import {ReactComponent as GithubIcon } from 'assets/img/gh-logo.svg'

function Navbar(){
  return(<header>
    <nav className="container">
        <div className="gwmovie-nav-content">
            <h1>GW Movie</h1>
            <a href="https://github.com/gabrielwenchenck" target="_blank" rel="noreferrer">
                <div className="gwmovie-contact-container">
                    <GithubIcon />
                    <p className="gwmovie-contact-link">/gabrielwenchenck</p>
                </div>
            </a>
        </div>
    </nav>
</header>)
}

export default Navbar;