const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products'
        }
      ]
    });
    res.status(200).json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to retrieve tags.', error: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products'
        }
      ]
    });

    if (!tag) {
      return res.status(404).json({ message: 'No tag found with this id!' });
    }

    res.status(200).json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to retrieve tag.', error: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Failed to create tag.', error: err });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [affectedRows] = await Tag.update(req.body, {
      where: { id: req.params.id }
    });

    if (affectedRows === 0) {
      return res.status(404).json({ message: 'No tag found with this id!' });
    }

    res.status(200).json({ message: 'Tag updated successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update tag.', error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const affectedRows = await Tag.destroy({
      where: { id: req.params.id }
    });

    if (affectedRows === 0) {
      return res.status(404).json({ message: 'No tag found with this id!' });
    }

    res.status(200).json({ message: 'Tag deleted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete tag.', error: err });
  }
});

module.exports = router;
