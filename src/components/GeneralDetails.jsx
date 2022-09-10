import React from "react"

export default function GeneralDetails (props) {
    
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
  
  return (
        <section>
                                <h3 className="mt-3">General Details</h3>
                                <div className="row mt-3">
                                  <label
                                    htmlFor="inputEmail3"
                                    className="col-2 col-form-label text-muted"
                                  >
                                    Contract number
                                  </label>
                                  <div className="col-4">
                                    <p
                                      className="form-control"
                                      id="inputEmail3"
                                    >
                                      {props.contract_no}
                                    </p>
                                  </div>
                                  <div className="col-1"></div>
                                  <label
                                    htmlFor="inputEmail3"
                                    className="col-1 col-form-label text-muted"
                                  >
                                    POC Name
                                  </label>
                                  <div className="col-4">
                                    <p
                                      className="form-control"
                                      id="inputEmail3"
                                    >
                                      {props.full_name}
                                    </p>
                                  </div>
                                </div>
                                <div className="row mt-1">
                                  <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label text-muted"
                                  >
                                    Contact
                                  </label>
                                  <div className="col-sm-4">
                                    <p
                                      className="form-control"
                                      id="inputEmail3"
                                    >
                                      {props.contact}
                                    </p>
                                  </div>
                                  <div className="col-1"></div>
                                  <label
                                    htmlFor="inputEmail3"
                                    className="col-2 col-form-label text-muted"
                                  >
                                    Organization
                                  </label>
                                  <div className="col-sm-3">
                                    <p
                                      className="form-control"
                                      id="inputEmail3"
                                    >
                                      {props.organization}
                                    </p>
                                  </div>
                                </div>
                                <div className="row mt-1">
                                  <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label text-muted"
                                  >
                                    Address
                                  </label>
                                  <div className="col-sm-10">
                                    <p
                                      className="form-control"
                                      id="inputEmail3"
                                    >
                                      {props.address}
                                    </p>
                                  </div>
                                </div>
                                <div className="row mt-1">
                                  <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label text-muted"
                                  >
                                    Bandwidth
                                  </label>
                                  <div className="col-sm-10">
                                    <p
                                      className="form-control"
                                      id="inputEmail3"
                                    >
                                      {props.package}
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="row mt-1"
                                  id="pills-tab"
                                  role="tablist"
                                >
                                  <div className="col-12">
                                    <nav>
                                      <div
                                        className="nav nav-tabs"
                                        id="nav-tab"
                                        role="tablist"
                                      >
                                        <h6
                                          className="nav-link active"
                                          id="nav-home-tab"
                                          data-bs-toggle="tab"
                                          data-bs-target="#nav-home"
                                          type="button"
                                          role="tab"
                                          aria-controls="nav-home"
                                          aria-selected="true"
                                        >
                                          Description
                                        </h6>
                                      </div>
                                    </nav>
                                    <div
                                      className="tab-content"
                                      id="nav-tabContent"
                                    >
                                      <div
                                        className="tab-pane fade show active"
                                        id="nav-home"
                                        role="tabpanel"
                                        aria-labelledby="nav-home-tab"
                                      >
                                        <textarea
                                          className="form-control border-top-0"
                                          placeholder="Leave a description here"
                                          id="floatingTextarea"
                                          rows="6"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="mt-3">PPPoE Settings</h3>

                                <div className="row mt-1">
                                  <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-1 col-form-label text-muted"
                                  >
                                    User
                                  </label>
                                  <div className="col-sm-5">
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      placeholder="..."
                                      className="form-control"
                                    />
                                  </div>
                                  <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label text-muted"
                                  >
                                    Password
                                  </label>
                                  <div className="col-sm-4">
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      placeholder="..."
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="card text-white bg-dark mb-3 mt-3">
                                  <div className="card-header">
                                    Link Details
                                  </div>
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-5">
                                        <label
                                          htmlFor="customer_name"
                                          className="col-form-label text-muted"
                                        >
                                          Customer Name
                                        </label>
                                        <input
                                          type="text"
                                          name=""
                                          id="customer_name"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="col-2"></div>
                                      <div className="col-5">
                                        <label
                                          htmlFor="customer_id"
                                          className="col-form-label text-muted"
                                        >
                                          Customer ID
                                        </label>
                                        <input
                                          type="text"
                                          name=""
                                          id="customer_id"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-5">
                                        <label
                                          htmlFor="installation_type"
                                          className="col-form-label text-muted"
                                        >
                                          Installation Type
                                        </label>
                                        <input
                                          type="text"
                                          name=""
                                          id="installation_type"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="col-2"></div>
                                      <div className="col-5">
                                        <label
                                          htmlFor="device"
                                          className="col-form-label text-muted"
                                        >
                                          Device
                                        </label>
                                        <input
                                          type="text"
                                          name=""
                                          id="device"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-5">
                                        <label
                                          htmlFor="access_point"
                                          className="col-form-label text-muted"
                                        >
                                          Access Point
                                        </label>
                                        <input
                                          type="text"
                                          name=""
                                          id="access_point"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="col-2"></div>
                                      <div className="col-5">
                                        <label
                                          htmlFor="signal"
                                          className="col-form-label text-muted"
                                        >
                                          Signal
                                        </label>
                                        <input
                                          type="text"
                                          name=""
                                          id="signal"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-5">
                                        <label
                                          htmlFor="ccq"
                                          className="col-form-label text-muted"
                                        >
                                          CCQ
                                        </label>
                                        <input
                                          type="text"
                                          name=""
                                          id="ccq"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="col-2"></div>
                                      <div className="col-5">
                                        <label
                                          htmlFor="cable"
                                          className="col-form-label text-muted"
                                        >
                                          Cable
                                        </label>
                                        <input
                                          type="text"
                                          name=""
                                          id="cable"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-5">
                                        <label
                                          htmlFor="connector"
                                          className="col-form-label text-muted"
                                        >
                                          Connector
                                        </label>
                                        <input
                                          type="text"
                                          name=""
                                          id="connector"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="col-2"></div>
                                      <div className="col-5">
                                        <label
                                          htmlFor="payment"
                                          className="col-form-label text-muted"
                                        >
                                          Payment
                                        </label>
                                        <input
                                          type="text"
                                          name=""
                                          id="payment"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-5">
                                        <label
                                          htmlFor="bill_number"
                                          className="col-form-label text-muted"
                                        >
                                          Bill Number
                                        </label>
                                        <input
                                          type="text"
                                          name=""
                                          id="bill_number"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="col-2"></div>
                                      <div className="col-5">
                                        <label
                                          htmlFor="installation_date"
                                          className="col-form-label text-muted"
                                        >
                                          Installation Date
                                        </label>
                                        <input
                                          type="date"
                                          name=""
                                          id="installation_date"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="row mt-3"
                                      id="pills-tab"
                                      role="tablist"
                                    >
                                      <div className="col-12">
                                        <nav>
                                          <div
                                            className="nav nav-tabs"
                                            id="nav-tab"
                                            role="tablist"
                                          >
                                            <h6
                                              className="nav-link active"
                                              id="nav-home-tab"
                                              data-bs-toggle="tab"
                                              data-bs-target="#nav-home"
                                              type="button"
                                              role="tab"
                                              aria-controls="nav-home"
                                              aria-selected="true"
                                            >
                                              Additional Details
                                            </h6>
                                          </div>
                                        </nav>
                                        <div
                                          className="tab-content"
                                          id="nav-tabContent"
                                        >
                                          <div
                                            className="tab-pane fade show active"
                                            id="nav-home"
                                            role="tabpanel"
                                            aria-labelledby="nav-home-tab"
                                          >
                                            <textarea
                                              className="form-control border border-top-0 rounded-0"
                                              placeholder="Leave a description here"
                                              id="floatingTextarea"
                                              rows="6"
                                            ></textarea>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-2">
                                    Installation confirmed
                                  </div>
                                  <label className="switch">
                                    <input
                                      type="checkbox"
                                      name="switch"
                                      id="switch"
                                      // checked={switchInitialState.switch}
                                      onChange={(e) => handleSwitch(e)}
                                      // checked={switchState.switch == true}
                                    />
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                                <div className="row">
                                  <div className="col-2">Payment cleared</div>
                                  <label className="switch">
                                    <input
                                      type="checkbox"
                                      name="switch"
                                      id="switch"
                                      // checked={switchInitialState.switch}
                                      onChange={(e) => handleSwitch(e)}
                                      // checked={switchState.switch == true}
                                    />
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                              </section>
                            )}
