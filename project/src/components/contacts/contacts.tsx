import { ContactInfo } from '../../constants';
import { MainLayout, PageTitle, PageSubtext } from '../common/common';
import ContactsMap from './components/contacts-map';
import * as S from './contacts.styled';

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
              <S.ContactTitle>{ContactInfo.Address.title}</S.ContactTitle>
              <S.ContactValue>
                <S.ContactAddress>{`${ContactInfo.Address.value.cityName},`}</S.ContactAddress>
                <S.ContactAddress>
                  {`${ContactInfo.Address.value.streetName}, д ${ContactInfo.Address.value.houseNumber}`}
                </S.ContactAddress>
              </S.ContactValue>
              <S.ContactTitle>{ContactInfo.Regime.title}</S.ContactTitle>
              <S.ContactValue>{ContactInfo.Regime.value}</S.ContactValue>
              <S.ContactTitle>{ContactInfo.Phone.title}</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href={`tel:8 ${ContactInfo.Phone.value}`}>
                  {ContactInfo.Phone.value}
                </S.ContactLink>
              </S.ContactValue>
              <S.ContactTitle>{ContactInfo.Email.title}</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href={`mailto:${ContactInfo.Email.value}`}>
                  {ContactInfo.Email.value}
                </S.ContactLink>
              </S.ContactValue>
            </S.ContactsList>
            <ContactsMap
              lat={ContactInfo.Location.value.lat}
              lng={ContactInfo.Location.value.lng}
              zoom={ContactInfo.Location.value.zoom}
            />
          </S.Contacts>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  );
}

export default Contacts;
