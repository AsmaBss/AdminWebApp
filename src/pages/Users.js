import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/user.graphql";
import Footer from "./Footer";
import Aside from "./Aside";
import Header from "./Header";

function Users() {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <pre>{error.message}</pre>;
  if (!data) return <p>Not found</p>;
  if (!loading) {
    console.log("getAll", data);
  }

  return (
    <>
      <Header />
      <Aside />
      <div className="content-wrapper">
        <section
          className="content-header"
          style={{ padding: "25px 3rem 10px" }}
        >
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Users</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Users</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content" style={{ padding: "25px 2.5rem" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title"></h3>
                  </div>

                  <div className="card-body">
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Email</th>
                          <th>BirthDate</th>
                          <th>Address</th>
                          <th>Image</th>
                        </tr>
                      </thead>
                      {data.getAllUsers.map((item) => (
                        <tbody>
                          <tr key={item.id}>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.email}</td>
                            <td>{item.birthdate}</td>
                            <td>{item.address}</td>
                            <td>{item.image}</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                  <div className="card-footer">
                    <ul className="pagination pagination-sm m-0 float-right">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          «
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          »
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Users;
