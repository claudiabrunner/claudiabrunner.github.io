// peoplescript.js
// Define the members dictionary as a JavaScript object
const members = {
 "Claudia Brunner": {
 "name": "Dr. Claudia Brunner",
 "title": "PI",
 "bio": "Dr. Claudia Brunner is head of the Max Planck Research Group “Turbulence and Wind Energy“ at the Max Planck Institute for Dynamics and Self-Organization. Her research focuses on experimental studies of large-scale fluid dynamics involving turbulence and unsteady effects. She is particularly interested in flows that are relevant for the fields of energy and the environment, with a particular focus on wind energy, and she supplements her engineering research with studies of relevant policy questions. Before becoming an independent group in March 2024, Dr. Brunner's group was a Minerva Fast Track Group within the department of Prof. Bodenschatz. Prior to that, Dr. Brunner was a postdoc with Prof. Bodenschatz. She received her PhD in May 2022 from the Department of Mechanical and Aerospace Engineering at Princeton University, where she was advised by Prof. Marcus Hultmark. Dr. Brunner received a National Defense Science and Engineering Graduate Fellowship from the Department of Defense, and a Science, Technology and Environmental Policy Fellowship from the High Meadows Environmental Institute and the School of Public and International Affairs at Princeton University. She holds an M.A. in Mechanical and Aerospace Engineering from Princeton University and a B.S. in Mechanical Engineering and a B.A. in International Relations from Stanford University.",
 "image": "images/BrunnerClaudia_headshot.jpg",
 "cv": "CVs/CV_CBrunner.pdf"
 },

 "Yuna Hattori": {
 "name": "Dr. Yuna Hattori",
 "title": "postdoc",
 "bio": "Dr. Yuna Hattori’s research in the Turbulence and Wind Energy Group focuses on experimental studies of thermal effects on the flow behaviour around wind turbines. She is particularly interested in applying knowledge of fundamental fluid mechanics to tackle climate issues. Dr. Hattori received her PhD in fluid mechanics from the Okinawa Institute of Science and Technology in Japan in March 2023, where she was supervised by Prof. Pinaki Chakraborty. Her PhD research was concerned with self-similarity in the boundary-layer flow over a dynamic boundary. She used a soap-film experimental setup, OpenFOAM simulations, and theoretical analysis. She holds a B.S. in physics from Ochanomizu University in Japan, where she conducted research in theoretical particle physics.",
 "image": "images/groupmembers/yunahattori.jpg",
 },

  "Hyunseok Kim": {
  "name": "Dr. Hyunseok Kim",
  "title": "postdoc",
  "bio": "Dr. Hyunseok Kim is a Sejong Fellow, awarded by the National Research Foundation of South Korea for his postdoctoral research. He joined the Turbulence and Wind Energy Group in September 2024 and studies turbine blade erosion due to particle-laden atmospheric turbulence in the Variable Density Turbulence Tunnel. In his research, Dr. Kim explores ways to control fluid-related phenomena through fundamental studies of the aerodynamics of wind energy, multiphase environmental fluid mechanics, and heat transfer. He aims to address sustainability challenges through technological innovation. Prior to joining the MPI-DS, Dr. Kim worked as a staff engineer in the Environment, Health & Safety Research Center at Samsung Electronics, where he contributed to the development of next-generation greenhouse gas abatement facilities. He holds a Ph.D. in mechanical engineering and a bachelor’s degree in nuclear engineering from Seoul National University.",
  "image": "images/groupmembers/hyunseokkim.jpg",
  "cv": "CVs/CV_HKim.pdf"
},

 "Lorenn Le Turnier": {
 "name": "Lorenn Le Turnier",
 "title": "PhD",
 "bio": "Lorenn Le Turnier joined the Turbulence and Wind Energy Group as a PhD student in September 2023. She studies the flow dynamics in the wakes of wind turbines using Lagrangian particle tracking in the Variable Density Turbulence Tunnel. Before joining the MPI-DS, Ms. Le Turnier worked at ArianeGroup in France. She completed her master’s degree in aeronautics and space with a specialization in energy and mechanics at the University of Paris-Saclay in 2022. She wrote her master’s thesis on heat transfer in the Molecular and Macroscopic Energy and Combustion Laboratory (EM2C) at CentraleSupélec. Lorenn holds a bachelor's degree in applied physics from the University of Paris-Saclay. During her bachelor’s degree, she worked in the Department of Molecular Physics at the Physics Institute of Rennes.",
 "image": "images/groupmembers/lorennleturnier.jpg"
  },

  "Mano Grunwald": {
  "name": "Mano Grunwald",
  "title": "master",
  "bio": "Mano Grunwald is a master’s student in the Turbulence and Wind Energy Group, where he also completed his bachelor thesis. For his research, he is conducting hot-wire measurements in the Variable Density Turbulence Tunnel to study turbulence in the wake of a wind turbine. He is enrolled in the physics program at the Georg-August-University Göttingen, from which he also received his B.S. degree in 2023. He also holds a B.S. in business and engineering from the Technical University of Clausthal.",
   },

   "Son Bien": {
   "name": "Son Bien",
   "title": "master",
   "bio": "",
    },

   "Fabian Krippenstapel": {
   "name": "Fabian Krippenstapel",
   "title": "bachelor",
   "bio": "",
   "image": "",
    },
 };

// Function to render a member's information
function renderMember(member) {
  const memberHTML = `
    <div class="member">
      ${member.image ? `<img src="${member.image}" alt="Image" class="member-image">` : `<div class="image-placeholder"></div>`}
      <div class="member-text">
        <h1>${member.name}</h1>
        <p>${member.bio}</p>
        ${member.cv ? `<a href="${member.cv}">CURRICULUM VITAE</a>` : `<div></div>`}
      </div>
    </div>
  `;

  return memberHTML;
}

// Function to render all or specific members
function renderMembers(title, containerId) {
 const membersContainer = document.getElementById(containerId);
 membersContainer.innerHTML = "";
 for (const member in members) {
 if (members[member].title === title) {
 const memberHTML = renderMember(members[member]);
 membersContainer.insertAdjacentHTML("beforeend", memberHTML);
 }
 }
}
