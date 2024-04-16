import { useHomeData } from '../../context/home.context';
import { HttpService } from '../../services/http.service';
import { METHODS } from '../../types/constants';
import { GET_EXERCISES } from '../../utils/endpoints';
import styles from './header.module.css';

export const Header = () => {
  const { exercises, setExercises } = useHomeData();
  const addNextItem = async () => {
    const limit = exercises.length + 1;
    const res = await HttpService({
      url: GET_EXERCISES,
      method: METHODS.GET,
      params: { limit },
    });
    setExercises(res);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>QuickCard</h1>
      <h3 className={styles.addExercise} onClick={addNextItem}>
        Add a new exercise
      </h3>
    </div>
  );
};
