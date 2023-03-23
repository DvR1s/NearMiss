import React from "react";
import SubmitedCSS from "./submited.module.css";
import Report from "../report/Report";

function Submited({ report, signOff, removeReport }) {
  return (
    <div className={SubmitedCSS.container}>
      <div className={SubmitedCSS.box}>
        <h3>Name</h3>
        <h3>Department</h3>
        <h3>Date</h3>
        <h3>Which site</h3>
        <h3>Which department</h3>
        <h3>Relation</h3>
        <h3>Reason</h3>
        <h3>Description</h3>
        <h3>Completion</h3>
        <h3>Sign off</h3>
      </div>
      {report.map((rep) => {
        return (
          <Report
            key={rep.id}
            rep={rep}
            signOff={signOff}
            removeReport={removeReport}
          />
        );
      })}
    </div>
  );
}

export default Submited;
