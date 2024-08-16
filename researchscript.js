// peoplescript.js
// Define the topic dictionary as a JavaScript object
const topics = {
 "tip vortex breakdown": {
 "name": "Tip vortex breakdown in a wind turbine wake",
 "description": "Wind turbines are exposed to widely varying inflow conditions that depend on the local boundary layer meteorology. These inflow conditions are characterised by varying degrees of mean velocity shear and turbulence intensity, which affect the performance and durability of the turbine as well as the downstream evolution of the wake. These effects are challenging to study in the field due to the large scales involved, and most wind tunnel experiments are conducted at low Reynolds numbers. The near wakes of wind turbines are dominated by vortices shed from the tips of the blades. As they advect downstream, the tip vortices form a helical structure with three convoluted spirals. The spacing of the tip vortices, and thus their tendency to break down, is governed by the tip speed ratio, which represents the rotational speed of the turbine relative to the incoming wind speed and is set such as to maximize power output. We use the active turbulence grid in the VDTT to investigate the effect of the inflow turbulence, inflow shear, and tip speed ratio on tip vortex breakdown and turbulent transport phenomena in wind turbine wakes.",
 "image": "",
 },

 "dynamic stall": {
 "name": "The unsteady aerodynamics of wind turbine blades",
 "description": "Atmospheric turbulence leads to rapidly fluctuating loads on turbine blades, which impede performance predictions and cause mechanical failure. We study the underlying time-resolved flow physics and further our understanding of non-stationary flows. Blade performance and durability optimisations rely on high-fidelity numerical simulations, but complex phenomena like flow separation and non-stationary behaviour are notoriously difficult to simulate. We do not sufficiently understand the underlying flow physics to model them accurately. Most experiments on blade cross-sections (airfoils) are conducted in conventional wind tunnels at relatively low Reynolds numbers and it is often not clear to what extent the results can be applied to full-scale turbine blades. Our research fills this gap in our understanding by investigating the flow around an airfoil at very high Reynolds numbers. The sheared and highly turbulent inflow conditions commonly found in wind farms often cause sudden changes in the flow experienced by a blade, leading to a phenomenon known as dynamic stall. A large vortex forms over the airfoil and convects downstream. It causes extreme fluctuations in the loads on the blade, momentarily overshooting and then rapidly undershooting the loads predicted by classical aerodynamic theory. These fluctuations complicate performance predictions and lead to mechanical fatigue over time. We are still unable to predict how exactly the flow over an airfoil will respond to an arbitrary fluctuation in the inflow direction. We pursue a fundamental understanding of the precursors and parameters governing dynamic stall. Specifically, our research in this field aims at elucidating scaling laws that describe these phenomena, as well as creating more accurate representations of dynamic stall in wind turbine models.",
 "image": "",
 },

 "LPT": {
 "name": "Wakes and turbine-turbine interactions in wind farms",
 "description": "Wind turbines extract kinetic energy from the incoming flow and convert it into electricity. This leads to a momentum deficit in the wake region immediately downstream of the turbine. Turbulent entrainment of momentum into the wake re-energizes the flow over time. Due to the typical spacing between turbines in a wind farm, the wake of an upstream turbine often reaches a downstream turbine before the flow has been fully re-energized. The less kinetic energy there is in the flow, the less of it a wind turbine can extract, so the output of the downstream turbine is reduced. How to re-energize the flow behind the turbine as rapidly as possible is a central question in wind energy science. Wind turbine wakes are far more complex than canonical wakes behind bluff bodies due to the presence of tip vortices shed from the three blade tips, as well as a root vortex shed from the turbine hub. We study the re-energising of the wake region through turbulent entrainment of momentum and the resulting interactions with downstream turbines.  We do this using 3D Lagrangian particle tracking in the Variable Density Turbulence Tunnel. We are using a three-dimensional Lagrangian particle tracking system to develop a Lagrangian description of wake dissipation and study far-wake behaviour.",
 "image": "",
 },

 "bubbles": {
 "name": "3D Lagrangian particle tracking in the atmosphere",
 "description": "Field measurements of atmospheric turbulence are challenging to conduct, not only because flow conditions are constantly changing in space and time, but also because of the high Reynolds numbers and thus the large range of scales present in the turbulence. Among the most challenging techniques is Lagrangian particle tracking, which is used to investigate turbulent mixing and dispersion behaviour. The ability to conduct highly-resolved Lagrangian measurements in the atmosphere is of interest to a wide range of applications including wind turbine flows, the spreading of pollutants and urban fluid dynamics. This study is motivated by the desire to investigate coherent structures in the wakes of wind turbines. These flow structures are too small to be adequately captured by large-scale measurement techniques like LIDAR and remote sensing. However, they require fields of view significantly larger than those achieved in laboratory-scale experiments. We are exploring soap bubbles as atmospheric tracer particles. We use Phantom high-speed cameras for data acquisition and a shake-the-box code for reconstructing the particle tracks. The long-term goal of this work is to image the largest possible field of view in order to study the flow behind wind turbines and other large-scale structures.",
 "image": "",
 },

 "thermal effects": {
 "name": "Thermal boundary layer effects on wind turbine wakes",
 "description": "Wind farm performance depends on the transport and redistribution of momentum from the turbulent atmospheric flow to the wind turbines, but our understanding of these processes is limited. We know that a wind farm flow is more than a simple superposition of many individual turbine flows and that the local meteorological conditions intricately affect turbine- and farm-scale flows. We study the effect of atmospheric stability on turbulent transport phenomena in wind farms. Unstable atmospheric boundary layers are characterised by buoyancy-driven turbulent mixing. We are sing hot-wire anemometry in the Prandtl wind tunnel at the MPI-DS to investigate how unstable boundary layers interact with wind turbine wakes. Our long-term goal is to install a heat exchanger in the VDTT to study the interaction of multiple turbines in a wind farm at dynamic similarity to real wind turbines.",
 "image": "",
 },

 "mowito": {
 "name": "Reynolds number effects on wind turbine performance",
 "description": "It is typically assumed that both the aerodynamic performance of the rotor and the dissipation of the wake vary with the turbine Reynolds number, but that a threshold exists beyond which it is Reynolds number independent. However, recent studies observed such asymptotic Reynolds number behavior around Re_D ∼ 10^7. We investigate the effects of Reynolds number on turbine performance and wake morphology by studying a single turbine over a Reynolds number range of 1.0 × 10^5 ≤ Re_D ≤ 2.0 × 10^7. Results at the lower end of the range are directly comparable to results from conventional wind tunnel experiments, while results at the upper end of the range are comparable to field measurements of full-scale turbines. By spanning this wide range, our experiments help to reconcile existing studies from laboratory and field conditions. In addition, the results can serve as validation for numerical simulations. The use of a pressurized wind tunnel is crucial for this. Traditional wind tunnels increase the Reynolds number by increasing the velocity, but this reduces the tip speed ratio. In order to maintain reasonably high tip speed ratios, unrealistically speed ratios is largely unexplored. The VDTT achieves high Reynolds numbers at low velocities, and high tip speed ratios can be achieved at easily realizable rotation rates. We measure turbine power output as well as the optimal pitch angle of the turbine. This research is conducted in collaboration with researchers at the University of Oldenburg.",
 "image": "",
 },

 "WITCH": {
 "name": "The representation of renewable energy in integrated assessment models",
 "description": "Offshore wind energy is a rapidly growing industry with the potential to contribute significantly to the clean energy transition. However, most of the complex systems models used to inform policy decisions -so-called integrated assessment models- project virtually no offshore wind energy deployment due to its higher cost compared to other renewables energy sources. These models are cost-minimising, but real-world policy decisions are driven by a variety of factors including anticipated job creation and public pushback against infrastructure projects, not by cost alone. Incorporating these qualitative factors into quantitative models is challenging, but necessary to accurately inform policy decisions. We developed a method to incorporate public acceptance of onshore and offshore wind energy in the United States into the global dynamic model WITCH. We found that public opposition had a significant effect on model projections of onshore and offshore wind energy deployment by the end of the century. Currently, we are working to include other constraints like the spatial proximity of power generation to population-dense areas. Renewable energy resources are not always located near urban load centers. The transmission lines required to transport the electricity are expensive and face heavy public opposition, but integrated assessment models lack the spatial resolution to explicitly model these issues. A quantitative representation of the remoteness of a renewable energy resource is needed. The fundamental question here is how to develop quantitative representations of qualitative constraints and embed them in complex systems models. We conduct this research in collaboration with researchers at TU Delft, Politecnico di Milano and Princeton University.",
 "image": "",
 },

 };

// Function to render a member's information
function renderTopic(topic) {
  const topicHTML = `
    <div class="topic">
      <div class="topic-text">
        <h1>${topic.name}</h1>
        <p>${topic.description}</p>
      </div>
    </div>
  `;
  return topicHTML;
}

// Function to render all topics
function renderTopics() {
  const topicsContainer = document.getElementById('topic-container'); // Replace 'container-id' with your actual element id
 topicsContainer.innerHTML = "";
 for (const topic in topics) {
 const topicHTML = renderTopic(topics[topic]);
 topicsContainer.insertAdjacentHTML("beforeend", topicHTML);
 }
}
