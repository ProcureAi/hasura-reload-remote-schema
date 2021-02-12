const core = require('@actions/core');
const request = require('superagent');

(async () => {
  const endpoint = core.getInput('HASURA_ENDPOINT', { required: true });
  const adminSecret = core.getInput('HASURA_ADMIN_SECRET', { required: true });
  const schemaName = core.getInput('HASURA_REMOTE_SCHEMA_NAME', { required: true });

  try {
    const url = [
      // strip trailing slash
      endpoint.replace(/\/$/, ''),
      '/v1/query',
    ].join('');

    const res = await request
      .post(url)
      .set('x-hasura-admin-secret', adminSecret)
      .set('content-type', 'application/json')
      .send({
        type: 'reload_remote_schema',
        args: { name: schemaName },
      });

    console.log('Response body:', res.body);
    if (![200, 201].includes(res.status)) {
      core.setFailed(`Status code was not 200 or 201. Was: ${res.status}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
})();
