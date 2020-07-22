import React, { useContext } from 'react';
import './profile.styles.scss';
import MakePost from '../make-post/make-post.component';
import Feed from '../feed/feed.component';
import FeedHeader from '../feed-header/feed-header.component';
import UsersPane from '../users-pane/users-pane.component';
import { AdminContext } from '../../context/admin-context';
import { useHistory } from 'react-router-dom';

const Profile = ({ user, posts }) => {
  const { admin } = useContext(AdminContext);
  const { push } = useHistory();

  return (
    <div className='profile'>
      <div className='header' onClick={() => push('/home')} />
      {user && (
        <div className='bio'>
          <div className='profile-avatar'>
            {user.first_name.charAt(0).toUpperCase() +
              user.last_name.charAt(0).toUpperCase()}
          </div>
          <p>
            {user.first_name} {user.last_name}
          </p>
        </div>
      )}
      <div className='desktop'>
        <div className='content'>
          {admin && admin.id === user.id && (
            <div className='make-a-post'>
              <MakePost />
            </div>
          )}
          {posts &&
            posts.map(post => (
              <div key={post.id} className='display-post'>
                <FeedHeader
                  userID={post.user_id}
                  time={post.created_at}
                  post={post}
                />
                <Feed postProp={post} />
              </div>
            ))}
        </div>
        <div className='side-pane'>
          <UsersPane />
        </div>
      </div>
    </div>
  );
};

export default Profile;
