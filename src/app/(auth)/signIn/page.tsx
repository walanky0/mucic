'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { object, string } from 'yup';

import { AdditionalResource } from '@/constants/additional-resource';
import { formErrors } from '@/constants/form-errors';
import { userStore } from '@/stores/userStore';
import Button from '@/ui/BaseButton';
import BaseLink from '@/ui/BaseLink';
import CheckboxField from '@/ui/CheckboxField';
import InputField from '@/ui/InputField';

import styles from './style.module.scss';

const validationSchema = object({
  email: string().email(formErrors.email).required(formErrors.required),
  password: string().required(formErrors.required)
});

const initialValue = {
  email: '',
  password: ''
};

const SignIn = () => {
  const { handleSubmit, reset, control } = useForm({
    values: initialValue,
    resolver: yupResolver(validationSchema)
  });
  const [isAcceptRules, setIsAcceptRules] = useState(false);

  const { loadingUser, user, login } = userStore;

  const onSubmit = async (data: typeof initialValue) => {
    try {
      await login(data);
    } catch (e) {
      reset();
    }
    reset();
  };

  return (
    <main className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.title}>Вход</h2>
        <div className={styles.field}>
          <Controller
            control={control}
            name="email"
            render={({
              field: { onChange, value, name },
              fieldState: { error }
            }) => (
              <InputField
                label="E-mail"
                type="email"
                name={name}
                value={value}
                onChange={onChange}
                error={error?.message}
              />
            )}
          />
        </div>
        <div className={styles.field}>
          <Controller
            control={control}
            name="password"
            render={({
              field: { onChange, value, name },
              fieldState: { error }
            }) => (
              <InputField
                label="Пароль"
                type="password"
                name={name}
                value={value}
                onChange={onChange}
                error={error?.message}
              />
            )}
          />
        </div>
        <div className={styles.field}>
          <CheckboxField
            inputId="confirm-rules"
            name="confirm-rules"
            onChange={(e) => setIsAcceptRules(!!e.target.checked)}
          >
            Для входа необходимо подтвердить что вы соглашаетесь с{' '}
            <BaseLink href={AdditionalResource.termsOfUse} target="_blank">
              Пользовательским соглашением
            </BaseLink>
          </CheckboxField>
        </div>
        <div className="auth-form__submit-button">
          <Button type="submit" disabled={loadingUser || !isAcceptRules}>
            {loadingUser ? 'Загрузка' : 'Войти'}
          </Button>
        </div>
      </form>
    </main>
  );
};

export default observer(SignIn);
