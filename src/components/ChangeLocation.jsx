import React from "react"

export default function ChangeLocation () {
    return (
        <>
<section>
                                <h3>Change Location</h3>
                                <div className="card text-dark bg-light mb-3">
                                  <div className="card-header">
                                    Task details
                                  </div>
                                  <div className="card-body">
                                    <div className="row mt-1">
                                      <label
                                        for="troubleshoot_title"
                                        className="col-sm-1 col-form-label text-muted"
                                      >
                                        Title
                                      </label>
                                      <div className="col-sm-11">
                                        <input
                                          type="text"
                                          name=""
                                          id="troubleshoot_title"
                                          placeholder="..."
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="row mt-2">
                                      <label
                                        for="troubleshoot_address"
                                        className="col-sm-1 col-form-label text-muted"
                                      >
                                        Address
                                      </label>
                                      <div className="col-sm-11">
                                        <input
                                          type="text"
                                          name=""
                                          id="troubleshoot_address"
                                          placeholder="..."
                                          className="form-control fw-bold"
                                        />
                                      </div>
                                    </div>
                                    <div className="row mt-2">
                                      <label
                                        for="troubleshoot_contact"
                                        className="col-sm-1 col-form-label text-muted"
                                      >
                                        Contact
                                      </label>
                                      <div className="col-sm-5">
                                        <input
                                          type="text"
                                          name=""
                                          id="troubleshoot_contact"
                                          placeholder="..."
                                          className="form-control fw-bold"
                                        />
                                      </div>
                                      <div className="col-1"></div>
                                      <label
                                        for="troubleshoot_charge"
                                        className="col-sm-2 col-form-label text-muted"
                                      >
                                        Service Charge
                                      </label>
                                      <div className="col-sm-3">
                                        <input
                                          type="text"
                                          name=""
                                          id="troubleshoot_charge"
                                          placeholder="..."
                                          className="form-control fw-bold"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="row mt-5"
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
                                              className="form-control border border-top-0 rounded-0"
                                              placeholder="Leave a description here"
                                              id="floatingTextarea"
                                              rows="6"
                                            ></textarea>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="card text-white bg-light mb-3 mt-3">
                                      <div className="card-header">
                                        Change location results
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
                                        {/* TROUBLESHOOTING CHECKLIST */}
                                        <h4 className="mt-3">Checklist</h4>
                                        <br />
                                        <div className="form-check ml-3">
                                          <ul className="list-unstyled">
                                            <li className="list-item">
                                              <input
                                                type="checkbox"
                                                className="form-check-input border border-primary"
                                                name=""
                                                id=""
                                              />
                                              &nbsp;Cable
                                            </li>
                                            <li className="list-item">
                                              <input
                                                type="checkbox"
                                                className="form-check-input border border-primary"
                                                name=""
                                                id=""
                                              />
                                              &nbsp;Stand
                                            </li>
                                            <li className="list-item">
                                              <input
                                                type="checkbox"
                                                className="form-check-input border border-primary"
                                                name=""
                                                id=""
                                              />
                                              &nbsp;Router
                                            </li>
                                            <li className="list-item">
                                              <input
                                                type="checkbox"
                                                className="form-check-input border border-primary"
                                                name=""
                                                id=""
                                              />
                                              &nbsp;Antenna
                                            </li>
                                            <li className="list-item">
                                              <input
                                                type="checkbox"
                                                className="form-check-input border border-primary"
                                                name=""
                                                id=""
                                              />
                                              &nbsp;Router OS
                                            </li>
                                            <li className="list-item">
                                              <input
                                                type="checkbox"
                                                className="form-check-input border border-primary"
                                                name=""
                                                id=""
                                              />
                                              &nbsp;Signal
                                            </li>
                                            <li className="list-item">
                                              <input
                                                type="checkbox"
                                                className="form-check-input border border-primary"
                                                name=""
                                                id=""
                                              />
                                              &nbsp;DNS
                                            </li>
                                          </ul>
                                        </div>
                                        {/* END CHECKLIST */}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card-footer">
                                    <div className="d-flex flex-row-reverse bd-highlight">
                                      <div className="bd-highlight">
                                        <button
                                          type="submit"
                                          className="btn btn-success"
                                        >
                                          <i className="fa-duotone fa-floppy-disk"></i>
                                          &nbsp;Save
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            
        </>
    )
}