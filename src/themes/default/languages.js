import { Icon } from 'semantic-ui-react';
import React from 'react';
import shortid from 'shortid';

import { CardHighlights } from './generic';
import { bold, c, color, colors, emOneTwo, emTwo } from './styles';
import { languagesType } from '../../person';

const Languages = ({ languages }) => {
  return (
    <div>
      {languages.map(j => (
        <CardHighlights
          color={colors.teal}
          key={shortid.generate()}
          title={
            <span style={c(emTwo, bold, color(colors.teal))}>
              <Icon name="globe" />{j.name}
            </span>
          }
          subtitle={
            <span style={c(emOneTwo, color(colors.grey))}>
              <Icon name="users" />{j.level}
            </span>
          }
        />
      ))}
    </div>
  );
};

Languages.defaultProps = {
  languages: [],
};

Languages.propTypes = languagesType;

export default Languages;
