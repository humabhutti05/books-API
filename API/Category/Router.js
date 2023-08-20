const app = require('express')
const router = app.Router()
const { getallCategories, getCategoriesByID, updateCategory, createCategory, deleteCategory } = require('./Controller')

router.get('/get-all-Categories', getallCategories)
router.get('/get-Category-by-Id', getCategoriesByID)
router.post('/create-Category', createCategory)
router.put('/update-Category', updateCategory)
router.delete('/delete-Category', deleteCategory)


  module.exports = router