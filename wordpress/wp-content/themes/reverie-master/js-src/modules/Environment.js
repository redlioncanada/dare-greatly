module.exports = makeEnvironment = function() {

    var dev = "DEV";
    var qa = "QA";
    var prod = "PRODUCTION";
    var local = "LOCAL";

    if (document.domain.indexOf('daregreatly.com') !== -1) {
        env = prod;
    } else if (document.domain.indexOf('dare-greatly-dev') !== -1) {
        env = dev;
    } else if (document.domain.indexOf('dare-greatly-qa') !== -1) {
        env = qa;
    } else {
        env = local;
    }




return ({
    dev: dev,
    qa: qa,
    prod: prod,
    local: local,
    env: env
});

};
