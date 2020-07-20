import React from 'react';
import './reply-box.styles.scss';

const ReplyBox = ({ comment }) => {
  const createdTime = new Date(comment.created_at);
  const currentTime = new Date();

  let difference = currentTime.getTime() - createdTime.getTime();

  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  let hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  let minutesDifference = Math.floor(difference / 1000 / 60);

  let time;
  if (daysDifference > 0) {
    time = daysDifference + 'd';
  } else if (hoursDifference > 0 && daysDifference <= 0) {
    time = hoursDifference + 'h';
  } else if (
    minutesDifference > 0 &&
    hoursDifference <= 0 &&
    daysDifference <= 0
  ) {
    time = minutesDifference + 'm';
  }

  return (
    <>
      {comment && (
        <div className='reply-box'>
          <span className='time'>{time} </span>
          <span className='like'> Like</span>
          <span className='reply'> Reply</span>
        </div>
      )}
    </>
  );
};

export default ReplyBox;
