const covid19ImpactEstimator = (data) => {
    const input= data;
    if (data.periodType === "weeks") {data.timeToElapse *= 7;}
    if (data.periodType === "months") {data.timeToElapse *= 30;}
    data.totalHospitalBeds *= 35/100;
    var a = data.region.avgDailyIncomeInUSD;
    var b = data.region.avgDailyIncomePopulation;
    return{
        data: input,
        impact: {
            currentlyInfected : Math.trunc (data.reportedCases * 10),
            infectionsByRequestedTime : Math.trunc (reportedCases * (2^(timeToElapse/3))),
            severeCasesByRequestedTime : Math.trunc (infectionsByRequestedTime * (15/100)),
            hospitalBedsByRequestedTime : Math.trunc (totalHospitalBeds - severeCasesByRequestedTime),
            casesForICUByRequestedTime : Math.trunc (infectionsByRequestedTime * (5/100)),
            casesForVentilatorsByRequestedTime : Math.trunc (infectionsByRequestedTime * (2/100)),
            dollarsInFlight : Math.trunc ((infectionsByRequestedTime * a * b)/timeToElapse)
        },
        severeImpact: {
            currentlyInfected : Math.trunc (data.reportedCases * 50),
            infectionsByRequestedTime : Math.trunc (reportedCases * (2^(timeToElapse/3))),
            severeCasesByRequestedTime : Math.trunc (infectionsByRequestedTime * (15/100)),
            hospitalBedsByRequestedTime : Math.trunc (totalHospitalBeds - severeCasesByRequestedTime),
            casesForICUByRequestedTime : Math.trunc (infectionsByRequestedTime * (5/100)),
            casesForVentilatorsByRequestedTime : Math.trunc (infectionsByRequestedTime * (2/100)),
            dollarsInFlight : Math.trunc((infectionsByRequestedTime * a * b)/timeToElapse)
        }
    };
};
    
export default covid19ImpactEstimator;
