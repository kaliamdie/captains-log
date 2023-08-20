import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";

function Show({ log }) {
  return (
    <DefaultLayout>
    <div>
      <p className="title"> Title: {log.title}</p>
      <br />
      <p>Entry: {log.entry}</p>
      <br />
      <p>{log.shipIsBroken ? "Ship Broken" : "Ship NOT Broken"}</p>
      <br />
      <a className="link" href="/logs">Back</a>
    </div>
    </DefaultLayout>
  );
}

export default Show;