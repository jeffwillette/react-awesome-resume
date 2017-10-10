import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/themes/default/assets/fonts/icons.ttf';

import PropTypes from 'prop-types';
import React from 'react';

import { person, resumeType } from './person';
import Default from './themes/default/main';

const themes = {
  default: Default,
};

const Resume = ({ theme, jsonResume, inline }) => {
  const ThemedResume = themes[theme];
  return <ThemedResume inline={inline} jsonResume={jsonResume} />;
};

Resume.defaultProps = {
  jsonResume: person,
  theme: 'default',
  inline: false,
};

Resume.propTypes = {
  jsonResume: resumeType.isRequired,
  theme: PropTypes.string,
  inline: PropTypes.bool,
};

export default Resume;
