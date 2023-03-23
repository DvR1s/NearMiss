import React from "react";
import ReportCSS from "./report.module.css";

function Report({ rep, signOff, removeReport }) {
  function handleSignOff() {
    signOff(rep.id);
  }

  function remove() {
    removeReport(rep.id);
  }

  return (
    <div>
      <div
        className={
          rep.completed
            ? ReportCSS.containerCompleted
            : ReportCSS.containerNotCompleted
        }
      >
        <div>{rep.name}</div>
        <div>{rep.dep}</div>
        <div>{rep.dateControl}</div>
        <div>{rep.wSite}</div>
        <div>{rep.wDep}</div>
        <div>{rep.related}</div>
        <div>{rep.reason}</div>
        <div>{rep.description}</div>
        <div>{rep.complition}</div>
        <button
          className={ReportCSS.button}
          onClick={rep.completed ? remove : handleSignOff}
        >
          {rep.completed ? "Delete" : "Sign Off"}
        </button>
      </div>
    </div>
  );
}

export default Report;
