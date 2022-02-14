import { Grid, Progress } from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";
import shortid from "shortid";

import { bold, c, colors, faded } from "./styles";
import { skillsType } from "../../person";

const GetColor = (level) => {
  switch (true) {
    case level >= 95:
      return "violet";
    case level >= 90:
      return "blue";
    case level >= 75:
      return "blue";
    case level >= 60:
      return "teal";
    case level >= 45:
      return "green";
    case level >= 30:
      return "olive";
    case level >= 15:
      return "yellow";
    case level >= 0:
      return "red";
    default:
      return "black";
  }
};

const Skill = ({ name, level, keywords }) => {
  return (
    <Grid.Column width={3}>
      <div style={{ textAlign: "center" }}>
        <span style={c(bold, faded(colors.black))}>{name}</span>
        <Progress
          percent={level}
          active
          color={GetColor(parseInt(level, 10))}
          size="small"
        />
      </div>
    </Grid.Column>
  );
};

Skill.defaultProps = {
  keywords: [],
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

const Skills = ({ skills }) => {
  return (
    <Grid.Row style={{ marginTop: "50px" }}>
      {skills.map((j) => (
        <Skill
          key={shortid.generate()}
          name={j.name}
          level={j.level}
          keywords={j.keywords}
        />
      ))}
    </Grid.Row>
  );
};

Skills.defaultProps = {
  skills: [],
};

Skills.propTypes = skillsType;

export default Skills;
