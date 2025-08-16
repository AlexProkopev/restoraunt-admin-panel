
import { useSelector } from 'react-redux'
import { selectIsError } from '../../redux/authentification/authentication.selectors'
import { selectIngredientsError } from '../../redux/ingredinets/ingredinets.selectors'
import { selectDishesError } from '../../redux/dishes/dishes.selectors'
import { Notify } from 'notiflix'


function NotifyComponent() {
    const errorRefresh = useSelector(selectIsError)
    const errorRIngred = useSelector(selectIngredientsError)
    const errorDish = useSelector(selectDishesError)

    if (errorRefresh) Notify.failure(`Ошибка ${errorRefresh}`)
    if (errorRIngred) Notify.failure(`Ошибка ${errorRIngred}`)
    if (errorDish) Notify.failure(`Ошибка ${errorDish}`)
  return (
    <></>
  )
}

export default NotifyComponent