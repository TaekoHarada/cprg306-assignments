"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(() => {
    const handleSignIn = async () => {
      try {
        if (!user) {
          const result = await gitHubSignIn();
          console.log(result);
        } else {
          console.log("User is already signed in:", user);
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
      }
    };

    handleSignIn();
  }, [user, gitHubSignIn]);

  return (
    <main>
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
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
