import React from 'react';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import * as S from './quest-card.styled';
import { Quest } from '../../../../models/quest';
import { AppRoute, QuestLevelTitle } from '../../../../constants';

type Props = {
  quest: Quest,
}

function QuestCard({ quest }: Props): JSX.Element {
  const {
    id,
    previewImg,
    title,
    peopleCount: [ min, max ],
    level,
  } = quest;

  return (
    <S.QuestItem>
      <S.QuestItemLink to={AppRoute.getQuestLink(id)}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={`квест ${title}`}
          />
          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>
            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${min}–${max} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {QuestLevelTitle[level]}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
}

export default QuestCard;
