import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../app/actions/userAction";

const UserListUpdated = () => {
  const state = useSelector((store) => store.updatedReducer);
  console.log(state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {state.isLoading ? (
        <h1>Yükleniyor</h1>
      ) : state.isError ? (
        <h1>{state.isError}</h1>
      ) : (
        state.users.map((i) => <h1 key={i.id}>{i.name}</h1>)
      )}
    </div>
  );
};

export default UserListUpdated;
