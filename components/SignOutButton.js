"use client";

import { signOut } from "next-auth/react";

const homeUrl = "/";

const SignOutButton = () => {
  return (
    <button
      className="btn btn-neutral"
      onClick={() => {
        signOut({ callbackUrl: homeUrl });
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
