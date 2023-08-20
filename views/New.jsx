import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";

function New() {
  return (
    <DefaultLayout>
    <div>
      <form action="/logs" method="POST" className="form">
        <label htmlFor="title">Title: </label>
        <input type="text" name="title"></input>
        <br />
        <label htmlFor="entry">Entry: </label>
        <input type="textarea" name="entry"></input>
        <br />
        <label htmlFor="shipIsBroken">Ship Is Broken: </label>
        <input type="checkbox" name="shipIsBroken"></input>
        <br />
        {/* <input className="sumbits" type="submit"></input> */}
        <button>sumbit</button>
      </form>
    </div>
    </DefaultLayout>
  );
}

export default New;