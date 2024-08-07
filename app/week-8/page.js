"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, signUp, signIn, firebaseSignOut } = useUserAuth();

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

  const handleSignOut = async () => {
    try {
      if (user) {
        const result = await firebaseSignOut();
        console.log(result);
      } else {
        console.log("User is already signed out:", user);
      }
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <main>
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleSignOut}
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold text-sm py-2 px-4 rounded"
          >
            Sign Out
          </button>
          <Link href="/week-8/shopping-list">Shopping List</Link>
        </>
      ) : (
        <button
          onClick={handleSignIn}
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold text-sm py-2 px-4 rounded"
        >
          Login with GitHub
        </button>
      )}
    </main>
  );
}
