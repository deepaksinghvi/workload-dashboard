let worklaods = []

var workload1 = {
    cloud: "Central",
    testsuite: "Perf",
    testrun: "Jan2021",
    testrunid: "e105341",
    result: "PASS"
};

var workload2 = {
    cloud: "Central",
    testsuite: "Perf",
    testrun: "Feb2021",
    testrunid: "p3trt4p",
    result: "PASS"
};

var workload3 = {
    cloud: "Central",
    testsuite: "Perf",
    testrun: "Mar2021",
    testrunid: "wer234d",
    result: "PASS"
};


var workload5 = {
    cloud: "Central",
    testsuite: "Regression",
    testrun: "Jan2021",
    testrunid: "nnb56gd",
    result: "FAILED"
};

var workload6 = {
    cloud: "Central",
    testsuite: "Regression",
    testrun: "Feb2021",
    testrunid: "sdf3455",
    result: "PASS"
};



var workload8 = {
    cloud: "Central",
    testsuite: "Regression",
    testrun: "Mar2021",
    testrunid: "ppo090o",
    result: "PASS"
};

var workload9 = {
    cloud: "Search",
    testsuite: "IndexDuration",
    testrun: "Jul2020",
    testrunid: "ui78ty6",
    result: "PASS"
};

var workload10 = {
    cloud: "Search",
    testsuite: "IndexDuration",
    testrun: "Sep2020",
    testrunid: "hjdf565",
    result: "PASS"
};

var workload11 = {
    cloud: "Search",
    testsuite: "IndexDuration",
    testrun: "Oct2020",
    testrunid: "234rt56",
    result: "FAILED"
};

var workload12 = {
    cloud: "Search",
    testsuite: "IndexDuration",
    testrun: "Nov2020",
    testrunid: "2787df2",
    result: "PASS"
};

var workload13 = {
    cloud: "Search",
    testsuite: "IndexDuration",
    testrun: "Dec2020",
    testrunid: "378jdf2",
    result: "PASS"
};

var workload14 = {
    cloud: "Industries",
    testsuite: "Deployment",
    testrun: "Jan2021",
    testrunid: "ir74tw3",
    result: "PASS"
};

var workload15 = {
    cloud: "Industries",
    testsuite: "Deployment",
    testrun: "Jan2021",
    testrunid: "p0oi557",
    result: "PASS"
};

var workload16 = {
    cloud: "Industries",
    testsuite: "Deployment",
    testrun: "Feb2021",
    testrunid: "90oi8u7",
    result: "PASS"
};

var workload17 = {
    cloud: "Industries",
    testsuite: "Deployment",
    testrun: "Mar2021",
    testrunid: "we33t56",
    result: "FAILED"
};

worklaods.push(workload1)
worklaods.push(workload2)
worklaods.push(workload3)

worklaods.push(workload5)
worklaods.push(workload6)

worklaods.push(workload8)
worklaods.push(workload9)

worklaods.push(workload10)
worklaods.push(workload11)
worklaods.push(workload12)
worklaods.push(workload13)
worklaods.push(workload14)
worklaods.push(workload15)
worklaods.push(workload16)
worklaods.push(workload17)

export const getWorkloads = worklaods;         

export const getWorkload = workloadId => {
    return worklaods.find(workload => {
        return workload.testrunid ===workloadId
    });
};

