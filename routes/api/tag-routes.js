const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include:[{model:Product}],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  // Check if the id parameter contains only numeric characters
  if (!/^\d+$/.test(req.params.id)) {
    return res.status(400).json({ message: 'Invalid tag ID.' });
  }
  try {
    const tag = await Tag.findByPk(req.params.id,{
      include:[{model:Product}],
    });
    if(!tag){
      res.status(404).json({message: 'Tag not found'});
      return;
    }
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  // Check if the id parameter contains only numeric characters
  if (!/^\d+$/.test(req.params.id)) {
    return res.status(400).json({ message: 'Invalid tag ID.' });
  }
  try {
    const upTag = await Tag.update(req.body,{ 
      where:{id:req.params.id},
    });
    if(upTag[0] === 0){
      res.status(404).json({message: 'Tag not found'});
      return;
    }
    res.status(200).json(upTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  // Check if the id parameter contains only numeric characters
  if (!/^\d+$/.test(req.params.id)) {
    return res.status(400).json({ message: 'Invalid tag ID.' });
  }
  try {
    const delTag = await Tag.destroy({
      where: {id: req.params.id},
    });
    if(!delTag){
      res.status(404).json({message: 'Tag not found'});
      return;
    }
    res.status(200).json(delTag)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
