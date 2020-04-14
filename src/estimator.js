/*window.onload=function() {
  e = document.getElementById('my-form').onsubmit=function() {
  /* do what you want with the form *

  // Should be triggered on form submit
  alert('hi');
  // You must return false to prevent the default form behavior
  return false;
}
}*/
data.reportedCases = e.reportedCases.value;
data.population = e.population.value;
data.timeToElapse = e.timeToElapse.value;
data.totalHospitalBeds = e.totalHospitalBeds.value;
data.periodType = e.periodType.value;
const covid19ImpactEstimator = (data) => {
  if (data.periodType === 'weeks') { data.timeToElapse *= 7; }
  if (data.periodType === 'months') { data.timeToElapse *= 30; }
  data.totalHospitalBeds *= 35 / 100;
  const a = data.region.avgDailyIncomeInUSD;
  const b = data.region.avgDailyIncomePopulation;

  /*var ci = Math.trunc(data.reportedCases * 10);
  var*/ 

  const impact = {
    currentlyInfected: Math.trunc(data.reportedCases * 10),
    infectionsByRequestedTime: Math.trunc(reportedCases * (Math.pow(2,(data.timeToElapse / 3)))),
    severeCasesByRequestedTime: Math.trunc(infectionsByRequestedTime * (15 / 100)),
    hospitalBedsByRequestedTime: Math.trunc(totalHospitalBeds - severeCasesByRequestedTime),
    casesForICUByRequestedTime: Math.trunc(infectionsByRequestedTime * (5 / 100)),
    casesForVentilatorsByRequestedTime: Math.trunc(infectionsByRequestedTime * (2 / 100)),
    dollarsInFlight: Math.trunc((infectionsByRequestedTime * a * b) / timeToElapse)
  };
  const severeImpact = {
    currentlyInfected: Math.trunc(data.reportedCases * 50),
    infectionsByRequestedTime: Math.trunc(reportedCases * (Math.pow(2,(timeToElapse / 3)))),
    severeCasesByRequestedTime: Math.trunc(infectionsByRequestedTime * (15 / 100)),
    hospitalBedsByRequestedTime: Math.trunc(totalHospitalBeds - severeCasesByRequestedTime),
    casesForICUByRequestedTime: Math.trunc(infectionsByRequestedTime * (5 / 100)),
    casesForVentilatorsByRequestedTime: Math.trunc(infectionsByRequestedTime * (2 / 100)),
    dollarsInFlight: Math.trunc((infectionsByRequestedTime * a * b) / timeToElapse)
  };
  return { data, impact, severeImpact };
};
//console.log(covid19ImpactEstimator(data));
export default covid19ImpactEstimator;
