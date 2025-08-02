import { useSelector } from 'react-redux';
import { selectUserData } from '../redux/authentification/authentication.selectors';

function useCheckRole() {
  const userData = useSelector(selectUserData);
  const { role } = userData || '';

  const checkRole = () => {
    if (role === 'admin') return true;
    return false;
  };
  return { checkRole, role };
}

export default useCheckRole;
