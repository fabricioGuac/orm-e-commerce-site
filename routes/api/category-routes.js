const router = require('express').Router();
const { Model } = require('sequelize');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include:[{model:Product}],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // Check if the id parameter contains only numeric characters
  if (!/^\d+$/.test(req.params.id)) {
    return res.status(400).json({ message: 'Invalid categoty ID.' });
  }
  try {
    const category = await Category.findByPk(req.params.id,{
      include:[{model:Product}]
    });
    if(!category){
      res.status(404).json({message: 'Category not found'});
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCat = await Category.create(req.body);
    res.status(200).json(newCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
    // Check if the id parameter contains only numeric characters
    if (!/^\d+$/.test(req.params.id)) {
      return res.status(400).json({ message: 'Invalid categoty ID.' });
    }
  try {
    const upCat = await  Category.update(req.body,{
      where:{id:req.params.id}
    });
    if(upCat[0]===0){
      res.status(404).json({message: 'Category not found'});
      return;
    }
    // refreshing entity relationships
    await Product.update({
      category_id: req.params.id
    }, {where: {category_id: req.params.id}},);
    res.status(200).json(upCat)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
    // Check if the id parameter contains only numeric characters
    if (!/^\d+$/.test(req.params.id)) {
      return res.status(400).json({ message: 'Invalid categoty ID.' });
    }
  try {
    const delCat = await Category.destroy({
      where:{id:req.params.id}
    });
    if(!delCat){
      res.status(404).json({message: 'Category not found'});
      return;
    }
    res.status(200).json(delCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
