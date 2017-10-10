import { Icon } from 'semantic-ui-react';
import React from 'react';
import shortid from 'shortid';

import { CardHighlights } from './generic';
import { bold, c, color, colors, emOneHalf, emOneTwo, faded } from './styles';
import { referencesType } from '../../person';

const References = ({ references }) => {
  return (
    <div>
      {references.map(j => (
        <CardHighlights
          color={colors.blue}
          key={shortid.generate()}
          subtitle={
            <span style={c(emOneHalf, bold, color(colors.blue))}>
              <Icon name="quote left" size="large" />{`... ${j.reference}`}
            </span>
          }
          text={
            <span style={c(emOneTwo, faded(colors.black))}>
              {` - ${j.name}`}
            </span>
          }
        />
      ))}
    </div>
  );
};

References.defaultProps = {
  references: [],
};

References.propTypes = referencesType;

export default References;
