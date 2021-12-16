import { Link } from 'react-router-dom'
import styled from 'styled-components'
import main from '../assets/main.png'
import { Redirect } from 'react-router-dom'
import { useGlobalContext } from '../context'
function Home() {
  const { user } = useGlobalContext()
  return (
    <>
      {user && <Redirect to='/dashboard' />}
      <Wrapper className='page'>
        <div className='info'>
          <h3>
            <span>Auth</span>
            Workflow
          </h3>
          <h5>Presenting user authentication workflow.</h5>
          <h5>
            Test out Registering of an user, Logging in user, with Forgot/Reset
            password functionality.
          </h5>

          <Link to='/login' className='btn'>
            Login
          </Link>
          <Link to='/register' className='btn'>
            Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  h2 {
    font-weight: 700;
  }
  h3 span {
    color: var(--primary-500);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    .main-img {
      display: block;
    }
  }
  .btn {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`

export default Home
