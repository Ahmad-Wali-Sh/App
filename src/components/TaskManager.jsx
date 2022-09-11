import React, { useState } from "react";
import { useRef } from "react";
//import { useContext } from "react";
//import { useEffect } from "react";
//import { Link, Routers , Route } from "react-router-dom";
import axios from "axios";
import GeneralDetails from "./GeneralDetails";
import Troubleshoot from "./Troubleshoot";
import Amendment from "./Amendment";
import OnlineSupport from "./OnlineSupport";
import ChangeLocation from "./ChangeLocation";
import LogMessage from "./LogMessage";
import { Details, MainDetails } from "./Details";

export default function TaskManager(props) {
  // console.log(props);

  let contractState = {
    contract_no: "",
    full_name: "",
    contract: "",
    organization: "",
    address: "",
    package: "",
  };

  let taskProjectState = {
    selectedProject: "",
  };

  let switchInitialState = {
    switch: false,
  };

  const url = process.env.REACT_APP_CONTRACT;
  // const token = useContext(Context);
  const [contract, setContract] = useState(contractState);
  const [project, setProject] = useState(taskProjectState);
  let [switchState, setSwitchState] = useState(switchInitialState);
  let contratsLength = 0;
  const contractNoRef = useRef();
  const projectRef = useRef();

  function handleChange(event) {
    setProject({ selectedProject: event.target.value });
    console.log(event.target.value);
  }

  function handleSwitch(e) {
    // console.log(switchState)
    // setSwitchState({
    //   ...switchState,
    //   switch: !e.target.value
    // })
    // console.log({switchState})
    let isChecked = e.target.checked;
    console.log(isChecked);
  }
  const token = "ABCdeadjfai"
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        url + `?contract-no=${contractNoRef.current.value}`,
        {
          headers: {
            Authorization: "Token " + token.user.token,
          },
        }
      );
      console.log(res.data.results);
      const data = res.data.results[0];
      // console.log(contractNoRef.current.value)
      setContract({
        ...contract,
        package: data.packages,
        address: data.address,
        organization: data.organization,
        contact: data.poc_number,
        full_name: data.poc_name,
        contract_no: data.contract_no,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   const renderProjectForm = async () => {
  //     setProject({
  //       ...project,
  //       selectedProject: projectRef.current.value
  //     })
  //   };
  //   renderProjectForm();
  // }, []);

  return (
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">{/* <h1>Device Form</h1> */}</div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                  </li>
                  <li className="breadcrumb-item active">Project</li>
                </ol>
              </div>
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </section>
        <section className="content">
          <div className="container">
            <div className="row mb-5">
              <div className="col-10 offset-md-1">
                <h3 className="float-left">Tasks&nbsp;</h3>
                <button
                  type="button"
                  name="addTask"
                  className="btn btn-secondary rounded-circle"
                  data-bs-toggle="modal"
                  data-bs-target="#addTaskModal"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
                <div
                  className="modal fade"
                  id="addTaskModal"
                  tabIndex="-1"
                  role="dialog"
                  // aria-lablledby="addTaskModalTitle"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                      <div className="modal-header bg-primary">
                        <h5 className="modal-title" id="addTaskModalTitle">
                          New Task
                        </h5>
                        <button
                          type="button"
                          className="close "
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <i class="fa-regular fa-circle-xmark icon"></i>
                        </button>
                      </div>
                      <div className="modal-body">
                        <ul
                          className="nav nav-pills nav-justified"
                          id="mytab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="home-tab-pane"
                              aria-selected="true"
                            >
                              Details
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#profile-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="profile-tab-pane"
                              aria-selected="false"
                            >
                              Members
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="home-tab-pane"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                            tabIndex="0"
                          >
                            <form onSubmit={handleSubmit}>
                              {/* <div className="input-group flex-nowrap mt-3">
                                <span
                                  className="input-group-text"
                                  id="addon-wrapping"
                                >
                                  <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Find customer"
                                  aria-label="Username"
                                  aria-describedby="addon-wrapping"
                                  ref={contractNoRef}
                                />
                              </div> */}
                              <div className="input-group mb-3 mt-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Find customer"
                                  aria-label="Recipient's username"
                                  aria-describedby="button-addon2"
                                  ref={contractNoRef}
                                />
                                <button
                                  className="btn btn-outline-secondary"
                                  type="submit"
                                  id="button-addon2"
                                >
                                  Find
                                </button>
                              </div>
                            </form>
                            <div className="mb-5">
                              <div className="row">
                                <div className="col-1 col-sm-1">
                                  <label
                                    htmlFor="project"
                                    className="col-form-label text-muted"
                                  >
                                    Project
                                  </label>
                                </div>
                                <div className="col-3 col-sm-4">
                                  <select
                                    className="form-select"
                                    id="project"
                                    aria-label="Default select example"
                                    ref={projectRef}
                                    name="project"
                                    onChange={handleChange}
                                    value={project.selectedProject}
                                  >
                                    <option value="select" disabled>
                                      Select
                                    </option>
                                    <option value="installation">
                                      Installation
                                    </option>
                                    <option value="troubleshoot">
                                      Troubleshoot
                                    </option>
                                    <option value="onlineSupport">
                                      Online Support
                                    </option>
                                    <option value="changeLocation">
                                      Change Location
                                    </option>
                                    <option value="amendment">Amendment</option>
                                    <option value="survey">Survey</option>
                                  </select>
                                </div>
                                <div className="col-1"></div>
                                {/* <div className="col-2 col-sm-1"></div> */}
                                <div className="col-1 col-sm-1">
                                  <label
                                    htmlFor="project"
                                    className="col-form-label text-muted"
                                  >
                                    Customer
                                  </label>
                                </div>
                                <div className="col-5 col-sm-5">
                                  <div className="input-group mb-3">
                                    <span
                                      className="input-group-text"
                                      id="basic-addon1"
                                    >
                                      <i className="fa-solid fa-user"></i>
                                    </span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="contract number"
                                      aria-label="Username"
                                      aria-describedby="basic-addon1"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-1 col-sm-1">
                                  <label
                                    htmlFor="deadline"
                                    className="col-form-label text-muted"
                                  >
                                    Deadline
                                  </label>
                                </div>
                                <div className="col-3 col-sm-4">
                                  <div className="input-group mb-3">
                                    <input
                                      type="date"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-1">
                                  <label
                                    htmlFor="tag"
                                    className="col-form-label text-muted"
                                  >
                                    Tag
                                  </label>
                                </div>
                                <div className="col-5 col-sm-5">
                                  <div className="input-group">
                                    <label
                                      className="input-group-text"
                                      htmlFor="tag"
                                    >
                                      <i className="fa-solid fa-tag"></i>
                                    </label>
                                    <select
                                      className="form-select"
                                      id="tag"
                                      aria-label="Default select example"
                                    >
                                      <option >Normal</option>
                                      <option value="1">Urgent</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {project.selectedProject == "installation" && (
                              <GeneralDetails
                                contract_no={contract.contract_no}
                                full_name={contract.full_name}
                                contact={contract.contact}
                                organization={contract.organization}
                                address={contract.address}
                                package={contract.package}
                              />
                            )}
                            {project.selectedProject == "onlineSupport" && (
                              <OnlineSupport />
                            )}

                            {/* END ONLINE SUPPORT */}

                            {/* TROUBLESHOOT SECTION */}
                            {project.selectedProject == "troubleshoot" && (
                              <Troubleshoot />)}
                            {project.selectedProject == "changeLocation" && (
                              <ChangeLocation />
                            )}


                            {/* AMENDMENT */}
                            {project.selectedProject == "amendment" && (
                              <Amendment />
                            )}
                            {/* END AMENDMENT */}

                            {/* LOG NOTE AND MESSAGE */}
                            <LogMessage />
                            {/* END LOG NOTE AND MESSAGE */}

                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        {/* <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Close
                        </button> */}
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => console.log("Clicked")}
                        >
                          Create Task
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Details title="Installation">
              <MainDetails name="INSO Herat" internet="6Mb-24h Dedicated" status="Urgent" number="0/3" badge="danger" />
              <MainDetails name="Mohammad Ishaaq Yamayee" internet="3Mb-12h Shared" status="Normal" number="2/4" badge="primary" />
            </Details>
            <Details title="Troubleshoot">

              <MainDetails name="Hafiz Morady" internet="7Mb-24h Dedicated" status="Normal" number="2/5" badge="primary" />
              <MainDetails name="CRS NGO" internet="10Mb-24h Dedicated" status="Complete" number="5/5" badge="success" />
            </Details>
            <Details title="Online Support">
              <MainDetails name="Mored Arian" internet="5Mb-24h Dedicated" status="Normal" number="1/2" badge="primary" />
              <MainDetails name="Nawid Rasooly" internet="2Mb-12h Dedicated" status="Pending" number="1/5" badge="warning" />
            </Details>

          </div>
        </section>
      </div>
    </div>
  );
}

