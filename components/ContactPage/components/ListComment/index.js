import CommentItem from '../CommentItem';

import classes from '../../contact.module.css';

function ListComment({ posts = [] }) {

   const renderContent = () => {
    if (posts.length === 0) return <p>Empty comment !!!</p>;
    return (
      <ul className={classes.postItem}>
        {posts.map((post) => (
          <CommentItem key={post._id} post={post} />
        ))}
      </ul>
    );
  };
  return (
    <section>
      <h1>All comment</h1>
      {renderContent()}
    </section>
  );
}

export default ListComment;
