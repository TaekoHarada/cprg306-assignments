// The root page should contain the following:

// The heading: CPRG 306: Web Development 2 - Assignments
// A link to the week-2 page you created above
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-lg">CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <Link href="/week-2">week-2 page</Link>
      </div>
      <div>
        <Link href="/week-3">week-3 page</Link>
      </div>
    </main>
  );
}
