import { Icon } from 'semantic-ui-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import shortid from 'shortid';

import { CardHighlights } from './generic';
import { awardsType } from '../../person';
import { bold, c, color, colors, emOneTwo, emTwo, faded } from './styles';

const Awards = ({ awards }) => {
  return (
    <div>
      {awards.map(j => (
        <CardHighlights
          color={colors.purple}
          key={shortid.generate()}
          title={
            <span style={c(emTwo, bold, color(colors.purple))}>
              <Icon name="star" />{j.title}
            </span>
          }
          subtitle={
            <span style={c(emOneTwo, color(colors.grey))}>
              <Icon name="thumbs up" />{j.awarder}
              <Icon name="calendar" style={{ marginLeft: '50px' }} />{j.date}
            </span>
          }
          text={
            <span style={c(emOneTwo, faded(colors.black))}>
              <ReactMarkdown source={j.summary} />
            </span>
          }
        />
      ))}
    </div>
  );
};

Awards.defaultProps = {
  awards: [],
};

Awards.propTypes = awardsType;

export default Awards;
