import React from "react";
/*
    Propsları değişmediği sürece yeninden render edilmez.

*/
const MemoizedComponent = React.memo(({ name }) => {
  return <div>{name}</div>;
});

const NewExample1 = () => {
  return (
    <div>
      <MemoizedComponent name={"test"} />
    </div>
  );
};

export default NewExample1;
