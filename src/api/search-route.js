import { Router } from 'express';
import SearchService from './search-service';

const router = Router();

router.get('/:query', (request, response) => {
  SearchService.searchForQuery(request.params.query, response);
});

export default router;
