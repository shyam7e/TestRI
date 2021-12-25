import React, { useState } from "react";
import "../components/home.css";
import { Form, Button } from "react-bootstrap";
function Home() {
  const [categoryName, setCategoryName] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  return (
    <div className="bg-light box shadow p-4 m-auto mt-5">
      <h4 className=" mb-4 text-center" style={{ color: "#474749" }}>
        Add a New Category
      </h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="text-muted m-0 p-1">Category Name</Form.Label>
          <Form.Control
            type="text"
            size="sm"
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-muted  m-0 p-1">
            Parent Category
          </Form.Label>
          <Form.Select
            size="sm"
            value={parentCategory}
            onChange={(e) => {
              setParentCategory(e.target.value);
            }}
          >
            <option>Choose a parent</option>
            <option>FrontEnd Developer</option>
            <option>BackEnd Developer</option>
            <option>DevOps</option>
            <option>BlockChain Developer</option>
            <option>flutter Developer</option>
            <option>React Developer</option>
            <option>React Native Developer</option>
            <option>Android Developer</option>
          </Form.Select>
        </Form.Group>
        <Button
          className="w-100 "
          style={{ backgroundColor: "#B981F0" }}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(categoryName);
            console.log(parentCategory);
          }}
        >
          Add Category
        </Button>
      </Form>
    </div>
  );
}

export default Home;
