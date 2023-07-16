import {
  Container,
  Label,
  List,
  Percentage,
  Title,
} from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </li>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};

export default Statistics;
