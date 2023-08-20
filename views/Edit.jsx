import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";

function Edit({ log }) {
  
  return (
    <DefaultLayout>
      <div>
      <h1>Edit</h1>
      <form action={`/logs/${log._id}?_method=PATCH`} method="POST">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" defaultValue={log.title} />

        <label htmlFor="entry">Entry:</label>
        <input type="textarea" name="entry" id="entry" defaultValue={log.entry} />

        <label htmlFor="shipIsBroken">Ship is broken:</label>
        <input
          type="checkbox"
          id="shipIsBroken"
          name="shipIsBroken"
         defaultChecked={log.shipIsBroken ? false : true}
        />

        <input type="submit" value="Submit" className="submits" />
      </form>
      <form action={`/logs/${log._id}`} method="GET">
        <button className="back">Back</button>
      </form>
    </div>
        </DefaultLayout>
  );
}

export default Edit;