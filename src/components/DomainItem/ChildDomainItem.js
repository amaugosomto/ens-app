import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { SingleNameBlockies } from '../SingleName/SingleNameBlockies'
import { formatDate, calculateIsExpiredSoon } from 'utils/dates'

const DomainLink = styled(Link)`
  display: grid;
  grid-template-columns: 30px auto 300px;
  grid-template-rows: 50px;
  grid-gap: 10px;
  width: 100%;
  padding: 30px 0;
  background-color: ${props => (props.warning ? 'hsla(37,91%,55%,0.1)' : '')};
  color: #2b2b2b;
  font-size: 22px;
  font-weight: 100;
  border-bottom: 1px dashed #d3d3d3;

  &:last-child {
    border: none;
  }

  span {
    align-self: center;
  }

  h3 {
    align-self: center;
    margin: 0;
    font-weight: 100;
    font-size: 28px;
  }

  p {
    margin: 0;
    align-self: center;
  }
`

const ExpiryDate = styled('p')`
  font-size: 18px;
  color: ${({ isExpiredSoon }) => (isExpiredSoon ? 'red' : '#adbbcd')};
`

export default function ChildDomainItem({
  name,
  domain,
  labelhash,
  owner,
  labelName,
  parent,
  expiryDate,
  isMigrated
}) {
  let label =
    labelName !== null
      ? `${name}`
      : `[unknown${labelhash.slice(2, 10)}].${parent}`
  if (isMigrated === false) label = label + ' (not migrated)'
  const isExpiredSoon = calculateIsExpiredSoon(expiryDate)
  return (
    <DomainLink
      warning={isMigrated === false ? true : false}
      key={name}
      to={`/name/${name}`}
    >
      <SingleNameBlockies imageSize={24} address={owner} />
      <h3>{label}</h3>
      {expiryDate ? (
        <ExpiryDate isExpiredSoon={isExpiredSoon}>
          Expires {formatDate(parseInt(expiryDate * 1000))}
        </ExpiryDate>
      ) : null}
    </DomainLink>
  )
}
