import React from "react";
import FoodContainer from "../components/FoodContainer";
import FoodResult from "../components/FoodResult";
import withLayout from "../components/withLayout";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 64px;
  overflow: hidden;
`;

const Button = styled.button`
  cursor: pointer;
  color: white;
  padding: 16px 48px 16px 48px;
  margin: 0 auto;
  margin-bottom: 84px;
  border: 0;
  border-radius: 6px;
  background-color: #4fc3f7;
  font-size: 16px;
  font-weight: bold;
  transition: 0.2s;
  display: inline-block;
  text-decoration: none;
  width: 15%;

  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.05);
  }
`;

class Pick extends React.Component {
  render() {
    return (
      <Wrapper>
        <FoodResult
          title={["두끼", "베나레스", "뜸들이다", "마카나이", "맘스터치"]}
          image={
            [
              [
                "두끼",
                "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20190514_108%2F15578168550377uJMC_PNG%2FfcDktZqlElpn_Xm1a9pM_NTy.png&type=m862_636"
              ],
              [
                "베나레스",
                "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20150901_161%2F1441052888087RFrnn_JPEG%2FSUBMIT_1367992484389_20510788.jpg&type=m862_636"
              ],
              [
                "뜸들이다",
                "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20180809_19%2F15337836417975xzVa_JPEG%2FnNosxxUp4yhH8FIqm8MNkL7H.jpg&type=m862_636"
              ],
              [
                "마카나이",
                "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20190421_244%2F1555809940861lYoYr_JPEG%2FTUHL0GfgXjGeswoG7E6lLRSY.jpg&type=m862_636"
              ],
              [
                "맘스터치",
                "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20190601_18%2F1559386187876xXnAh_JPEG%2FS_i5jpIgFuE0hLBuU1suGtkK.jpg&type=m862_636"
              ],
              [
                "서울국밥",
                "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20170829_132%2F1503981813991eWxNU_PNG%2F8xKa7fq6QQPm94R14MmrEHB5.PNG.png&type=m862_636"
              ],
              [
                "미스터카츠",
                "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20181002_94%2F1538475536575qzJQX_PNG%2Fd3bEKg2yDrNM5WkZgy10dmBz.PNG.png&type=m862_636"
              ],
              [
                "알촌",
                "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fblogfiles.naver.net%2F20150716_235%2Fangelhot1_1437053084784OYUDW_JPEG%2FIMG_2726.JPG%23900x600&type=m862_636"
              ],
              [
                "타타미",
                "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20160108_66%2F1452234367374vFz1F_JPEG%2F176058555626742_0.jpg&type=m862_636"
              ]
            ][Math.floor(Math.random() * 9)]
          }
        />
        <Button onClick={() => window.location.reload()}>메뉴 뽑기</Button>
        <FoodContainer
          title="식당 리스트"
          foods={["두끼", "베나레스", "뜸들이다", "마카나이", "맘스터치"]}
          images={[
            [
              "두끼",
              "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20190514_108%2F15578168550377uJMC_PNG%2FfcDktZqlElpn_Xm1a9pM_NTy.png&type=m862_636"
            ],
            [
              "베나레스",
              "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20150901_161%2F1441052888087RFrnn_JPEG%2FSUBMIT_1367992484389_20510788.jpg&type=m862_636"
            ],
            [
              "뜸들이다",
              "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20180809_19%2F15337836417975xzVa_JPEG%2FnNosxxUp4yhH8FIqm8MNkL7H.jpg&type=m862_636"
            ],
            [
              "마카나이",
              "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20190421_244%2F1555809940861lYoYr_JPEG%2FTUHL0GfgXjGeswoG7E6lLRSY.jpg&type=m862_636"
            ],
            [
              "맘스터치",
              "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20190601_18%2F1559386187876xXnAh_JPEG%2FS_i5jpIgFuE0hLBuU1suGtkK.jpg&type=m862_636"
            ],
            [
              "서울국밥",
              "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20170829_132%2F1503981813991eWxNU_PNG%2F8xKa7fq6QQPm94R14MmrEHB5.PNG.png&type=m862_636"
            ],
            [
              "미스터카츠",
              "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20181002_94%2F1538475536575qzJQX_PNG%2Fd3bEKg2yDrNM5WkZgy10dmBz.PNG.png&type=m862_636"
            ],
            [
              "알촌",
              "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fblogfiles.naver.net%2F20150716_235%2Fangelhot1_1437053084784OYUDW_JPEG%2FIMG_2726.JPG%23900x600&type=m862_636"
            ],
            [
              "타타미",
              "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20160108_66%2F1452234367374vFz1F_JPEG%2F176058555626742_0.jpg&type=m862_636"
            ]
          ]}
        />
      </Wrapper>
    );
  }
}
export default withLayout(Pick);
