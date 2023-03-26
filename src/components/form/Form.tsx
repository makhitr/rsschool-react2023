import React, { FormEvent } from 'react';
import { FormState } from 'types';
import styles from './Form.module.css';

class Form extends React.Component {
  form = React.createRef<HTMLFormElement>(); //убрать?
  nameInput = React.createRef<HTMLInputElement>();
  dateInput = React.createRef<HTMLInputElement>();
  aliveInput = React.createRef<HTMLInputElement>();
  selectSpecies = React.createRef<HTMLSelectElement>();
  genderMaleInput = React.createRef<HTMLInputElement>();
  genderFemaleInput = React.createRef<HTMLInputElement>();
  fileInput = React.createRef<HTMLInputElement>();

  state: FormState = {
    errors: [],
  };

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
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.form} className={styles.formWrapper}>
        <label>
          Full Name:
          <input type="text" ref={this.nameInput} name="name" />
        </label>
        <div className={styles.error}>{this.state.errors.length && <p>Should be not empty</p>}</div>
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
