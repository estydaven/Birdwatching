<template>
  <div class="question__form">
    <form class="form" @submit.prevent="sumbitHandler">
      <div class="form__field">
        <label for="name">Ваше имя</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model.trim="name"
          :class="{ invalid: $v.name.$dirty && !$v.name.required }"
        />
        <span
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >
          Введите ваше имя
        </span>
      </div>
      <div class="form__field">
        <label for="surname">Ваша фамилия*</label>
        <input
          type="text"
          name="surname"
          id="surname"
          v-model.trim="surname"
          :class="{ invalid: $v.surname.$dirty && !$v.surname.required }"
        />
        <span
          class="helper-text invalid"
          v-if="$v.surname.$dirty && !$v.surname.required"
        >
          Введите вашу фамилию
        </span>
      </div>
      <div class="form__field">
        <label for="phone">Телефон (в формате +375....)</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          v-model.trim="phone"
          :class="{
            invalid:
              ($v.phone.$dirty && !$v.phone.required) ||
              ($v.phone.$dirty && !$v.phone.minLength),
          }"
        />
        <span
          class="helper-text invalid"
          v-if="$v.phone.$dirty && !$v.phone.required"
          >Поле номера телефона не должно быть пустым</span
        >
        <span
          class="helper-text invalid"
          v-else-if="$v.phone.$dirty && !$v.phone.minLength"
          >Введите телефон в формате 375(...)... .. ..</span
        >
      </div>
      <div class="form__field">
        <label for="work">Электронная почта*</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        />
        <span
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >Поле email не должно быть пустым</span
        >
        <span
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
          >Введите корректный email</span
        >
      </div>
      <div class="form__field">
        <label for="work">Место работы / учебы</label>
        <input type="text" name="work" id="work" />
      </div>
      <div class="form__field">
        <label for="address">Населенный пункт*</label>
        <input
          type="text"
          name="address"
          id="address"
          v-model.trim="address"
          :class="{ invalid: $v.address.$dirty && !$v.address.required }"
        />
        <span
          class="helper-text invalid"
          v-if="$v.address.$dirty && !$v.address.required"
        >
          Введите город проживания
        </span>
      </div>
      <div class="form__field">
        <label for="number">Номер членской карточки АПБ</label>
        <input type="text" name="number" id="number" />
      </div>
      <button type="submit" class="form__button">Отправить</button>
    </form>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "formQuestion",
  data: () => ({
    name: "",
    surname: "",
    phone: "",
    email: "",
    address: "",
  }),
  validations: {
    name: { required },
    surname: { required },
    phone: { required, minLength: minLength(12) },
    email: { email, required },
    address: { required },
  },
  methods: {
    sumbitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        phone: this.phone,
        name: this.name,
        surname: this.surname,
        address: this.address,
      };

      console.log(formData);

      this.$router.push("/autorize");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.question__form {
  width: 50%;
  margin: 50px auto 0;
  padding: 20px;
  border: 2px dashed $main-yellow;
}
.form__field {
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  label {
    margin-bottom: 10px;
  }

  input {
    height: 40px;
    padding: 5px;
    background-color: $main-gray;
    color: $main-yellow;
    border: solid $main-yellow;
    border-width: 0 0 2px 2px;
    outline: none;
  }
}
.form__button {
  width: 250px;
  padding: 20px 5px;
  font-size: 22px;
  font-weight: 600;
  background-color: $main-yellow;
  border: 2px dashed $main-gray;
  color: $main-gray;
  outline: none;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background-color: $main-gray;
    border: 2px solid $main-yellow;
    color: $main-yellow;
    transform: scale(0.9);
  }
}
.helper-text {
  font-size: 14px;
  padding-top: 7px;
  color: $red;
}

@import "../assets/styles/_media.scss";
</style>