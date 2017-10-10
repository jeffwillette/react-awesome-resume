import { Icon } from 'semantic-ui-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import shortid from 'shortid';

import { ButtonHighlights, CardHighlights, ExtLink } from './generic';
import { bold, c, color, colors, emOneTwo, emTwo, faded } from './styles';
import { volunteerType } from '../../person';

const Volunteer = ({ volunteer }) => {
  return (
    <div>
      {volunteer.map(j => (
        <CardHighlights
          key={shortid.generate()}
          color={colors.purple}
          title={
            <span style={c(emTwo, bold, color(colors.purple))}>
              <Icon name="building outline" />
              {j.website
                ? <ExtLink
                  href={j.website}
                  text={j.organization}
                  color={colors.purple}
                />
                : j.organization}
              <Icon name="male" />{j.position}
            </span>
          }
          subtitle={
            <span style={c(emOneTwo, color(colors.grey))}>
              <Icon name="calendar" margin="10" />
              {`( ${j.startDate} - ${j.endDate} )`}
            </span>
          }
          text={
            <span style={c(emOneTwo, faded(colors.black))}>
              <ReactMarkdown source={j.summary} />
            </span>
          }
          highlights={
            <ButtonHighlights
              icon="check"
              highlights={j.highlights}
              color="purple"
            />
          }
        />
      ))}
    </div>
  );
};

Volunteer.defaultProps = {
  volunteer: [],
};

Volunteer.propTypes = volunteerType;

export default Volunteer;
