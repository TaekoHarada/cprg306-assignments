import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1>Student Info</h1>
      <ul className="m-5">
        <li className="pb-3">
          Name: <span className="font-bold">Taeko Harada </span>
        </li>
        <li className="pb-3">
          <Link href="https://github.com/TaekoHarada">→ Git Hub</Link>
        </li>
      </ul>
    </main>
  );
}
