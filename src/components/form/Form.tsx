import React, { FormEvent, RefObject } from 'react';
import styles from './Form.module.css';

interface FormState {
  errors: string[];
}

class Form extends React.Component<FormState> {
  form = React.createRef<HTMLFormElement>();
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
    const name = this.nameInput.current?.value;
    const date = this.dateInput.current?.value;
    const alive = this.aliveInput.current?.checked;
    const species = this.selectSpecies.current?.value;
    const maleGender = this.genderMaleInput.current?.checked;
    const femaleGender = this.genderFemaleInput.current?.checked;
    const file = this.fileInput.current?.value;
    // new Array(form.current).map(el => console.log(el))

    if (name?.length === 0) {
      this.setState((prevState: FormState) => ({
        ...prevState,
        errors: [...prevState.errors, 'name'],
      }));
    }
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // console.log(this.form.current?.name)

    const validate = this.validateForm();
    console.log(validate);
    // console.log(this.nameInput.current?.value)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.form} className={styles.formWrapper}>
        <label>
          Full Name:
          <input type="text" ref={this.nameInput} name="name" />
        </label>
        <div></div>
        <label>
          Created:
          <input type="date" ref={this.dateInput} />
        </label>
        <label>
          Species:
          <select id="species" name="species" ref={this.selectOptions}>
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

// text input
// date input
// dropdown/select
// checkbox
// switcher (radio)
// file upload (image)
