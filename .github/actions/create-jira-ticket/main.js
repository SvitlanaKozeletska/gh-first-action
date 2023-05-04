const core = require('@actions/core');
const github = require('@actions/github');

function run () {

  const issue = core.getInput('issue', {required: true});
  core.notice('Hello from my custom JS action' + issue.assignee.login);
}

run();
