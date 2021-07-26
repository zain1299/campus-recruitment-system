import React from "react";
import { Modal, Container, Form, Button } from "react-bootstrap";

function PostJob() {
  return (
    <div>
      <Modal aria-labelledby="contained-modal-title-vcenter">
        <form style={{ width: "100%" }}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Vacancy
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <Form.Group>
                <Form.Label className="labels" htmlFor="title">
                  Job Title
                </Form.Label>
                <Form.Control
                  id="title"
                  type="text"
                  placeholder="Job Title here"
                  autoFocus
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Job Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Form.Group>
                <Form.Label className="labels" htmlFor="gpa">
                  Minimum GPA Required
                </Form.Label>
                <Form.Control
                  id="gpa"
                  type="number"
                  placeholder="Minimum GPA Required"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="labels" htmlFor="salary">
                  Minimum Salary
                </Form.Label>
                <Form.Control
                  id="salary"
                  type="number"
                  placeholder="Minimum Salary"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="labels" htmlFor="lastDateToApply">
                  Last Date to Apply
                </Form.Label>
                <Form.Control id="lastDateToApply" type="date" />
              </Form.Group>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Post</Button>
            <Button variant="secondary">Cancel</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default PostJob;
