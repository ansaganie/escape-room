import React, { useMemo } from 'react';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { OrderForm } from '../../../../models/order-form';

const INVALID_NAME = 'Пожалуйста, укажите свое имя';
const PHONE_NUMBER_PATTERN = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g;

const initial: OrderForm = {
  name: '',
  isLegal: false,
  peopleCount: 0,
  phone: '',
};

type Props = {
  onCloseClick: () => void,
  onFormSubmit: (
    data: OrderForm,
    formikHelpers: FormikHelpers<OrderForm>,
  ) => void,
  peopleCountMin: number,
  peopleCountMax: number,
}

function BookingModal({
  onCloseClick,
  onFormSubmit,
  peopleCountMin,
  peopleCountMax,
}: Props): JSX.Element {
  const validation = useMemo(() => Yup.object({
    name: Yup.string()
      .required(INVALID_NAME),
    isLegal: Yup.boolean()
      .required(),
    peopleCount: Yup.number()
      .required()
      .min(peopleCountMin, '')
      .max(peopleCountMax, ''),
    phone: Yup.string()
      .required()
      .matches(PHONE_NUMBER_PATTERN, ''),
  }), [ peopleCountMax, peopleCountMin ]);

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn
          onClick={onCloseClick}
        >
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <Formik
          initialValues={initial}
          onSubmit={onFormSubmit}
          validationSchema={validation}
        >
          {() => (
            <S.BookingForm
              id="booking-form"
            >
              <S.BookingField>
                <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
                <S.BookingInput
                  type="text"
                  id="booking-name"
                  name="name"
                  placeholder="Имя"
                  required
                />
              </S.BookingField>
              <S.BookingField>
                <S.BookingLabel htmlFor="booking-phone">
                  Контактный телефон
                </S.BookingLabel>
                <S.BookingInput
                  type="tel"
                  id="booking-phone"
                  name="phone"
                  placeholder="Телефон"
                  required
                />
              </S.BookingField>
              <S.BookingField>
                <S.BookingLabel htmlFor="booking-people">
                  Количество участников
                </S.BookingLabel>
                <S.BookingInput
                  type="number"
                  id="booking-people"
                  name="peopleCount"
                  placeholder="Количество участников"
                  required
                />
              </S.BookingField>
              <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
              <S.BookingCheckboxWrapper>
                <S.BookingCheckboxInput
                  type="checkbox"
                  id="booking-legal"
                  name="isLegal"
                  required
                />
                <S.BookingCheckboxLabel
                  className="checkbox-label"
                  htmlFor="booking-legal"
                >
                  <S.BookingCheckboxText>
                    Я согласен с{' '}
                    <S.BookingLegalLink href="#">
                      правилами обработки персональных данных и пользовательским соглашением
                    </S.BookingLegalLink>
                  </S.BookingCheckboxText>
                </S.BookingCheckboxLabel>
              </S.BookingCheckboxWrapper>
            </S.BookingForm>
          )}
        </Formik>

      </S.Modal>
    </S.BlockLayer>
  );
}

export default BookingModal;
