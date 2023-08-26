import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { GET_PROJECT } from "../queries/projectQueries";
import { UPDATE_PROJECT } from "../mutations/projectMutations";

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState(project.status);

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status,
    },
    refetchQueries: [
      {
        query: GET_PROJECT,
        variables: {
          id: project.id,
        },
      },
    ],
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-5">
      <h3>Update Project Details</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              id="status"
              className="form-select "
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="new">Not Started</option>
              <option value="progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={updateProject}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProjectForm;
