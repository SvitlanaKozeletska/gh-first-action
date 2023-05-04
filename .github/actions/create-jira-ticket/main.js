const core = require('@actions/core');
const github = require('@actions/github');

function run () {

  const issue = core.getInput('issue', {required: true});
  core.notice(JSON.parse(issue));
}

run();
