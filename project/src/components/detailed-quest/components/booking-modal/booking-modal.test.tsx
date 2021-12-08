import { act, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../../app/common';
import BookingModal from './booking-modal';

describe('Component: BookingModal', () => {
  it('should render correctly', () => {
    const modalTitle = /Оставить заявку/;
    const nameLabel = /Ваше Имя/;
    const phoneLabel = /Контактный телефон/;
    const peopleCountLabel = /Количество участников/;
    const submitButtonTitle = /Отправить заявку/;
    const isLegalTitleFirstPart = /Я согласен с/;
    const isLegalTitleSecondPart = /правилами обработки персональных данных и пользовательским соглашением/;
    const onCloseClick = jest.fn();
    const onOverlayClick = jest.fn();
    const onFormSubmit = jest.fn();
    const peopleCountMin = 3;
    const peopleCountMax = 8;

    act(() => {
      const screen = render(
        <ThemeProvider theme={appTheme}>
          <BookingModal
            onCloseClick={onCloseClick}
            onOverlayClick={onOverlayClick}
            onFormSubmit={onFormSubmit}
            peopleCountMin={peopleCountMin}
            peopleCountMax={peopleCountMax}
          />
        </ThemeProvider>,
      );

      expect(screen.getByText(modalTitle)).toBeInTheDocument();
      expect(screen.getByText(nameLabel)).toBeInTheDocument();
      expect(screen.getByText(phoneLabel)).toBeInTheDocument();
      expect(screen.getByText(peopleCountLabel)).toBeInTheDocument();
      expect(screen.getByText(submitButtonTitle)).toBeInTheDocument();
      expect(screen.getByText(isLegalTitleFirstPart)).toBeInTheDocument();
      expect(screen.getByText(isLegalTitleSecondPart)).toBeInTheDocument();
    });
  });
});
