import './App.css';
import logo from './assets/img/logo.jpeg';
import hubit from './assets/img/Hubbit.png';

function App() {

  return (
    <div className="app">

      <div className='content'>

        <div className="header">
          <div className='logo-content'>
            {/* <h3>Hubbit</h3> */}
            <img src={logo} alt="Logo" />
          </div>

          <div>

          </div>

          <div className='content-menu'>
            <div className='menus'>
              <h5>Quem somos</h5>
              <h5>Integrações</h5>
            </div>

            <button>Login</button>
          </div>

        </div>

        <div className="body">

          <div className='content'>

            {/* column 1 */}
            <div className='col01'>

              <div>welcome</div>

              <div>
                <h1>
                  The best place to find your drem job
                </h1>
              </div>

              <div>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lacus eget nunc fermentum bibendum.
                </h5>
              </div>

              <div>
                <input />
              </div>

              <div>
                Consulte um especialista
              </div>

            </div>

            {/* column 2 */}
            <div className='col02'>
              <img title='imagem' src='https://i.pinimg.com/564x/b2/85/a5/b285a52f967dbc45e205f00ebcc7543a.jpg' />
            </div>

          </div>

          <div className='parceiros'>
            <h5>Truested by 150+ wolrd's best companies</h5>
            <div>
              <img src={hubit} alt="Logo" style={{ height: '25px', opacity: '0.5' }} />
              <img src={hubit} alt="Logo" style={{ height: '25px', opacity: '0.5' }} />
              <img src={hubit} alt="Logo" style={{ height: '25px', opacity: '0.5' }} />
              <img src={hubit} alt="Logo" style={{ height: '25px', opacity: '0.5' }} />
              <img src={hubit} alt="Logo" style={{ height: '25px', opacity: '0.5' }} />
            </div>
          </div>

          <div className='modulos'>
            <div>
              <h3>New way to get a job</h3>
              <h5>Once you gain access to the Hirace platform you start out by adding your first team roles</h5>
            </div>
            <div className='card-content'>
              <div className='card'>
                <img src={logo} alt="Logo" style={{ height: '25px', opacity: '0.5' }} />
                <h3>Manage candidates easily</h3>
                <h5>Our easy-to-use software lets you evaluate candidates and move therm faster.</h5>
                <a>Learn More</a>
              </div>
              <div className='card'>
                <img src={logo} alt="Logo" style={{ height: '25px', opacity: '0.5' }} />
                <h3>Manage candidates easily</h3>
                <h5>Our easy-to-use software lets you evaluate candidates and move therm faster.</h5>
                <a>Learn More</a>
              </div>
              <div className='card'>
                <img src={logo} alt="Logo" style={{ height: '25px', opacity: '0.5' }} />
                <h3>Manage candidates easily</h3>
                <h5>Our easy-to-use software lets you evaluate candidates and move therm faster.</h5>
                <a>Learn More</a>
              </div>
            </div>
          </div>

        </div>


      </div>

    </div>

  );
}

export default App;
