// The root page should contain the following:

// The heading: CPRG 306: Web Development 2 - Assignments
// A link to the week-2 page you created above
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">week-2 page</Link>
    </main>
  );
}
