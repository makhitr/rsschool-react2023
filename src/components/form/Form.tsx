import React, { FormEvent } from 'react';
import { FormProps, FormState } from 'types';
import styles from './Form.module.css';

class Form extends React.Component<FormProps, FormState> {
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  aliveInput: React.RefObject<HTMLInputElement>;
  selectSpecies: React.RefObject<HTMLSelectElement>;
  genderMaleInput: React.RefObject<HTMLInputElement>;
  genderFemaleInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      errors: [],
      cardData: null,
    };
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.aliveInput = React.createRef();
    this.selectSpecies = React.createRef();
    this.genderMaleInput = React.createRef();
    this.genderFemaleInput = React.createRef();
    this.fileInput = React.createRef();
    // this.createCard = this.props.createCard;
  }

  validateForm = () => {
    this.setState((prevState: FormState) => ({ ...prevState, errors: [] }));
    if (this.nameInput.current?.value?.length === 0) {
      this.setState((prevState: FormState) => ({
        ...prevState,
        errors: [...prevState.errors, 'name'],
      }));
    }
    if (!this.dateInput?.current!.value || new Date(this.dateInput.current.value) > new Date()) {
      this.setState((prevState: FormState) => ({
        ...prevState,
        errors: [...prevState.errors, 'date'],
      }));
    }
    if (!this.genderMaleInput.current?.checked && !this.genderFemaleInput.current?.checked) {
      this.setState((prevState: FormState) => ({
        ...prevState,
        errors: [...prevState.errors, 'gender'],
      }));
    }
    if (
      !this.fileInput.current?.files ||
      !['image/jpg', 'image/jpeg', ' image/png'].includes(this.fileInput.current.files[0]?.type)
    ) {
      this.setState((prevState: FormState) => ({
        ...prevState,
        errors: [...prevState.errors, 'file'],
      }));
    }
  };

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await this.validateForm();
    if (this.state.errors.length === 0) {
      this.setState(
        (prevState: FormState): FormState => ({
          ...prevState,
          cardData: {
            name: this.nameInput.current!.value,
            created: this.dateInput.current!.value,
            status: this.aliveInput.current!.checked,
            species: this.selectSpecies.current!.value,
            gender: this.genderFemaleInput.current!.checked ? 'female' : 'male',
            image: 'some image',
            // imgUrl: this.fileInput.current!.files[0]?.name,
          },
        })
      );
      this.props.createCard(this.state.cardData);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.form} className={styles.formWrapper}>
        <label>
          Full Name:
          <input type="text" ref={this.nameInput} name="name" />
        </label>
        {/* <div className={styles.error}>{this.state.errors.length && <p>Should be not empty</p>}</div> */}
        <label>
          Created:
          <input type="date" ref={this.dateInput} />
        </label>
        <label>
          Species:
          <select id="species" name="species" ref={this.selectSpecies}>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
            <option value="humanoid">Humanoid</option>
            <option value="mythological creature">Mythological Creature</option>
          </select>
        </label>
        <label>
          Alive?
          <input type="checkbox" ref={this.aliveInput} />
        </label>
        <div>
          <label>
            Male
            <input type="radio" ref={this.genderMaleInput} name="gender" />
          </label>
          <label>
            Female
            <input type="radio" ref={this.genderFemaleInput} name="gender" />
          </label>
        </div>
        <label>
          Upload photo
          <input type="file" ref={this.fileInput} />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
