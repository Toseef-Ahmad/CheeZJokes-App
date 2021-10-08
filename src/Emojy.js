import React, { useState, useEffect } from 'react';
import './Emojy.css';

const Emojy = (props) => {
  const emojyList = [
    'em em-laughing',
    'em em-rolling_on_the_floor_laughing',
    'em em-anguished',
    'em em-angry',
    'em em-smiley',
    'em em-sweat-smile',
    'em em-disappointed',
    'em em-expressionless',
  ];
  const selectEmojy = () => {
    const voting = props.vote;
    console.log(voting);
    if (voting >= 15) {
      return emojyList[1];
    } else if (voting >= 12) {
      return emojyList[5];
    } else if (voting >= 9) {
      return emojyList[4];
    } else if (voting >= 3) {
      return emojyList[0];
    } else if (voting >= 0) {
      return emojyList[0];
    } else if (voting >= -2) {
      return emojyList[2];
    } else {
      return emojyList[3];
    }
  };
  return (
    <>
      <div className="Emojy">
        <i className={`${selectEmojy()}`}></i>
      </div>
    </>
  );
};

export default Emojy;
