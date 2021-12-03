import { useState } from 'react';
import { MainLayout } from '../common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router';
import useQuestLoader from '../../hooks/use-quest-loader';
import NotFound from '../not-found/not-found';
import Loader from '../common/loader/loader';
import { QuestLevelTitle, TABS } from '../../constants';

function DetailedQuest(): JSX.Element | null {
  const { questId } = useParams<{ questId: string}>();
  const [ quest, loading, notFound ] = useQuestLoader(questId);

  const [ isBookingModalOpened, setIsBookingModalOpened ] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

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

                  <S.QuestBookingBtn onClick={onBookingBtnClick}>Забронировать</S.QuestBookingBtn>
                </S.PageDescription>
              </S.PageContentWrapper>
              {isBookingModalOpened && <BookingModal />}
            </S.Main>
          )}

      </MainLayout>
    );
  }

  return null;
}

export default DetailedQuest;
