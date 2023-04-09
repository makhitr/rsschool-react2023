import React from 'react';
import { FormProps, IFormCard, IFormCardModified } from 'types';
import styles from './Form.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';

const Form: React.FC<FormProps> = ({ createCard }): JSX.Element => {
  const [isCompleted, setIsCompleted] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IFormCard>({ mode: 'all' });

  const modifyData = (data: IFormCard) => {
    const imgSrc = URL.createObjectURL(data.image[0]);
    return { ...data, image: imgSrc };
  };

  const onSubmit: SubmitHandler<IFormCard> = async (data) => {
    const newData: IFormCardModified = await modifyData(data);
    createCard(newData);
    setIsCompleted(true);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [formState, isSubmitSuccessful, reset]);

  return (
    <>
      {isCompleted && <p>Your data has been saved </p>}
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <label>
          Full Name:
          <input
            type="text"
            {...register('name', {
              required: 'Should not be empty',
              minLength: {
                value: 3,
                message: 'Length must be 3 or more',
              },
              pattern: {
                value: /^[A-Z]/,
                message: 'Name should be capitalized',
              },
            })}
          />
          <div className={styles.error}>{errors.name?.message}</div>
        </label>
        <label>
          Created:
          <input
            type="date"
            {...register('created', {
              required: 'Please choose the date',
              validate: (value) => {
                return new Date(value) < new Date() || 'Choose the data in the past';
              },
            })}
          />
        </label>
        <div className={styles.error}>{errors.created?.message}</div>
        <label>
          Species:
          <select id="species" {...register('species')}>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
            <option value="humanoid">Humanoid</option>
            <option value="mythological creature">Mythological Creature</option>
          </select>
        </label>
        <div className={styles.error}></div>
        <label>
          Alive?
          <input
            type="checkbox"
            {...register('status', { required: 'Please choose your status' })}
          />
        </label>
        <div className={styles.error}>{errors.status?.message}</div>
        <div>
          <label>
            Male
            <input
              type="radio"
              {...register('gender', { required: 'Please choose gender' })}
              value="Male"
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              {...register('gender', { required: 'Please choose gender' })}
              value="Female"
            />
          </label>
          <div className={styles.error}>{errors.gender?.message}</div>
        </div>
        <label>
          Upload photo
          <input
            type="file"
            {...register('image', {
              required: 'Please load pic',
              validate: (value: unknown) => {
                return (
                  ['image/jpg', 'image/jpeg', 'image/png'].includes((value as FileList)[0].type) ||
                  'Please choose image in jpg, jpeg, png format'
                );
              },
            })}
          />
        </label>
        <div className={styles.error}>{errors.image?.message}</div>
        <button>Add Character</button>
      </form>
    </>
  );
};
export default Form;
