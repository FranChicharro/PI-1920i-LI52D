// GET /books/123


const http = require('http')
const booksApi = require('./b4-web-api')

const router = require('./router');


router.get('/bundles', booksApi.getAllBundles)
router.post('/bundles', booksApi.createBundle)
router.get('/bundles/:id', booksApi.getBundle)
router.delete('/bundles/:id', booksApi.deleteBundle)
router.put('/bundles/:id', booksApi.updateBundle)
router.put('/bundles/:idBundle/books/:idBook', booksApi.addBookToBundle)



server = http.createServer(router)

