import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GIDCreateForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    price: "",
    vehicleNumber: "",
    startDate: "",
    deliveryTime: "",
    material: "",
    vehicleType: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://67a05b2c24322f8329c5ef37.mockapi.io/api/user/Create",
        formData
      );
      if (response.status === 201) {
        alert("Form submitted successfully!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  const handleCancel = () => {
    alert("Form submission canceled.");
    navigate("/dashboard");
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded">
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formVehicleNumber">
            <Form.Label>Vehicle Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter vehicle number"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              pattern="[A-Za-z0-9]{1,}"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formStartDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formDeliveryTime">
            <Form.Label>Estimated Delivery Time</Form.Label>
            <Form.Control
              type="time"
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formMaterial">
        <Form.Label>Material</Form.Label>
        <Form.Select
          name="material"
          value={formData.material}
          onChange={handleChange}
          required
        >
          <option value="">Select Material</option>
          <option value="steel">Steel</option>
          <option value="plastic">Plastic</option>
          <option value="wood">Wood</option>
          <option value="other">Other</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formVehicleType">
        <Form.Label>Vehicle Type</Form.Label>
        <Form.Select
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          required
        >
          <option value="">Select Vehicle Type</option>
          <option value="truck">Truck</option>
          <option value="van">Van</option>
          <option value="trailer">Trailer</option>
          <option value="other">Other</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formComment">
        <Form.Label>Comments</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter any additional comments"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="d-flex gap-4">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="secondary" type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default GIDCreateForm;
