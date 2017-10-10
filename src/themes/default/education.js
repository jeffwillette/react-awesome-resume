import { Grid, Icon } from 'semantic-ui-react';
import React from 'react';
import shortid from 'shortid';

import { ButtonHighlights, CardHighlights } from './generic';
import { bold, c, color, colors, emOneTwo, emTwo } from './styles';
import { educationType } from '../../person';

const Education = ({ education }) => {
  return (
    <div>
      {education.map(j => (
        <CardHighlights
          key={shortid.generate()}
          color={colors.teal}
          title={
            <span style={c(emTwo, bold, color(colors.teal))}>
              <Icon name="university" />
              {`${j.institution}: ${j.area}`}
            </span>
          }
          subtitle={
            <div style={c(emOneTwo, color(colors.grey), bold)}>
              <Grid columns="equal">
                <Grid.Column textAlign="left">
                  <Icon name="certificate" />
                  {`${j.studyType}: `}
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Icon name="calendar" />
                  {`${j.startDate} - ${j.endDate} `}
                </Grid.Column>
                <Grid.Column textAlign="right">
                  <Icon name="star" />{`GPA: ${j.gpa}`}
                </Grid.Column>
              </Grid>
            </div>
          }
          highlights={
            <ButtonHighlights
              icon="graduation"
              highlights={j.courses}
              color="teal"
            />
          }
        />
      ))}
    </div>
  );
};

Education.defaultProps = {
  education: [],
};

Education.propTypes = educationType;

export default Education;
