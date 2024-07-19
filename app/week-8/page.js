"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const handleSignIn = async () => {
      try {
        if (!user) {
          const result = await gitHubSignIn();
          console.log(result);
          setLoginUser(result.user);
        } else {
          setLoginUser(user);
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
      }
    };

    handleSignIn();
  }, [user, gitHubSignIn]);

  return (
    <main>
      {loginUser ? (
        <>
          <p>
            Welcome, {loginUser.displayName} ({loginUser.email})
          </p>
          <button onClick={firebaseSignOut}>Sign Out</button>
          <Link href="/week-8/shopping-list">Shopping List</Link>
        </>
      ) : (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      )}
    </main>
  );
}
