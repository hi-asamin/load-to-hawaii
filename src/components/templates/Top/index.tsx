import MainVisual from '@/components/MainVisual';
import SectionRoomCardList from '@/components/organisms/SectionRoomCardList';

interface Props {
  popular: IRoom[];
  pair: IRoom[];
  family: IRoom[];
  friend: IRoom[];
}

const TopTemplate = ({ popular, pair, family, friend }: Props): JSX.Element => {
  return (
    <>
      <main>
        {/* メインビジュアル */}
        <MainVisual src="/images/main-visual.jpeg" alt="" />
        {/* Swiperによる横並びカードのリスト */}
        <SectionRoomCardList id="popular" title="人気の宿泊先" rooms={popular} />
        <SectionRoomCardList id="pair" title="2人滞在におすすめの宿泊先" rooms={pair} />
        <SectionRoomCardList id="family" title="親子滞在におすすめの宿泊先" rooms={family} />
        <SectionRoomCardList id="friend" title="大人数におすすめの宿泊先" rooms={friend} />
      </main>
    </>
  );
};

export default TopTemplate;
