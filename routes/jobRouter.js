import {Router} from 'express'
const router = Router()

import {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
} from '../controllers/jobController.js'
import { validateJobInput,  validateIdParam} from '../middleware/validationMiddleware.js'

// router.get('/', getAllJobs)
// router.post('/', createJob)

router.route('/').get(getAllJobs).post(validateJobInput, createJob)
router.route('/:id').get(validateIdParam, getJob).patch(validateJobInput ,validateIdParam, updateJob).delete(validateIdParam, deleteJob)

export default router;