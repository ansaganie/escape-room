import { MainLayout, PageTitle, PageSubtext } from '../common/common';
import ContactsMap from './components/contacts-map';
import * as S from './contacts.styled';

const CONTACT = {
  Address: {
    title: 'Адрес',
    addresses: ['Санкт-Петербург,', 'Набережная реки Карповка, д 5'],
  },
  Regime: {
    title: 'Режим работы',
    value: 'Ежедневно, с 9:00 до 20:00',
  },
  Phone: {
    title: 'Телефон',
    value: '8 (800) 333-55-99',
  },
  Email: {
    title: 'E-mail',
    value: 'info@escape-room.ru',
  },
  Location: {
    title: 'Координаты',
    value: {
      lat: 59.9681,
      lng: 30.3163,
      zoom: 17,
    },
  },
};

function Contacts(): JSX.Element {
  return (
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <S.PageHeading>
            <PageTitle>Контакты</PageTitle>
            <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
          </S.PageHeading>
          <S.Contacts>
            <S.ContactsList>
              <S.ContactTitle>{CONTACT.Address.title}</S.ContactTitle>
              <S.ContactValue>
                {CONTACT.Address.addresses.map((address) => (
                  <S.ContactAddress key={address}>{address}</S.ContactAddress>
                ))}
              </S.ContactValue>
              <S.ContactTitle>{CONTACT.Regime.title}</S.ContactTitle>
              <S.ContactValue>{CONTACT.Regime.value}</S.ContactValue>
              <S.ContactTitle>{CONTACT.Phone.title}</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href={`tel:8 ${CONTACT.Phone.value}`}>
                  {CONTACT.Phone.value}
                </S.ContactLink>
              </S.ContactValue>
              <S.ContactTitle>{CONTACT.Email.title}</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href={`mailto:${CONTACT.Email.value}`}>
                  {CONTACT.Email.value}
                </S.ContactLink>
              </S.ContactValue>
            </S.ContactsList>
            <ContactsMap
              lat={CONTACT.Location.value.lat}
              lng={CONTACT.Location.value.lng}
              zoom={CONTACT.Location.value.zoom}
            />
          </S.Contacts>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  );
}

export default Contacts;
