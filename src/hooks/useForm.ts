import { useState, useRef, useEffect, useCallback } from "react";

type OnSubmitProps<T> = {
  values: T;
  errors: T | {};
};

type FormProps<T> = {
  initialValues: T;
  onSubmit?: (props: OnSubmitProps<T>) => void;
};

export type FormReturnProps<T> = {
  values: T;
  errors: T | {};
  touched: T | {};
  setValues: React.Dispatch<React.SetStateAction<T>>;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function useForm<T>({
  initialValues,
  onSubmit,
}: FormProps<T>): FormReturnProps<T> {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});

  const formRendered = useRef(true);

  useEffect(() => {
    if (!formRendered.current) {
      setValues(initialValues);
      setErrors({});
      setTouched({});
    }
    formRendered.current = false;
  }, [initialValues]);

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

  const handleOnBlur = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name } = event.target;
      setTouched((prevState) => ({
        ...prevState,
        [name]: true,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        errors,
      }));
    },
    [errors]
  );

  const handleOnSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setErrors((prevErrors) => ({
        ...prevErrors,
        errors,
      }));
      if (onSubmit) {
        onSubmit({ values, errors });
      }
    },
    [errors, onSubmit, values]
  );

  return {
    values,
    errors,
    touched,
    setValues,
    handleOnChange,
    handleOnBlur,
    handleOnSubmit,
  };
}
