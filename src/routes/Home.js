import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { Spring } from 'react-spring'

import mq from 'mediaQuery'

import SearchDefault from '../components/SearchName/Search'
import NoAccountsDefault from '../components/NoAccounts/NoAccountsModal'
import bg from '../assets/heroBG.jpg'
import NetworkInfoQuery from '../components/NetworkInformation/NetworkInfoQuery'
import ENSLogo from '../components/HomePage/images/ENSLogo.svg'

const Favourites = styled('div')`
  position: absolute;
  right: 40px;
  top: 20px;
  a {
    font-weight: 300;
    color: white;
  }
`
const Hero = styled('section')`
  background: url(${bg});
  background-size: cover;
  padding: 60px 20px 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${mq.medium`
    padding: 0 20px 0;
  `}
`

const NoAccounts = styled(NoAccountsDefault)`
  position: absolute;
  top: 20px;
  left: 20px;
  ${mq.small`
    left: 40px;
  `}
`

const SearchContainer = styled('div')`
  margin: 0 auto 0;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  ${mq.medium`
    min-width: 60%;
  `}
  > h2 {
    color: white;
    font-size: 38px;
    font-weight: 100;
    margin-bottom: 10px;
  }

  > h3 {
    color: white;
    font-weight: 100;
    font-size: 24px;
    margin-top: 0;
  }
`

const Search = styled(SearchDefault)`
  min-width: 90%;
  ${mq.medium`
    min-width: 780px;
  `}

  input {
    width: 100%;
    border-radius: 6px;
    ${mq.medium`
      border-radius: 6px 0 0 6px;
      font-size: 28px;
    `}
  }

  button {
    border-radius: 0 6px 6px 0;
  }
`

const NetworkStatus = styled('div')`
  position: absolute;
  top: 20px;
  left: 30px;
  color: white;
  font-weight: 200;
  text-transform: capitalize;
  ${mq.medium`
    left: 40px;
  `}

  &:before {
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-5px, -50%);
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
  }
`

const LogoLarge = styled('img')`
  width: 50%;
  margin: 0 auto 0;
  ${mq.medium`
    width: 223px;
  `}
`

const PermanentRegistrarLogo = styled('h1')`
  font-family: Overpass;
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
  color: #4258d3;
  letter-spacing: 1.8px;
  text-align: right;
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: 50px;
  text-align: center;
`

export default props => (
  <Fragment>
    <Hero>
      <NetworkInfoQuery noLoader={true}>
        {({ accounts, network }) =>
          accounts.length > 0 && network ? (
            <NetworkStatus>{network} network</NetworkStatus>
          ) : (
            <NoAccounts textColour={'white'} />
          )
        }
      </NetworkInfoQuery>
      <Favourites>
        <Link to="/favourites">Favourites</Link>
      </Favourites>

      <SearchContainer>
        <Spring
          from={{
            opacity: 0,
            scale: 0
          }}
          to={{ opacity: 1, scale: 1 }}
          config={{ duration: 400 }}
        >
          {({ opacity, scale, height }) => (
            <Fragment>
              <LogoLarge
                style={{
                  opacity,
                  transform: `scale(${scale})`
                }}
                src={ENSLogo}
              />
              <PermanentRegistrarLogo
                style={{
                  opacity,
                  transform: `scale(${scale})`
                }}
              />
              <Search />
            </Fragment>
          )}
        </Spring>
      </SearchContainer>
    </Hero>
  </Fragment>
)
