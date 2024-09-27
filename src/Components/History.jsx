import axios from "axios";
import React, { useState } from "react";
import Select from 'react-select';
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const History = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [amyloidosisTypes, setAmyloidosisTypes] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [treatmentHistory, setTreatmentHistory] = useState("");
  const [currentMedications, setCurrentMedications] = useState([]);
  const [familyHistory, setFamilyHistory] = useState("");
  const [lifestyleFactors, setLifestyleFactors] = useState([]);

  const navigate = useNavigate();  // Initialize the useNavigate hook

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const amyloidosisTypeOptions = [
    { value: "AL Amyloidosis", label: "AL Amyloidosis" },
    { value: "AA Amyloidosis", label: "AA Amyloidosis" },
    { value: "Hereditary Amyloidosis", label: "Hereditary Amyloidosis" },
    { value: "Other", label: "Other" },
  ];

  const symptomOptions = [
    { value: "Fatigue", label: "Fatigue" },
    { value: "Swelling (edema)", label: "Swelling (edema)" },
    { value: "Weight Loss", label: "Weight Loss" },
    { value: "Shortness of Breath", label: "Shortness of Breath" },
    { value: "Other", label: "Other" },
  ];

  const medicationOptions = [
    { value: "Chemotherapy", label: "Chemotherapy" },
    { value: "Dexamethasone", label: "Dexamethasone" },
    { value: "Stem Cell Transplant", label: "Stem Cell Transplant" },
    { value: "Other", label: "Other" },
  ];

  const lifestyleOptions = [
    { value: "Dietary Modifications", label: "Dietary Modifications" },
    { value: "Exercise", label: "Exercise" },
    { value: "Regular Monitoring", label: "Regular Monitoring" },
    { value: "Other", label: "Other" },
  ];

  const handleHistorySubmission = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://asgi-portal-backend.onrender.com/api/v1/history/history",
        {
          firstName,
          lastName,
          dob,
          gender,
          amyloidosisTypes: amyloidosisTypes.map((item) => item.value),
          symptoms: symptoms.map((item) => item.value),
          treatmentHistory,
          currentMedications: currentMedications.map((item) => item.value),
          familyHistory,
          lifestyleFactors: lifestyleFactors.map((item) => item.value),
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      
      // Redirect to the homepage after successful form submission
      navigate("/");  // Replace "/" with the appropriate path to your homepage
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="container form-component patient-history-form">
      <h2>Amyloidosis Patient History</h2>
      <form onSubmit={handleHistorySubmission}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <Select
            value={gender ? { value: gender, label: gender } : null}
            options={genderOptions}
            onChange={(selected) => setGender(selected?.value || "")}
            placeholder="Select Gender"
          />
       </div>
        <div>
          <CreatableSelect
            isMulti
            options={amyloidosisTypeOptions}
            value={amyloidosisTypes}
            onChange={setAmyloidosisTypes}
            placeholder="Select or Type Amyloidosis Type(s)"
          />
        </div>
        <div>
          <CreatableSelect
            isMulti
            options={symptomOptions}
            value={symptoms}
            onChange={setSymptoms}
            placeholder="Select or Type Symptoms"
          />
        </div>
        <div>
          <textarea
            rows="4"
            value={treatmentHistory}
            onChange={(e) => setTreatmentHistory(e.target.value)}
            placeholder="Previous Treatment History"
          />
        </div>
        <div>
          <CreatableSelect
            isMulti
            options={medicationOptions}
            value={currentMedications}
            onChange={setCurrentMedications}
            placeholder="Select or Type Current Treatment"
          />
        </div>
        <div>
          <textarea
            rows="4"
            value={familyHistory}
            onChange={(e) => setFamilyHistory(e.target.value)}
            placeholder="Family History of Amyloidosis"
          />
        </div>
        <div>
          <CreatableSelect
            isMulti
            options={lifestyleOptions}
            value={lifestyleFactors}
            onChange={setLifestyleFactors}
            placeholder="Select or Type Lifestyle Factors"
          />
        </div>
        <button type="submit" style={{ margin: "10 auto" }}>
          Submit History
        </button>
      </form>
    </div>
  );
};

export default History;
