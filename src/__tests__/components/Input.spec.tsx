import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import 'jest-styled-components';

import Input from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input Component', () => {
  it('should render in input', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render highlight on focus from container click', async () => {
    const { getByTestId } = render(<Input name="email" placeholder="E-mail" />);

    const containerElement = getByTestId('input-container');

    fireEvent.click(containerElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyleRule('border-color: #ff9000');
      expect(containerElement).toHaveStyleRule('color: #ff9000');
    });
  });

  it('should render highlight on focus from input click', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyleRule('border-color: #ff9000');
      expect(containerElement).toHaveStyleRule('color: #ff9000');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyleRule('border-color: #ff9000');
      expect(containerElement).not.toHaveStyleRule('color: #ff9000');
    });
  });

  it('should keep input color highlighted after filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.change(inputElement, {
      target: { value: 'johndoe@email.com' },
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyleRule('color: #ff9000');
    });
  });
});
