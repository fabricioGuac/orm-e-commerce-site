const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  // Check if the id parameter contains only numeric characters
  if (!/^\d+$/.test(req.params.id)) {
    return res.status(400).json({ message: 'Invalid product ID.' });
  }
  try {
    if(!tag){
      res.status(404).json({message: 'Category not found'});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  // Check if the id parameter contains only numeric characters
  if (!/^\d+$/.test(req.params.id)) {
    return res.status(400).json({ message: 'Invalid product ID.' });
  }
  try {
    if(tag[0] === 0){
      res.status(404).json({message: 'Category not found'});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  // Check if the id parameter contains only numeric characters
  if (!/^\d+$/.test(req.params.id)) {
    return res.status(400).json({ message: 'Invalid product ID.' });
  }
  try {
    const delTag = await Tag.destroy({
      where: {id: req.params.id},
    });
    if(!delTag){
      res.status(404).json({message: 'Category not found'});
      return;
    }
    res.status(200).json(delTag)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
