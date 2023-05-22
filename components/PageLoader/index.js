import classes from './pageLoader.module.css';

function PageLoader() {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
    </div>
  );
}

export default PageLoader;
