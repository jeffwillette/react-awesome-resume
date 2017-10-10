import { Container } from 'semantic-ui-react';
import React from 'react';

import { locationType } from '../../person';
import { spanTinyMargin } from './styles';

const Location = ({ location }) => {
  return (
    <Container textAlign="center">
      <span style={{ margin: '0px auto' }}>
        <span style={spanTinyMargin}>{location.address},</span>
        <span style={spanTinyMargin}>{location.city},</span>
        <span style={spanTinyMargin}>{location.region},</span>
        <span style={spanTinyMargin}>{location.postalCode},</span>
        <span style={spanTinyMargin}>{location.countryCode}</span>
      </span>
    </Container>
  );
};

Location.defaultProps = {
  address: undefined,
  postalCode: undefined,
  city: undefined,
  countryCode: undefined,
  region: undefined,
};

Location.propTypes = locationType;

export default Location;
