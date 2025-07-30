import { Panel } from "primereact/panel";
import { Button } from "primereact/button";


const Works = () => {
  const projects = [
    {
      title: "Kuyua Landing Page",
      icon: "pi pi-external-link",
      img: "assets/kuyuaworks.png",
      description: "Landing page for Kuyua, a leading environmental solutions software, implemented in Europe, GR ",
      url: "https://kuyua.com",
    },
    {
      title: "Chiral Client App",
      icon: "pi pi-external-link",
      img: `assets/chiralworks.png`,
      description: "Chiral client app, dental clinic management software, trusted by 100+ clinics in United Kingdom",
      url: "https://chiralcloud.com/z3rG2baJGMRJAQyw/165841866",
    },
    {
      title: "Kuyua Client App",
      icon: "pi pi-external-link",
      img: "assets/kuyuaclientworks.png",
      description: "Kuyua client app, environmental solutions software, implemented in Europe, GR",
      url: "https://staging.kuyua.net/login",
    },
  ];
  const panelHeader = (project) => {
    console.log("header render");
    return (
      <div className="flex w-full justify-content-between align-items-center h-5rem panel-header">
        <div>
          <h2>{project.title}</h2>
        </div>
        <div>
          <Button
            icon={project.icon}
            className="p-button-rounded p-button-text"
            onClick={() => window.open(project.url, "_blank")}
          />
        </div>
      </div>
    );
  };
  return (
    <div id = "works" className="main-section">
      <h1>Works</h1>
      <div className="grid">
        {projects.map((project, index) => {
          return (
            <div key={index} className="md:col-6">
              <Panel headerTemplate={panelHeader(project)}>
                <div className="w-full works-img">
                  <img src={project.img} />
                </div>
                <br></br>
                <li>{project.description}</li>
                <Button className="mt-4 w-full" label="View" onClick={() => window.open(project.url, "_blank")} />
              </Panel>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
