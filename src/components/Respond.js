import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BidResponseForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bid submitted successfully!");
    navigate("/dashboard"); // Redirect to dashboard
  };

  const handleCancel = () => {
    alert("Bid submission canceled.");
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="shadow-sm p-4 bg-white rounded" style={{ width: "50%" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Bid Response Form</h3>
          <Form onSubmit={handleSubmit}>
            {/* Bid Amount */}
            <Form.Group className="mb-3" controlId="formBidAmount">
              <Form.Label>Bid Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter bid amount" />
              <Form.Text className="text-muted">
                Enter your proposed bid amount.
              </Form.Text>
            </Form.Group>

            {/* Contact Name */}
            <Form.Group className="mb-3" controlId="formContactName">
              <Form.Label>Contact Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
              <Form.Text className="text-muted">
                Your name will be used for communication.
              </Form.Text>
            </Form.Group>

            {/* Email Address */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            {/* Phone Number */}
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
              <Form.Text className="text-muted">
                Provide a valid phone number for contact.
              </Form.Text>
            </Form.Group>

            {/* Comments */}
            <Form.Group className="mb-4" controlId="formComments">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter any additional comments or terms"
              />
              <Form.Text className="text-muted">
                Add any special terms or notes for your bid.
              </Form.Text>
            </Form.Group>

            {/* Buttons */}
            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                Submit Bid
              </Button>
              <Button variant="secondary" type="button" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BidResponseForm;
