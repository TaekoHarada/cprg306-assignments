// The root page should contain the following:

// The heading: CPRG 306: Web Development 2 - Assignments
// A link to the week-2 page you created above
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="m-5">
        <li className="pb-3">
          <Link href="/week-2">→ week-2 page</Link>
        </li>
        <li className="pb-3">
          <Link href="/week-3">→ week-3 page</Link>
        </li>
        <li className="pb-3">
          <Link href="/week-4">→ week-4 page</Link>
        </li>
        <li className="pb-3">
          <Link href="/week-5">→ week-5 page</Link>
        </li>
        <li className="pb-3">
          <Link href="/week-6">→ week-6 page</Link>
        </li>
        <li className="pb-3">
          <Link href="/week-7">→ week-7 page</Link>
        </li>
      </ul>
    </main>
  );
}
