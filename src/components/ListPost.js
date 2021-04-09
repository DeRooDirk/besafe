import React from "react";
import AlertPost from "../components/AlertPost";
import MessagePost from "../components/MessagePost";

const ListPost = (props) => {
  const components = {
    Alert: AlertPost,
    Message: MessagePost,
  };
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <>
      {repos.map((repo) => {
        const NewPost = components[repo.type];
        return <NewPost data={repo} key={repo.id} />;
      })}
    </>
  );
};
export default ListPost;
