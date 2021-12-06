import React, { useMemo, MouseEvent } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { OrderForm } from '../../../../models/order-form';

const NAME_REQUIRED = 'Пожалуйста, укажите свое имя';
const PEOPLE_COUNT_REQUIRED = 'Пожалуйста, укажите количество участников';
const PEOPLE_COUNT_MIN = 'Количество участников не должно быть меньше ';
const PEOPLE_COUNT_MAX = 'Количество участников не должно быть больше ';
const IS_LEGAL_REQUIRED = 'Необходимо ознакомиться с правилами обработки персональных данных и пользовательским соглашением';
const PHONE_NUMBER_PATTERN = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g;
const PHONE_NUMBER_REQUIRED = 'Пожалуйста, укажите номер телефона';
const PHONE_NUMBER_MATCH = 'Номер телефона не соответствует формату';
const PHONE_NUMBER_MIN_LENGTH = 10;
const PHONE_NUMBER_MIN = 'Длина номера телефона не должно  быть меньше 10 символов';


const initial: OrderForm = {
  name: '',
  isLegal: false,
  peopleCount: 0,
  phone: '',
};

type Props = {
  onCloseClick: () => void,
  onOverlayClick: () => void,
  onFormSubmit: (
    data: OrderForm,
    formikHelpers: FormikHelpers<OrderForm>,
  ) => void,
  peopleCountMin: number,
  peopleCountMax: number,
}

function BookingModal({
  onCloseClick,
  onOverlayClick,
  onFormSubmit,
  peopleCountMin,
  peopleCountMax,
}: Props): JSX.Element {
  const validation = useMemo(() => Yup.object({
    name: Yup.string()
      .required(NAME_REQUIRED),
    isLegal: Yup.boolean()
      .required(IS_LEGAL_REQUIRED),
    peopleCount: Yup.number()
      .required(PEOPLE_COUNT_REQUIRED)
      .min(peopleCountMin, `${PEOPLE_COUNT_MIN}${peopleCountMin}`)
      .max(peopleCountMax, `${PEOPLE_COUNT_MAX}${peopleCountMax}`),
    phone: Yup.string()
      .required(PHONE_NUMBER_REQUIRED)
      .matches(PHONE_NUMBER_PATTERN, PHONE_NUMBER_MATCH)
      .min(PHONE_NUMBER_MIN_LENGTH, PHONE_NUMBER_MIN),
  }), [ peopleCountMax, peopleCountMin ]);

  const handleModalClick = (evt: MouseEvent) => {
    evt.stopPropagation();
  };

  return (
    <S.BlockLayer onClick={onOverlayClick}>
      <S.Modal onClick={handleModalClick}>
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
          {({ errors, isSubmitting }: FormikProps<OrderForm>) => (
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
                  disabled={isSubmitting}
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
                  abbr="+7 (926) 123 45 67"
                  placeholder="Телефон"
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  required
                />
              </S.BookingField>
              {Object.values(errors).map((err) =>
                <S.BookingCheckboxText key={err}>{err}</S.BookingCheckboxText>)}
              <S.BookingSubmit
                type="submit"
                disabled={isSubmitting}
              >
                Отправить заявку
              </S.BookingSubmit>
              <S.BookingCheckboxWrapper>
                <S.BookingCheckboxInput
                  type="checkbox"
                  id="booking-legal"
                  name="isLegal"
                  disabled={isSubmitting}
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
