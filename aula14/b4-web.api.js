
const b4Service = require('./b4-service')


module.exports = {
  getAllBundles: getAllBundles,
  getBundle: getBundle,
  createBundle: createBundle
}


function getAllBundles(req, rsp) {
    b4Service.getAllBundles(processGetAllBundles)

    function processGetAllBundles(err, bundles) {
      // rsp.setHeader('Content-type', 'application/json')
      // rsp.end(JSON.stringify(bundles))

      rsp.json(bundles)
    }
}

function getBundle(req, rsp) {
    b4Service.getBundle(req.params.id, processGetBundle)

    function processGetBundle(err, bundle) {
      rsp.json(bundle)
    }
}

function createBundle(req, rsp) {
  b4Service.createBundle(rsp.body.name, rsp.body.description, processCreateBundle)
  
  function processCreateBundle(err, status) {

  }
}