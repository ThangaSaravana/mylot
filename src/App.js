import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";

function App() {
  const [classnam, setClassNam] = useState("");
  const [currindex, setCurrIndex] = useState(0);
  const [bgColor, setBgColor] = useState("red");

  const [teamName, setTeamName] = useState("");
  const [coachName, setCoachName] = useState("");
  const [isnext, setIsNext] = useState(false);

  const [currentTeamData, setCurrentTeamData] = useState([]);
  const [currentTeamUrl, setCurrentTeamUrl] = useState(null);
  const [currentCoachUrl, setCurrentCoachUrl] = useState(null);

  const [arr, setArr] = useState(["A", "B", "C", "D", "E", "F"]);
  const textarrclone = ["A", "B", "C", "D", "E", "F"];

  const teamsarrClone = [
    { ballid: 0, name: "Delhi", url: require("../src/assets/red.png") },
    { ballid: 1, name: "Mumbai", url: require("../src/assets/blue.png") },
    { ballid: 2, name: "Chennai", url: require("../src/assets/cyan.png") },
    { ballid: 3, name: "Hyderabad", url: require("../src/assets/green.png") },
    { ballid: 4, name: "Bhubaneswar", url: require("../src/assets/pink.png") },
    { ballid: 5, name: "Bengaluru", url: require("../src/assets/yellow.png") },
  ];

  const coacharrClone = [
    { id: 0, name: "AAAAAAAA", url: require("../src/assets/red.png") },
    { id: 1, name: "BBBBBBBB", url: require("../src/assets/blue.png") },
    { id: 2, name: "CCCCCCCC", url: require("../src/assets/cyan.png") },
    { id: 3, name: "DDDDDDDD", url: require("../src/assets/green.png") },
    { id: 4, name: "EEEEEEEE", url: require("../src/assets/pink.png") },
    { id: 5, name: "FFFFFFFF", url: require("../src/assets/yellow.png") },
  ];

  const [teamsarr, setTeamsArr] = useState([
    { ballid: 0, name: "Delhi", url: require("../src/assets/red.png") },
    { ballid: 1, name: "Mumbai", url: require("../src/assets/blue.png") },
    { ballid: 2, name: "Chennai", url: require("../src/assets/cyan.png") },
    { ballid: 3, name: "Hyderabad", url: require("../src/assets/green.png") },
    { ballid: 4, name: "Bhubaneswar", url: require("../src/assets/pink.png") },
    { ballid: 5, name: "Bengaluru", url: require("../src/assets/yellow.png") },
  ]);

  const [coacharr, setCoacharr] = useState([
    { id: 0, name: "AAAAAAAA", url: require("../src/assets/red.png") },
    { id: 1, name: "BBBBBBBB", url: require("../src/assets/blue.png") },
    { id: 2, name: "CCCCCCCC", url: require("../src/assets/cyan.png") },
    { id: 3, name: "DDDDDDDD", url: require("../src/assets/green.png") },
    { id: 4, name: "EEEEEEEE", url: require("../src/assets/pink.png") },
    { id: 5, name: "FFFFFFFF", url: require("../src/assets/yellow.png") },
  ]);

  // const [configuremap, setConfiguremap] = useState({
  //   0: "open",
  //   1: "open",
  //   2: "open",
  //   3: "open",
  //   4: "open",
  //   5: "open",
  //   6: "open",
  //   7: "open",
  //   8: "open",
  // });
  const tablearrclone = [
    {
      id: 0,
      name: "Delhi",
      teamurl: null,
      correscoach: "",
      correscoachurl: null,
    },
    {
      id: 1,
      name: "Mumbai",
      teamurl: null,
      correscoach: "",
      correscoachurl: null,
    },
    {
      id: 2,
      name: "Chennai",
      teamurl: null,
      correscoach: "",
      correscoachurl: null,
    },
    {
      id: 3,
      name: "Hyderabad",
      teamurl: null,
      correscoach: "",
      correscoachurl: null,
    },
    {
      id: 4,
      name: "Bhubaneswar",
      teamurl: null,
      correscoach: "",
      correscoachurl: null,
    },
    {
      id: 5,
      name: "Bengaluru",
      teamurl: null,
      correscoach: "",
      correscoachurl: null,
    },
  ];
  const [tablearr, setTableArr] = useState([
    {
      id: 0,
      name: "Delhi",
      teamurl: null,
      correscoach: "",
      correscoachurl: null,
    },
    {
      id: 1,
      name: "Mumbai",
      teamurl: null,
      correscoach: "",
      correscoachurl: null,
    },
    {
      id: 2,
      name: "Chennai",
      teamurl: null,
      correscoach: "",
      correscoachurl: null,
    },
    {
      id: 3,
      name: "Hyderabad",
      teamurl: null,
      correscoach: "",
      correscoachurl: null,
    },
    {
      id: 4,
      name: "Bhubaneswar",
      teamurl: null,
      correscoach: "",
      correscoachurl: null,
    },
    {
      id: 5,
      name: "Bengaluru",
      teamurl: null,
      correscoach: "",
      correscoachurl: null,
    },
  ]);

  console.log(teamName);

  useEffect(() => {
    shuffleArr(arr, 1);
    shuffleArr(teamsarr, 2);
    shuffleArr(coacharr, 3);
  }, []);

  const handleclick = () => {
    // setBgColor(bgColor === "red" ? "blue" : "red");
    // setTablesArr(tablearrclone);
    shuffleArr(textarrclone, 1);
    shuffleArr(teamsarrClone, 2);
    shuffleArr(coacharrClone, 3);
    setCurrentTeamData([]);
    setTableArr(tablearrclone);
    setTeamName("");
    setCurrentTeamUrl(null);
    setCoachName("");
    setCurrentCoachUrl("");
  };

  const shuffleArr = (val, id) => {
    let nwarr = [...val];
    // algorithm usex to shuffle..... You can create a shuffle function using the Fisher-Yates (Knuth) Shuffle Algorithm, which efficiently shuffles the array in place. Here's a simple implementation in JavaScript:
    for (let i = nwarr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nwarr[i], nwarr[j]] = [nwarr[j], nwarr[i]]; // Swap elements
    }

    if (id == 1) {
      setArr(nwarr);
    } else if (id == 2) {
      setTeamsArr(nwarr);
    } else if (id == 3) {
      setCoacharr(nwarr);
    }
  };

  // console.log(arr);
  // console.log(ballsarr);

  // const ballclick = (name, index) => {
  //   configuremap[index] = "close";
  //   setClassNam(name);
  //   setCurrIndex(index);
  // };

  // const selectball = (id) => {
  //   if (teamName != "") {
  //     let currentball = ballsarr[id];
  //     let currentid = currentball.ballid;
  //     let currentcolor = currentball.color;
  //     // console.log(currentball);
  //     // for setting balls in table
  //     let newtablesarr = tableballsarr.map((val) =>
  //       val.teamname === teamName
  //         ? {
  //             ...val,
  //             ballid: currentid,
  //             color: currentcolor,
  //             istrue: !val.istrue,
  //           }
  //         : val
  //     );
  //     setTablesArr(newtablesarr);

  //     let currentballid = currentball.ballid;
  //     setCurrIndex(currentball.ballid);
  //     setClassNam(currentball.color);

  //     let nwballarr = [...ballsarr].filter(
  //       (val) => val.ballid != currentballid
  //     );
  //     setBallsArr(nwballarr);
  //     setTeamName("");
  //   }
  // };

  // const handleTeamName = (name) => {
  //   setTeamName(name);
  // };

  // const handleshowball = (val) => {
  //   let color = tableballsarr[val].color;
  //   setClassNam(color);

  //   setCurrIndex(val);
  // };

  // console.log("tables arr", tableballsarr);

  const handleSelectedTeam = (val) => {
    if (teamName == "") {
      setCurrentTeamUrl(val.url);
      let team = val.name;
      setTeamName(team);
      let nwarr = teamsarr.filter((val) => val.name != team);
      setTeamsArr(nwarr);
    }
  };

  const handleselectedcoach = (val) => {
    if (coachName == "") {
      setCurrentCoachUrl(val.url);
      let coach = val.name;
      setCoachName(val.name);

      let nwarr = coacharr.filter((val) => val.name != coach);
      setCoacharr(nwarr);
    }
  };

  const handleReveal = () => {
    if (coachName != "" && teamName != "") {
      let data = {
        team: teamName,
        coach: coachName,
        teamurl: currentTeamUrl,
        coachurl: currentCoachUrl,
      };

      setCurrentTeamData([...currentTeamData, data]);

      let nwarr = tablearr.map((val) => {
        if (val.name == teamName) {
          val.teamurl = currentTeamUrl;
          val.correscoach = coachName;
          val.correscoachurl = currentCoachUrl;
        }
        return val;
      });

      setTableArr(nwarr);

      setTeamName("");
      setCoachName("");
      setCurrentTeamUrl("");
      setCurrentCoachUrl("");
    }
  };

  console.log(currentTeamData);

  return (
    <div className="container-fluid text-center" style={{ overflow: "auto" }}>
      <div className="row">
        {/* Teams Column */}
        <div className="col-12 col-md-5">
          <div className="jar-container">
            <h3 className="d-md-none">Teams</h3>
            {/* Mobile-first heading */}
            <h1 className="d-none d-md-block">Teams</h1>
            {/* Desktop heading */}
            <div className="jar-wrapper" style={{ position: "relative" }}>
              <img
                src={require("../src/assets/jar-removebg-preview.png")}
                alt="jar"
                className="jar-image"
              />
              {/* Balls container - same as before but with responsive classes */}
              <div
                style={{
                  position: "absolute",
                  width: "22%",
                  height: "45%",
                  bottom: "13%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  padding: "0 10px",
                  zIndex: 2, // Ensure balls appear above jar
                  left: "39%",
                }}
                className="balls-container"
              >
                {/* Columns (same structure as before) */}
                {/* Left Column */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    gap: "8px",
                    width: "48%",
                  }}
                >
                  {teamsarr.slice(0, 3).map((val, index) => (
                    <img
                      onClick={() => handleSelectedTeam(val)}
                      // className={ball.color}
                      src={val.url}
                      key={index}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "85px",
                        transition: "transform 0.3s",
                        cursor: "pointer",
                      }}
                      // data-bs-toggle={teamName != "" ? "modal" : ""}
                      // data-bs-target={teamName != "" ? "#exampleModal" : ""}
                    />
                  ))}
                </div>

                {/* Right Column */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    gap: "8px",
                    width: "48%",
                  }}
                >
                  {teamsarr.slice(3, 6).map((val, index) => (
                    <img
                      onClick={() => handleSelectedTeam(val)}
                      // onClick={() => selectball(index + 3)}
                      // className={ball.color}
                      src={val.url}
                      key={index}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "85px",
                        transition: "transform 0.3s",
                        cursor: "pointer",
                      }}
                      // data-bs-toggle={teamName != "" ? "modal" : ""}
                      // data-bs-target={teamName != "" ? "#exampleModal" : ""}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coaches Column */}
        <div className="col-12 col-md-5">
          <div className="jar-container">
            <h3 className="d-md-none">Coaches</h3>
            {/* Mobile-first heading */}
            <h1 className="d-none d-md-block">Coaches</h1>
            {/* Desktop heading */}
            <div className="jar-wrapper" style={{ position: "relative" }}>
              <img
                src={require("../src/assets/jar-removebg-preview.png")}
                alt="jar"
                className="jar-image"
              />
              {/* Balls container - same as before but with responsive classes */}
              <div
                style={{
                  position: "absolute",
                  width: "22%",
                  height: "45%",
                  bottom: "13%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  padding: "0 10px",
                  zIndex: 2, // Ensure balls appear above jar
                  left: "39%",
                }}
                className="balls-container"
              >
                {/* Columns (same structure as before) */}
                {/* Left Column */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    gap: "8px",
                    width: "48%",
                  }}
                >
                  {coacharr.slice(0, 3).map((val, index) => (
                    <img
                      onClick={() => handleselectedcoach(val)}
                      // className={ball.color}
                      src={val.url}
                      key={index}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "85px",
                        transition: "transform 0.3s",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>

                {/* Right Column */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    gap: "8px",
                    width: "48%",
                  }}
                >
                  {coacharr.slice(3, 6).map((val, index) => (
                    <img
                      onClick={() => handleselectedcoach(val)}
                      // className={ball.color}
                      src={val.url}
                      key={index}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "85px",
                        transition: "transform 0.3s",
                        cursor: "pointer",
                      }}
                      // data-bs-toggle={teamName != "" ? "modal" : ""}
                      // data-bs-target={teamName != "" ? "#exampleModal" : ""}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Result Column */}
        {/* Result Column - Mobile Position */}
        <div className="col-12 d-md-none mt-4 px-2">
          <div
            className="result-mobile"
            style={{
              borderRadius: "10px",
              padding: "8px 0",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              {/* Team 1 Section */}
              <div className="col-4 d-flex flex-column align-items-center px-2">
                <button
                  className="team-btn mb-1"
                  style={{
                    width: "77px",
                    height: "31px",
                    borderRadius: "10%",
                    border: "none",
                    fontSize: "1rem",
                    fontWeight: 900,
                  }}
                >
                  Team
                </button>
                <span
                  className="text text-truncate"
                  style={{
                    fontSize: "0.9rem",
                    maxWidth: "100%",
                    fontWeight: "500",
                    color: "black!important",
                  }}
                >
                  {teamName}
                </span>
                {currentTeamUrl && (
                  <img
                    src={currentTeamUrl}
                    className="mt-1"
                    style={{
                      width: "30px",
                      height: "30px",
                      objectFit: "contain",
                    }}
                    alt="Team logo"
                  />
                )}
              </div>

              {/* Next Button Section */}
              <div className="col-4 d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-secondary py-2 px-3"
                  style={{
                    borderRadius: "20px",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                  onClick={() => handleReveal()}
                >
                  Next
                </button>
              </div>

              {/* Team 2 Section */}
              <div className="col-4 d-flex flex-column align-items-center px-2">
                <button
                  className="team-btn mb-1"
                  style={{
                    width: "77px",
                    height: "31px",
                    borderRadius: "10%",
                    border: "none",
                    fontSize: "1rem",
                    fontWeight: 900,
                  }}
                >
                  Coach
                </button>
                <span
                  className="text text-truncate"
                  style={{
                    fontSize: "0.9rem",
                    maxWidth: "100%",
                    fontWeight: "500",
                    color: "black!important",
                  }}
                >
                  {coachName}
                </span>
                {currentCoachUrl && (
                  <img
                    src={currentCoachUrl}
                    className="mt-1"
                    style={{
                      width: "30px",
                      height: "30px",
                      objectFit: "contain",
                    }}
                    alt="Team logo"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Result Column - Desktop Position */}
        <div className="col-md-2 d-none d-md-block">
          <div className="result-desktop">
            <div
              style={{
                width: "100%",
                height: "100%",

                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {/* for result team */}
              <div
                style={{
                  width: "80%",
                  height: "45%",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <button
                  className="shuffle-btn"
                  style={{ width: "125px", height: "36px" }}
                >
                  Team
                </button>
                <h3 style={{ top: "20px", position: "relative" }}>
                  {teamName}
                </h3>
                <img
                  className={"green"}
                  src={currentTeamUrl}
                  style={{
                    width: "50%",
                    height: "auto",
                    maxWidth: "45px",
                    transition: "transform 0.3s",
                    cursor: "pointer",
                    position: "relative",
                    top: "13px",
                  }}
                />
              </div>

              {/* for result coach */}
              <div
                style={{
                  width: "80%",
                  height: "45%",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <button
                  className="shuffle-btn"
                  style={{ width: "125px", height: "36px" }}
                >
                  Coach
                </button>
                <h3 style={{ top: "20px", position: "relative" }}>
                  {coachName}
                </h3>
                <img
                  className={"green"}
                  src={currentCoachUrl}
                  style={{
                    width: "50%",
                    height: "auto",
                    maxWidth: "45px",
                    transition: "transform 0.3s",
                    cursor: "pointer",
                    position: "relative",
                    top: "13px",
                  }}
                />
              </div>
              {/* for reveal */}
              <div
                style={{
                  width: "80%",
                  height: "10%",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <button
                  className="shuffle-btn"
                  style={{
                    width: "66px",
                    height: "27px",
                    fontSize: 12,
                    backgroundColor: "black",
                    color: "white",
                  }}
                  onClick={() => handleReveal()}
                >
                  Next
                </button>
              </div>
            </div>

            {/* Add your desktop result content here */}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="row">
        <div className="col-12">
          <div className="table-container">
            <div
              className="table-responsive"
              style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
            >
              <table className="table table-bordered table-striped text-center">
                <thead>
                  <tr>
                    {tablearr.map((val, index) => (
                      <th
                        key={index}
                        className="team-header"
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          minWidth: "120px", // Added minimum width for better touch
                        }}
                      >
                        <div className="header-content">
                          {val.teamurl && (
                            <img
                              src={val.teamurl}
                              className="team-logo"
                              alt="team"
                            />
                          )}
                          <span className="team-name">{val.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                  <tr className="coach-row">
                    {tablearr.map((val, index) => (
                      <td
                        key={index}
                        style={{
                          padding: "8px",
                          minWidth: "120px", // Match header width
                        }}
                      >
                        <div className="coach-content">
                          {val.correscoachurl && (
                            <img
                              src={val.correscoachurl}
                              className="coach-logo"
                              alt="coach"
                            />
                          )}
                          <span className="coach-name">{val.correscoach}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Shuffle Button */}
      <div className="row mt-3">
        <div className="col-12">
          <button className="shuffle-btn" onClick={() => handleclick()}>
            Shuffle
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <span className="d-none d-sm-inline"> */
}
{
  /* Full names for larger screens */
}
// Coaches
// </span>
{
  /* <span className="d-sm-none"> */
}
{
  /* Abbreviations for mobile */
}
// Coaches
// </span>
