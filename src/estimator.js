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
    infectionsByRequestedTime: Math.trunc(reportedCases * (2 ** (data.timeToElapse / 3))),
    severeCasesByRequestedTime: Math.trunc(infectionsByRequestedTime * (15 / 100)),
    hospitalBedsByRequestedTime: Math.trunc(totalHospitalBeds - severeCasesByRequestedTime),
    casesForICUByRequestedTime: Math.trunc(infectionsByRequestedTime * (5 / 100)),
    casesForVentilatorsByRequestedTime: Math.trunc(infectionsByRequestedTime * (2 / 100)),
    dollarsInFlight: Math.trunc((infectionsByRequestedTime * a * b) / timeToElapse)
  };
  const severeImpact = {
    currentlyInfected: Math.trunc(data.reportedCases * 50),
    infectionsByRequestedTime: Math.trunc(reportedCases * (2 ** (timeToElapse / 3))),
    severeCasesByRequestedTime: Math.trunc(infectionsByRequestedTime * (15 / 100)),
    hospitalBedsByRequestedTime: Math.trunc(totalHospitalBeds - severeCasesByRequestedTime),
    casesForICUByRequestedTime: Math.trunc(infectionsByRequestedTime * (5 / 100)),
    casesForVentilatorsByRequestedTime: Math.trunc(infectionsByRequestedTime * (2 / 100)),
    dollarsInFlight: Math.trunc((infectionsByRequestedTime * a * b) / timeToElapse)
  };
  return { data, impact, severeImpact };
};

export default covid19ImpactEstimator;
