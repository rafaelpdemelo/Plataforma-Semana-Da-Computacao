import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const { pathname } = useLocation();

  const page = pathname.split("/")[2];

  return (
    <nav className="">
      <ul className="flex gap-6">
        <li className={`py-7 text-gray-300 border-green-500 ${page !== "cronograma" && 'border-b-2 font-bold text-gray-100'}`}>
          <Link to={`/event`}>Aulas</Link>
        </li>

        <li className={`py-7 text-gray-300 border-green-500 ${page === "cronograma" && 'border-b-2 font-bold text-gray-100'}`}>
          <Link to={`/event/cronograma`}>Cronograma</Link>
        </li>
      </ul>
    </nav>
  );
}
