import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import Menu from '../Pages/Menu';
import Itin from '../Pages/Intineraire';
import Pate from '../Pages/Pates';
import Panini from '../Pages/Paninis';

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/menu': Menu,
  '/route': Itin,
  '/menu/pate': Pate,
  '/menu/panini': Panini,
};

export default routes;
