import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { FormikHelpers } from 'formik';
import * as S from './detailed-quest.styled';
import { MainLayout } from '../common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import { BookingModal } from './components/components';
import useQuestLoader from '../../hooks/use-quest-loader';
import { QuestLevelTitle, TABS } from '../../constants';
import { OrderForm } from '../../models/order-form';
import NotFound from '../not-found/not-found';
import Loader from '../common/loader/loader';
import { postOrder } from '../../services/dal/quests';

function DetailedQuest(): JSX.Element | null {
  const { questId } = useParams<{ questId: string}>();
  const [ quest, loading, notFound ] = useQuestLoader(questId);

  const [ isBookingModalOpened, setIsBookingModalOpened ] = useState(false);

  const handleBookingButtonClick = useCallback(() => {
    setIsBookingModalOpened(true);
  }, []) ;

  const handleModalCloseClick = useCallback(() => {
    setIsBookingModalOpened(false);
  }, []) ;

  const handleFormSubmit = useCallback((values: OrderForm, formikHelper: FormikHelpers<OrderForm>) => {
    postOrder(values)
      .then(() => {
        formikHelper.resetForm();
        setIsBookingModalOpened(false);
      })
      .catch(() => {
        formikHelper.setSubmitting(false);
      });
  }, []);

  if (notFound) {
    return <NotFound />;
  }

  if (quest) {
    const {
      coverImg,
      title,
      type,
      duration,
      peopleCount: [ min, max ],
      level,
      description,
    } = quest;

    return (
      <MainLayout>
        {loading
          ? <Loader />
          : (
            <S.Main>
              <S.PageImage
                src={`../${coverImg}`}
                alt={`Квест ${title}`}
                width="1366"
                height="768"
              />
              <S.PageContentWrapper>
                <S.PageHeading>
                  <S.PageTitle>{title}</S.PageTitle>
                  <S.PageSubtitle>{TABS[type].title}</S.PageSubtitle>
                </S.PageHeading>

                <S.PageDescription>
                  <S.Features>
                    <S.FeaturesItem>
                      <IconClock width="20" height="20" />
                      <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
                    </S.FeaturesItem>
                    <S.FeaturesItem>
                      <IconPerson width="19" height="24" />
                      <S.FeatureTitle>{`${min}–${max} чел`}</S.FeatureTitle>
                    </S.FeaturesItem>
                    <S.FeaturesItem>
                      <IconPuzzle width="24" height="24" />
                      <S.FeatureTitle>{QuestLevelTitle[level]}</S.FeatureTitle>
                    </S.FeaturesItem>
                  </S.Features>

                  <S.QuestDescription>{description}</S.QuestDescription>

                  <S.QuestBookingBtn onClick={handleBookingButtonClick}>Забронировать</S.QuestBookingBtn>
                </S.PageDescription>
              </S.PageContentWrapper>
              {isBookingModalOpened && (
                <BookingModal
                  onCloseClick={handleModalCloseClick}
                  onFormSubmit={handleFormSubmit}
                  peopleCountMin={min}
                  peopleCountMax={max}
                />
              )}
            </S.Main>
          )}

      </MainLayout>
    );
  }

  return null;
}

export default DetailedQuest;
