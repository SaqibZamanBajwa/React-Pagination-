import { useState } from "react";
import "./App.css";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";

function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 10));
  // state for pagination
  const [pageNumber, setPageNumber] = useState(0); // 0 is the current page number.

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  // logic to display items/users per page;
  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
    return (
      <div className="border-2 border-black rounded-2xl w-[30%] py-8 px-4 my-4 bg-orange-600">
              <h3 className="text-wheat">{user.firstName}</h3>
              <h3 className="text-wheat">{user.lastName}</h3>
              <h3 className="text-wheat">{user.email}</h3>
            </div>
    )
  })
  return (
    <>
      <div className="flex flex-col items-center bg-amber-300">
        {displayUsers}
      </div>
    </>
  );
}

export default App;
