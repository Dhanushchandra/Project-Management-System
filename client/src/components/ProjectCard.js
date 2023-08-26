const ProjectCard = ({ project }) => {
  return (
    <div className="cal-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{project.name}</h5>

            <a href={`/project/${project.id}`} className="btn btn-primary">
              View
            </a>
          </div>
          <p className="small">
            <span className="fw-bold">Status:</span> {project.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
