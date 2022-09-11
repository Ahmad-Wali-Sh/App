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
                            <i class="fa-regular fa-circle-xmark"></i>
                          
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
            <div className="row">
              <div className="col-10 offset-md-1">
                <div className="card">
                  <div className="card-header">
                    <h3>Installtion</h3>
                  </div>
                  <div className="card-body">
                    {/* <div className="cardItem">
                        <div className="row">
                          <div className="col-8">
                            <div className="cardTitleText bold">Mohammad Reza Rahimi</div>
                            <p className='text-muted'>Package-85GB-2Month-1Mbps-(0-8)Free</p>
                            <br />
                            <p className="cardText bold">Today</p>
                          </div>
                          <div className="col-4 ttt">
                            <img src="/dist/img/avatar1.jpeg" alt="avatar" className="avatar" />
                            <img src="/dist/img/avatar2.jpeg" alt="avatar" className="avatar" />
                            <img src="/dist/img/avatar3.jpeg" alt="avatar" className="avatar" />
                            <img src="/dist/img/avatar4.jpg" alt="avatar" className="avatar" />
                          </div>
                        </div>
                      </div> */}
                    <div className="cardItem">
                      <div className="row">
                        <div className="col-8">
                          <div className="cardTitleText bold">INSO Herat</div>
                          <p className="text-muted">6Mb-24h Dedicated</p>
                        </div>
                        <div className="col-4 ttt">
                          <div className="float-left">
                            <img
                              src="/dist/img/avatar4.jpg"
                              alt="avatar"
                              className="avatar"
                            />
                            <img
                              src="/dist/img/avatar1.jpeg"
                              alt="avatar"
                              className="avatar"
                            />
                            <img
                              src="/dist/img/avatar2.jpeg"
                              alt="avatar"
                              className="avatar"
                            />
                          </div>
                          <div className="buttons">
                            <button className="btn tools">
                              <i className="fa-solid fa-list-check"></i> 0/3
                            </button>
                            {/* <button className="btn">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                              </button> */}
                            <div className="dropdown">
                              {/* <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Dropdown button
                                </button> */}
                              <button
                                className="btn tools"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a
                                    className="dropdown-item text-primary"
                                    href="#"
                                  >
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item text-danger" href="#">
                                    Archive
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="taskBottom">
                          <p className="cardText bold">
                            <i className="fa-solid fa-clock"></i> Today
                          </p>
                          <h5>
                            <span className="badge bg-danger">Urgent</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="cardItem">
                      <div className="row">
                        <div className="col-8">
                          <div className="cardTitleText bold">Hadi Afzali</div>
                          <p className="text-muted">
                            Package-85GB-2Month-1Mbps-(0-8)Free
                          </p>
                        </div>
                        <div className="col-4 ttt">
                          <div className="float-left">
                            <img
                              src="/dist/img/avatar4.jpg"
                              alt="avatar"
                              className="avatar"
                            />
                            <img
                              src="/dist/img/avatar1.jpeg"
                              alt="avatar"
                              className="avatar"
                            />
                            <img
                              src="/dist/img/avatar3.jpeg"
                              alt="avatar"
                              className="avatar"
                            />
                          </div>
                          <div className="buttons">
                            <button className="btn tools">
                              <i className="fa-solid fa-list-check"></i> 3/4
                            </button>
                            <button className="btn tools">
                              <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                          </div>
                        </div>
                        <div className="taskBottom">
                          <p className="cardText bold">
                            <i className="fa-solid fa-clock"></i> 1 day
                          </p>
                          <h5>
                            <span className="badge bg-primary">Normal</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10 offset-md-1">
                <div className="card">
                  <div className="card-header">
                    <h3>Troubleshoot</h3>
                  </div>
                  <div className="card-body">
                    {/* <div className="cardItem">
                        <div className="row">
                          <div className="col-8">
                            <div className="cardTitleText bold">Mohammad Reza Rahimi</div>
                            <p className='text-muted'>Package-85GB-2Month-1Mbps-(0-8)Free</p>
                            <br />
                            <p className="cardText bold">Today</p>
                          </div>
                          <div className="col-4 ttt">
                            <img src="/dist/img/avatar1.jpeg" alt="avatar" className="avatar" />
                            <img src="/dist/img/avatar2.jpeg" alt="avatar" className="avatar" />
                            <img src="/dist/img/avatar3.jpeg" alt="avatar" className="avatar" />
                            <img src="/dist/img/avatar4.jpg" alt="avatar" className="avatar" />
                          </div>
                        </div>
                      </div> */}
                    <div className="cardItem">
                      <div className="row">
                        <div className="col-8">
                          <div className="cardTitleText bold">
                            Said Mohammad Moosavi
                          </div>
                          <p className="text-muted">Signal and CCQ</p>
                        </div>
                        <div className="col-4 ttt">
                          <div className="float-left">
                            <img
                              src="/dist/img/avatar4.jpg"
                              alt="avatar"
                              className="avatar"
                            />
                            <img
                              src="/dist/img/avatar1.jpeg"
                              alt="avatar"
                              className="avatar"
                            />
                            <img
                              src="/dist/img/avatar2.jpeg"
                              alt="avatar"
                              className="avatar"
                            />
                          </div>
                          <div className="buttons">
                            <button className="btn tools">
                              <i className="fa-solid fa-list-check"></i> 5/5
                            </button>
                            <button className="btn tools">
                              <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                          </div>
                        </div>
                        <div className="taskBottom">
                          <p className="cardText bold">
                            <i className="fa-solid fa-clock"></i> Today
                          </p>
                          <h5>
                            <span className="badge bg-success">Completed</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="cardItem">
                      <div className="row">
                        <div className="col-8">
                          <div className="cardTitleText bold">
                            Abdul Saboor Zaheri
                          </div>
                          <p className="text-muted">Internal network problem</p>
                        </div>
                        <div className="col-4 ttt">
                          <div className="float-left">
                            <img
                              src="/dist/img/avatar4.jpg"
                              alt="avatar"
                              className="avatar"
                            />
                            <img
                              src="/dist/img/avatar1.jpeg"
                              alt="avatar"
                              className="avatar"
                            />
                            <img
                              src="/dist/img/avatar3.jpeg"
                              alt="avatar"
                              className="avatar"
                            />
                          </div>
                          <div className="buttons">
                            <button className="btn tools">
                              <i className="fa-solid fa-list-check"></i> 3/4
                            </button>
                            <button className="btn tools">
                              <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                          </div>
                        </div>
                        <div className="taskBottom">
                          <p className="cardText bold">
                            <i className="fa-solid fa-clock"></i> 2 days
                          </p>
                          <h5>
                            <span className="badge bg-primary">Normal</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10 offset-md-1">
                <div className="card">
                  <div className="card-header">
                    <h3>Online Support</h3>
                  </div>
                  <div className="card-body">
                    {/* <div className="cardItem">
                        <div className="row">
                          <div className="col-8">
                            <div className="cardTitleText bold">Mohammad Reza Rahimi</div>
                            <p className='text-muted'>Package-85GB-2Month-1Mbps-(0-8)Free</p>
                            <br />
                            <p className="cardText bold">Today</p>
                          </div>
                          <div className="col-4 ttt">
                            <img src="/dist/img/avatar1.jpeg" alt="avatar" className="avatar" />
                            <img src="/dist/img/avatar2.jpeg" alt="avatar" className="avatar" />
                            <img src="/dist/img/avatar3.jpeg" alt="avatar" className="avatar" />
                            <img src="/dist/img/avatar4.jpg" alt="avatar" className="avatar" />
                          </div>
                        </div>
                      </div> */}
                    <div className="cardItem">
                      <div className="row">
                        <div className="col-8">
                          <div className="cardTitleText bold">
                            Jawad Tawassoli
                          </div>
                          <p className="text-muted">
                            Configuration (Mikrotik router)
                          </p>
                        </div>
                        <div className="col-4 ttt">
                          <div className="float-left">
                            <img
                              src="/dist/img/avatar4.jpg"
                              alt="avatar"
                              className="avatar"
                            />
                            <img
                              src="/dist/img/avatar1.jpeg"
                              alt="avatar"
                              className="avatar"
                            />
                            <img
                              src="/dist/img/avatar2.jpeg"
                              alt="avatar"
                              className="avatar"
                            />
                          </div>
                          <div className="buttons">
                            <button className="btn tools">
                              <i className="fa-solid fa-list-check"></i> 3/3
                            </button>
                            <button className="btn tools">
                              <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                          </div>
                        </div>
                        <div className="taskBottom">
                          <p className="cardText bold">
                            <i className="fa-solid fa-clock"></i> Today
                          </p>
                          <h5>
                            <span className="badge bg-success">Completed</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="cardItem">
                      <div className="row">
                        <div className="col-8">
                          <div className="cardTitleText bold">
                            Ahmadzia Andalib
                          </div>
                          <p className="text-muted">
                            Blocking all network except 1 device
                          </p>
                        </div>
                        <div className="col-4 ttt">
                          <div className="float-left">
                            <img
                              src="/dist/img/avatar4.jpg"
                              alt="avatar"
                              className="avatar"
                            />
                            <img
                              src="/dist/img/avatar1.jpeg"
                              alt="avatar"
                              className="avatar"
                            />
                            <img
                              src="/dist/img/avatar3.jpeg"
                              alt="avatar"
                              className="avatar"
                            />
                          </div>
                          <div className="buttons">
                            <button className="btn tools">
                              <i className="fa-solid fa-list-check"></i> 0/4
                            </button>
                            <button className="btn tools">
                              <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                          </div>
                        </div>
                        <div className="taskBottom">
                          <p className="cardText bold">
                            <i className="fa-solid fa-clock"></i> 2 days
                          </p>
                          <h5>
                            <span className="badge bg-warning">Pending</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

