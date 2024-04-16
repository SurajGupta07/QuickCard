import { useHomeData } from '../../context/home.context';
import styles from './home.module.css';

export const Home = () => {
  const { exercises, setExercises } = useHomeData();

  const handleDelete = (id) => {
    const updatedExercises = exercises.filter((exercise) => exercise.id !== id);
    setExercises(updatedExercises);
  };

  return (
    <div className={styles.home}>
      {exercises.map((exercise) => (
        <div key={exercise.id} className={styles.exerciseCard}>
          <img src={exercise.gifUrl} alt={exercise.name} height={'200'} width={'200'} />
          <h2>{exercise.name}</h2>
          <p>
            <strong>Body Part:</strong> {exercise.bodyPart}
          </p>
          <p>
            <strong>Target:</strong> {exercise.target}
          </p>
          <p>
            <strong>Equipment:</strong> {exercise.equipment}
          </p>
          <p>
            <strong>Secondary Muscles:</strong> {exercise.secondaryMuscles.join(', ')}
          </p>
          <button onClick={() => handleDelete(exercise.id)} className={styles.deleteBtn}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
