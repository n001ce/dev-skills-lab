import { Router } from 'express'
const router = Router()
import * as devskillsCtrl from '../controllers/devskills.js'

router.get('/', devskillsCtrl.index)
router.get('/new', devskillsCtrl.new)
router.get('/:id', devskillsCtrl.show);
router.post('/', devskillsCtrl.create);
// new route below
router.delete('/:id', devskillsCtrl.delete);

export {
  router
}
