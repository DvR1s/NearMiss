import React, { useState } from "react";
import ReportFormCSS from "./reportForm.module.css";

function ReportForm({ setReport }) {
  const [name, setName] = useState("");
  const [dep, setDep] = useState("");
  const [wSite, setWSite] = useState("");
  const [wDep, setWdep] = useState("");
  const [related, setRelated] = useState("");
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");

  function handleChange(e) {
    setRelated(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dateControl = document.getElementById("rDate").value;
    const report = {
      id: crypto.randomUUID(),
      name,
      dep,
      dateControl,
      wSite,
      wDep,
      related,
      reason,
      description,
      completed: false,
      complition: "not completed",
    };
    setReport((prev) => {
      return [...prev, report];
    });
    document.getElementById("nearMissForm").reset();
  }
  return (
    <form
      id="nearMissForm"
      className={ReportFormCSS.container}
      onSubmit={handleSubmit}
    >
      <h2>Log a Near Miss</h2>
      <div className={ReportFormCSS.box}>
        <label className={ReportFormCSS.title}>Name</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        ></input>
      </div>
      <div className={ReportFormCSS.box}>
        <label className={ReportFormCSS.title}>
          What department do you work for
        </label>
        <select
          onChange={(e) => {
            setDep(e.target.value);
          }}
          required
        >
          <option value="">---</option>
          <option value="Office">Office</option>
          <option value="Production">Production</option>
          <option value="Logistics">Logistics</option>
        </select>
      </div>
      <div className={ReportFormCSS.box}>
        <label className={ReportFormCSS.title}>
          Date the near miss took place
        </label>
        <input type="date" id="rDate" required></input>
      </div>
      <div className={ReportFormCSS.box}>
        <label className={ReportFormCSS.title}>
          At which Site did the near miss take place
        </label>
        <select
          onChange={(e) => {
            setWSite(e.target.value);
          }}
          required
        >
          <option value="">---</option>
          <option value="London">Office</option>
          <option value="Cambridge">Production</option>
          <option value="Norfolk">Logistics</option>
        </select>
      </div>
      <div className={ReportFormCSS.box}>
        <label className={ReportFormCSS.title}>Where did it happen</label>
        <select
          onChange={(e) => {
            setWdep(e.target.value);
          }}
          required
        >
          <option value="">---</option>
          <option value="Office">Office</option>
          <option value="Production">Production</option>
          <option value="Logistics">Logistics</option>
        </select>
      </div>
      <div className={ReportFormCSS.box}>
        <label className={ReportFormCSS.title}>Is it related to :</label>
        <div className={ReportFormCSS.related} onChange={handleChange}>
          <input
            id="Health"
            type="radio"
            name="relation"
            value="Health"
          ></input>
          <label htmlFor="Health">Health</label>
          <input
            id="Safety"
            type="radio"
            name="relation"
            value="Safety"
          ></input>
          <label htmlFor="Safety">Safety</label>
          <input
            id="Environment"
            type="radio"
            name="relation"
            value="Environment"
          ></input>
          <label htmlFor="Environment">Environment</label>
        </div>
      </div>
      <div className={ReportFormCSS.box}>
        <label className={ReportFormCSS.title}>
          Why have you reported this
        </label>
        <select
          onChange={(e) => {
            setReason(e.target.value);
          }}
          required
        >
          <option value="">---</option>
          <option value="Going to injure a person">
            Going to injure a person
          </option>
          <option value="Going to damage property">
            Going to damage property
          </option>
          <option value="Unsafe behaviour">Unsafe behaviour</option>
          <option value="Unsafe condition">Unsafe condition</option>
          <option value="Environmental Impact">Environmental Impact</option>
        </select>
      </div>
      <div className={ReportFormCSS.box}>
        <label className={ReportFormCSS.title}>Describe what happened</label>
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        ></textarea>
      </div>
      <input className={ReportFormCSS.submit} type="submit"></input>
    </form>
  );
}

export default ReportForm;
