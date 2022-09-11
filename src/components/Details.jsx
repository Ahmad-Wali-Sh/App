import React from "react"

export function MainDetails(props) {
    return (
        <div className="cardItem">
            <div className="row">
                <div className="col-8">
                    <div className="cardTitleText bold">{props.name}</div>
                    <p className="text-muted">{props.internet}</p>
                </div>
                <div className="col-2 ttt">
                    <div className="float-left">
                        <img
                            src="/images/avatar4.jpg"
                            alt="avatar"
                            className="avatar"
                        />
                        <img
                            src="/images/avatar1.jpeg"
                            alt="avatar"
                            className="avatar"
                        />
                        <img
                            src="/images/avatar2.jpeg"
                            alt="avatar"
                            className="avatar"
                        />
                    </div>
                    <div className="buttons">
                        <button className="btn tools">
                            <i className="fa-solid fa-list-check"></i> {props.number}
                        </button>
                        {/* <button className="btn">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
              </button> */}
                        {/* <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button> */}
                        <div className="dropdown">
                            <button
                                className="btn tools dropdown-toggle"
                                type="button"
                                id="dropdown1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdown1">
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
                {/* Button */}
                <div className="taskBottom">
                    <p className="cardText bold">
                        <i className="fa-solid fa-clock"></i> Today
                    </p>
                    <h5>
                        <span className={`badge bg-${props.badge}`}>{props.status}</span>
                    </h5>
                </div>
            </div>
        </div>
    )
}


export function Details (props) {
    return (
        <>
            <div className="row">
                <div className="col-10 offset-md-1">
                    <div className="card">
                        <div className="card-header">
                            <h3>{props.title}</h3>
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
                      {props.children}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}