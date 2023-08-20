import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";

function Index({ logs }) {
  return (
    <DefaultLayout>
    <div>
      <h1>Logs</h1>
      <ul>
        {logs.map((log) => (
          <li key={log._id}>
            {log.title}
           <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
              <input type="hidden" name="_method" value="DELETE" />
              <input className="delete" type="submit" value="Delete" />
            </form>
            <a href={`/logs/${log._id}/edit`}>Edit</a>

          </li>
        ))}
        <br />
        <a href={"/new"}>Create</a>
      </ul>
    </div>
    </DefaultLayout>
  );
}
export default Index;