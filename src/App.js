import React, { useState } from "react";
import "./App.css";
import AssessmentCard from "./components/AssessmentCard";
import Navbar from "./components/Navbar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(""); 

  const assessments = [
    {
      title: "English + Instruction Following",
      type: "Languages",
      questions: 27,
      duration: 45,
      skills: "English",
    },
    {
      title: "Evaluating AI",
      type: "General Skills",
      questions: 3,
      duration: 100,
      skills: "Preference Ranking",
    },
    {
      title: "Prompting 101",
      type: "Programming",
      questions: 3,
      duration: 90,
      skills: "Prompt Engineering, Prompt Optimization",
    },
  ];

  return (
    <div className="app">
      <div className="content">
       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <Navbar toggleSidebar={() => setSidebarOpen(true)} />
        <ul>
          <li onClick={() => setSelectedSection("home")}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/reading-series-icons/home-page-195.png" alt="Home" className="sidebar-icon" />
            Home
          </li>
          <li onClick={() => setSelectedSection("training")}>
            <img src="https://tse3.mm.bing.net/th/id/OIP.RnNbKZiFMVAs9AtAWOrFoQHaHa?pid=Api&P=0&h=180" alt="Training" className="sidebar-icon" />
            Training
          </li>
          <li onClick={() => setSelectedSection("payment")}>
            <img src="https://logowik.com/content/uploads/images/secure-payment2785.jpg" alt="Payment" className="sidebar-icon" />
            Payment
          </li>
          <li onClick={() => setSelectedSection("earnings")}>
            <img src="https://tse4.mm.bing.net/th/id/OIP.rY0rIaq2-JMfetB1zSDmJwHaHa?pid=Api&P=0&h=180" alt="Earnings" className="sidebar-icon" />
            Earnings
          </li>
          <li
            className={selectedSection === "assessments" ? "active" : ""}
            onClick={() => setSelectedSection("assessments")}
          >
            <img src="https://tse2.mm.bing.net/th/id/OIP.mb1JdQ8Zp1QSjFVWA09xqAHaHa?pid=Api&P=0&h=180" alt="Assessments" className="sidebar-icon" />
            Assessments
          </li>
          <li onClick={() => setSelectedSection("profile")}>
            <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" alt="Profile" className="sidebar-icon" />
            Profile
          </li>
          <li onClick={() => setSelectedSection("faq")}>
            <img src="https://tse3.mm.bing.net/th/id/OIP.SG7MpDnwlER42dS7Lgu4uQHaHa?pid=Api&P=0&h=180" alt="FAQs" className="sidebar-icon" />
            FAQs
          </li>
        </ul>
      </div>


      <main className="main">
        {selectedSection === "assessments" ? (
          <>
            <div className="banner">
              <h3>Qualify for These Skills</h3>
              <p>Take tests to qualify for projects & increase your chances of getting shortlisted</p>
            </div>
            <h1>Available Assessments</h1>
            <div className="grid">
              {assessments.map((a, index) => (
                <AssessmentCard key={index} {...a} />
              ))}
            </div>
          </>
        ) : (
          <h2 className="pre-banner">Please select a section from the sidebar.</h2>
        )}
      </main>
    </div>

      
  </div>
  );
}

export default App;
