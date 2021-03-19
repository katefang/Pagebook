import React from 'react';
import './reply-box.styles.scss';

const ReplyBox = ({ comment }) => {
  const createdTime = new Date(comment.created_at);
  const currentTime = new Date();

  let years = Math.floor(
    (currentTime.getMonth() - createdTime.getMonth()) / 12
  );
  let months = Math.floor(currentTime.getMonth() - createdTime.getMonth());
  let days = Math.floor(
    (currentTime.getTime() - createdTime.getTime()) / 1000 / 60 / 60 / 24
  );
  let hours = Math.floor(currentTime.getHours() - createdTime.getHours());
  let minutes = Math.floor(currentTime.getMinutes() - createdTime.getMinutes());

  // let difference = currentTime.getTime() - createdTime.getTime();

  // let monthsDifference = Math.floor(difference / 1000 / 60 / 60 / 24 /30)
  // let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  // let hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  // let minutesDifference = Math.floor(difference / 1000 / 60);
  console.log(years);

  let time;
  if (years > 0) {
    time = years + 'y';
  } else if (months > 0 && years <= 0) {
    time = months + 'm';
  } else if (days > 0 && months <= 0 && years <= 0) {
    time = days + 'd';
  } else if (hours > 0 && days <= 0 && months <= 0 && years <= 0) {
    time = hours + 'h';
  } else if (
    minutes > 0 &&
    hours <= 0 &&
    days <= 0 &&
    months <= 0 &&
    years <= 0
  ) {
    time = minutes + 'm';
  }

  return (
    <>
      {comment && (
        <div className='reply-box'>
          <span className='time'>{time} </span>
        </div>
      )}
    </>
  );
};

export default ReplyBox;
