import React, { useState } from "react";
import Error from "../../components/models/error";
import Success from "../../components/models/success";
import Warning from "../../components/models/warning";

const Profile = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <button onClick={() => setopen(true)}>Click</button>
      <Warning handleClose={() => setopen(false)} open={open} isButton isCloseButton isIcon />
    </>
  );
};

export default Profile;
