import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Badge,
  Dropdown,
  Nav,
  Navbar,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // State for toggling the details visibility for each row
  const [showDetails, setShowDetails] = useState({});
  const navigate = useNavigate();

  const toggleDetails = (index) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("authToken");
      navigate("/");
    }
  };

  const handleRespondClick = () => {
    navigate("/respond"); // Navigate to the '/respond' route
  };
  const handleCreateClick = () => {
    navigate("/create"); // Navigate to the '/create' page
  };

  const bids = [
    {
      bidNumber: "#12234567123",
      createdBy: "Sunder Yadav",
      startDate: "14/02/2024",
      startTime: "05:40 Pm",
      remainingTime: "7hr 20 min",
      fromCity: "Gurgaon",
      toCity: "Mumbai",
      vehicleDetails: "Truck, 20 ft (Close body, 1)",
      materialWeight: "4000 Kg",
      responseCount: 4,
      assignedStaff: "Mohit",
      staffId: "5215001161264",
    },
    {
      bidNumber: "#13987456321",
      createdBy: "Rajesh Kumar",
      startDate: "15/02/2024",
      startTime: "02:30 Pm",
      remainingTime: "5hr 10 min",
      fromCity: "Delhi",
      toCity: "Pune",
      vehicleDetails: "Truck, 18 ft (Open body, 2)",
      materialWeight: "3500 Kg",
      responseCount: 6,
      assignedStaff: "Ankit",
      staffId: "5215002167645",
    },
    {
      bidNumber: "#15647382910",
      createdBy: "Nisha Sharma",
      startDate: "17/02/2024",
      startTime: "11:15 Am",
      remainingTime: "3hr 40 min",
      fromCity: "Noida",
      toCity: "Bangalore",
      vehicleDetails: "Truck, 22 ft (Close body, 3)",
      materialWeight: "6000 Kg",
      responseCount: 2,
      assignedStaff: "Priya",
      staffId: "5215003185273",
    },
    {
      bidNumber: "#18764392301",
      createdBy: "Vishal Mehta",
      startDate: "19/02/2024",
      startTime: "08:50 Am",
      remainingTime: "9hr 30 min",
      fromCity: "Jaipur",
      toCity: "Hyderabad",
      vehicleDetails: "Truck, 16 ft (Open body, 1)",
      materialWeight: "2500 Kg",
      responseCount: 5,
      assignedStaff: "Deepak",
      staffId: "5215004286163",
    },
  ];

  return (
    <Container fluid className="p-0">
      <div className="d-flex vh-100">
        {/* Sidebar */}
        <div
          className="sidebar p-3 d-flex flex-column"
          style={{
            width: "15%",
            minWidth: "150px",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="logo mb-4 fw-bold fs-4 d-flex align-items-center px-3">
            <i className="bi bi-app-indicator me-3 "></i>
            SDP
          </div>
          <Nav className="flex-column flex-grow-1 px-3">
            <Nav.Link href="#" className="mb-2" active>
              <i className="bi bi-square-fill me-2"></i> Bid
            </Nav.Link>

            <Nav.Link href="#" className="mb-2 text-dark">
              <i className="bi bi-square-fill me-2"></i> POD
            </Nav.Link>
            <Nav.Link href="#" className="mb-2 text-dark">
              <i className="bi bi-square-fill me-2"></i> Vendor
            </Nav.Link>
            <Nav.Link href="#" className="mb-2 text-dark">
              <i className="bi bi-square-fill me-2"></i> User
            </Nav.Link>
            <div className="mt-auto">
              <Nav.Link href="#" className="mb-2 text-dark">
                <i className="bi bi-gear me-2"></i> Settings
              </Nav.Link>
              <Nav.Link href="#" className="mb-2 text-dark">
                <i className="bi bi-person me-2"></i> Profile
              </Nav.Link>
              <Nav.Link href="#" className="mb-2 text-dark">
                <i className="bi bi-envelope me-2"></i> Contact Us
              </Nav.Link>
              <Nav.Link
                href="#"
                className="mb-2 text-dark"
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </Nav.Link>
            </div>
          </Nav>
        </div>

        {/* Main Content */}
        <div className="main-content flex-grow-1" style={{ width: "85%" }}>
          <Navbar bg="white" expand="lg" className="border-bottom">
            <Container fluid className="px-4 d-flex justify-content-end">
              <div className="d-flex align-items-center gap-4">
                <Nav className="me-3 d-flex gap-3">
                  <Nav.Link href="#" className="fw-semibold text-primary">
                    Bid
                  </Nav.Link>
                  <Nav.Link href="#" className="text-secondary">
                    POD
                  </Nav.Link>
                  <Nav.Link href="#" className="text-secondary">
                    Vendor
                  </Nav.Link>
                  <Nav.Link href="#" className="text-secondary">
                    User
                  </Nav.Link>
                </Nav>

                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="light"
                    className="d-flex align-items-center gap-2 border-0"
                  >
                    <i className="bi bi-person"></i>
                    <span>Freight EG</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Container>
          </Navbar>
          <div className="border-bottom bg-white">
            <Container
              fluid
              className="px-4 d-flex align-items-center w-100 py-2"
            >
              <Nav className="d-flex gap-4">
                <Nav.Link
                  href="#"
                  className="text-primary px-0 border-bottom border-3 border-primary"
                >
                  Live
                </Nav.Link>
                <Nav.Link href="#" className="text-secondary px-0">
                  Results
                </Nav.Link>
                <Nav.Link href="#" className="text-secondary px-0">
                  History
                </Nav.Link>
              </Nav>
              <div className="flex-grow-1 mx-3" style={{ maxWidth: "300px" }}>
                <InputGroup className="rounded-pill border overflow-hidden">
                  <InputGroup.Text className="bg-white border-0">
                    <i className="bi bi-search text-muted"></i>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search"
                    className="border-0"
                    style={{ boxShadow: "none" }}
                  />
                </InputGroup>
              </div>
              <Button
                variant="light"
                className="d-flex align-items-center gap-2 ms-auto rounded-pill border overflow-hidden"
                onClick={handleCreateClick} // Add this event handler
              >
                <span>Create</span>
                <i className="bi bi-plus"></i>
              </Button>
            </Container>
          </div>
          <Navbar bg="light" expand="lg" className="p-2">
            <Container>
              <Nav className="me-auto">
                <Nav.Item className="me-3">Live (30)</Nav.Item>
                <Nav.Item className="me-3 text-success">
                  Responded (30)
                </Nav.Item>
                <Nav.Item className="me-3 text-danger">
                  Unresponded (30)
                </Nav.Item>
              </Nav>
              <Nav>
                <Nav.Item className="me-5">Bid Created</Nav.Item>
                <Nav.Item className="me-5 text-secondary">Today</Nav.Item>
                <Nav.Item className="me-5 text-secondary">Yesterday</Nav.Item>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    size="sm"
                    className="bg-white"
                  >
                    Calendar
                  </Dropdown.Toggle>
                </Dropdown>
              </Nav>
            </Container>
          </Navbar>
          {/* Top Table */}
          <Container fluid className="p-0">
            <div className="main-content">
              <Container>
                <Table responsive className="bid-table">
                  <thead>
                    <tr>
                      <th>S No.</th>
                      <th>Bid Number Created By</th>
                      <th>Start Date & Time</th>
                      <th>Bid Time Remaining</th>
                      <th>From city To city</th>
                      <th>Vehicle Type, Size Body, No. of Vehicle</th>
                      <th>Material Weight (in Kg)</th>
                      <th>Response</th>
                      <th>Assigned Staff</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bids.map((bid, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            {bid.bidNumber}
                            <div className="text-muted small">
                              {bid.createdBy}
                            </div>
                          </td>
                          <td>
                            {bid.startDate}
                            <div className="text-muted small">
                              {bid.startTime}
                            </div>
                          </td>
                          <td>{bid.remainingTime}</td>
                          <td>
                            {bid.fromCity}
                            <div className="text-muted">{bid.toCity}</div>
                          </td>
                          <td>{bid.vehicleDetails}</td>
                          <td>{bid.materialWeight}</td>
                          <td>{bid.responseCount}</td>
                          <td>
                            {bid.assignedStaff}
                            <div className="text-muted small">
                              {bid.staffId}
                            </div>
                          </td>
                          <td>
                            <a
                              href="#"
                              onClick={() => toggleDetails(index)}
                              className="view-details-btn"
                            >
                              {showDetails[index]
                                ? "View less ▲"
                                : "View Details"}
                            </a>
                          </td>
                        </tr>

                        {/* Render details between rows */}
                        {showDetails[index] && (
                          <tr className="bid-details-row">
                            <td colSpan={9}>
                              <div className="bid-details">
                                <Row className="mb-4">
                                  <Col md={6}>
                                    <h6>
                                      <strong>Bid No: </strong>
                                      {bid.bidNumber} ({bid.createdBy})
                                    </h6>
                                  </Col>
                                  <Col md={4} className="d-flex ">
                                    <h6>
                                      <span className="icon me-2">🚛</span>
                                      Vehicle loading date: 17/02/2024
                                    </h6>
                                    <Button
                                      variant="primary"
                                      className="w-auto m-2"
                                      onClick={handleRespondClick} // Trigger navigate when clicked
                                    >
                                      Respond
                                    </Button>
                                  </Col>
                                  <Col md={4}>
                                    <h6>
                                      <span className="icon me-2">👤</span>
                                      Assigned Staff:{" "}
                                      <span className="text-primary">
                                        {bid.assignedStaff}
                                      </span>
                                    </h6>
                                  </Col>
                                </Row>

                                <Row className="mb-4">
                                  <Col md={6}>
                                    <div className="mb-3">
                                      <span className="icon location-icon me-2">
                                        📍
                                      </span>
                                      <strong>Manesar, Gurugram, </strong>
                                      <span className="text-muted">
                                        Haryana
                                      </span>
                                    </div>
                                    <div className="ms-4 mb-3">
                                      <strong>Loading Point: </strong>
                                      Ramchandra Ramniwas oil mill, Alwar,
                                      Rajasthan
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div>
                                      <span className="icon me-2">🚛</span>
                                      Vehicle Type: 20 ft Truck (Close Body)
                                      <Badge className="ms-2 badge-cng">
                                        CNG
                                      </Badge>
                                    </div>
                                    <div className="mt-2">
                                      <span className="icon me-2">📦</span>
                                      Material: Agricultural Products
                                      <strong className="ms-3">
                                        Weight: 14 Tonnes
                                      </strong>
                                    </div>
                                  </Col>
                                </Row>

                                <Row>
                                  <Col md={6}>
                                    <div className="mb-3">
                                      <span
                                        className="icon location-icon me-2"
                                        style={{ color: "red" }}
                                      >
                                        📍
                                      </span>
                                      <strong>Kotputli, </strong>
                                      <span className="text-muted">
                                        Rajasthan
                                      </span>
                                    </div>
                                    <div className="ms-4">
                                      <strong>Unloading Point: </strong>
                                      Ramchandra Ramniwas oil mill, Alwar,
                                      Rajasthan
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="mb-2">
                                      <span className="icon me-2">📅</span>
                                      Request Date: 15/02/2024
                                      <span className="ms-3 text-muted">
                                        (Shipping on the same date)
                                      </span>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </Table>
              </Container>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
