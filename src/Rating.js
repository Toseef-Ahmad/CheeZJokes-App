import React from 'react';
import './Rating.css';

const Rating = (props) => {
  const colorList = [
    '#F44336',
    '#FF5721',
    '#FF9800',
    '#FFC107',
    '#FFEF6C',
    '#CDDC39',
    '#8CC34A',
    '#4DAF50',
  ];

  const selectColor = () => {
    const voting = props.vote;
    if (voting >= 15) {
      return colorList[0];
    } else if (voting >= 12) {
      return colorList[1];
    } else if (voting >= 8) {
      return colorList[2];
    } else if (voting >= 4) {
      return colorList[3];
    } else if (voting >= 0) {
      return colorList[4];
    }
  };

  const styles = {
    votingBorder: {
      borderColor: selectColor(),
    },
  };

  return (
    <>
      <div className="Rating">
        <div className="Rating-button">
          <l className="fas fa-arrow-up" onClick={() => props.handleVotes(1)} />
          <span className="Rating-votes" style={styles.votingBorder}>
            {props.vote}
          </span>
          <l
            className="fas fa-arrow-down"
            onClick={() => props.handleVotes(-1)}
          />
        </div>
      </div>
    </>
  );
};

Rating.defaultProps = {
  voting: 0,
};

export default Rating;
