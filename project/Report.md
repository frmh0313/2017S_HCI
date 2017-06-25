# SeoulFineDustMap
https://snuhci2017.github.io/SeoulFineDustMap/src/

류명한(2010-10225)

## 목적 및 배경
* 서울의 각 구별 미세먼지 농도를 측정한 과거 데이터를 효과적으로 검토함으로써 서울시민들이 각 구별 미세먼지 오염의 실태를 파악할 수 있도록 하고, 정책결정자들이 이에 대한 적절한 대책을 세울 수 있도록 한다. 
* 갈수록 고농도 미세먼지 문제의 심각성이 대두되고 있다. 미세먼지는 WHO에서 지정한 발암물질로서, 사람들의 호흡기와 피부에 해롭기 때문이다. 
고농도 미세먼지 현상의 원인으로는 중국 동해안에서 날아오는 중국발 미세먼지, 국내의 공장이나 석탄 화력발전소에서 배출되는 오염물질, 자동차에서 배출되는 배기가스 등이 지적되지만, 어느 요인이 얼마나 큰 영향을 주고 있는지에 대해서는 아직 충분히 규명되지 않았다. 
이러한 상황에서 고농도 미세먼지 현상의 원인을 다각도로 규명하기 위한 노력과 함께, 고농도 미세먼지 현상이 발생했을 때 이에 잘 대처할 수 있도록 실태를 파악하는 것이 중요하다. 
* 이를 위해 서울 각 구의 미세먼지 농도를 시각화해서 보여줌으로써 과거의 자료의 이해를 토대로 하여 서울 시내의 고농도 미세먼지 현상에 대처할 수 있도록 하고, 미세먼지의 농도를 낮출 다각도의 해결책 마련의 단초로 삼을 수 있도록 한다.

## 데이터 수집
* https://www.airkorea.or.kr 에서 제공되는 공공 데이터 이용. 
> - 2016년 한 해 분량의 서울 각 구별 대기상태 데이터 이용. 시간별 측정자료가 제공되는 데이터를 가공해서 일일 평균 계산. 
* https://github.com/south-korea/ 에서 제공하는 Topo-json 데이터를 이용하여 지도를 그림.

## 기능
* 라디오 버튼을 통해 미세먼지(PM10)와 초미세먼지(PM2.5) 중에서 시각화할 데이터를 선택할 수 있음.  
* 슬라이더를 움직여서 시간의 흐름에 따른 서울시 전체의 각 구별 미세먼지 농도의 추이를 확인할 수 있음.
* 각 구의 이름 위에 커서를 올리면 보다 자세한 정보가 제시됨. 해당 일의 해당 구의 일일 평균 미세먼지/초미세먼지 농도가 숫자로 제시됨.
* 구를 선택하는 경우 어떤 구를 선택하는 것인지 알려주기 위해, 글자를 제외한 구의 영역 위에 마우스 커서를 올릴 경우 구에 칠해진 색상이 변하도록 함.
* 각 구를 클릭하면 해당 구의 해당 월의 미세먼지 농도 평가 단계별 일수와 해당 연의 미세먼지 농도 평가 단계별 일수를 파이차트로 제시함.    
* 두 개의 구를 선택하여 선택된 구들의 데이터를 비교할 수 있도록 함.

## Persona
서울시의 미세먼지 문제 담당 부서의 공무원 김청명 씨는 서울의 미세먼지 문제에 대처하기 위한 정책 수립을 위해 과거의 미세먼지/초미세먼지 농도 데이터를 검토해보려고 한다. 
이를 토대로 미세먼지 문제가 좀 더 심각하고 적극적인 대처가 필요한 곳에 미세먼지 문제 대처를 위한 좀 더 많은 자원을 투입하고, 
다른 구에 비해서 유난히 미세먼지 농도가 높은 곳에 대해서는 좀 더 면밀히 원인을 따져보고 시나 구 차원에서 대처할 수 있는 방안은 없을지 검토한다. 
미세먼지의 원인에 대해서는 최근에는 중국발 미세먼지의 영향이 크다는 주장이 힘을 얻고 있기는 하지만, 
공기의 정체 현상으로 인한 오염물질의 누적이 고농도 미세먼지 현상의 원인이라는 지적도 있어 국내적인 요인을 가볍게 여길 수 없을 뿐만 아니라,
조금이라도 미세먼지 농도를 낮추기 위해서는 시와 구 단위에서 할 수 있는 한 최선을 다해야만 한다. 
 이를 위해 서울 내의 지역별 미세먼지 농도의 격차를 확인해보고, 계절별 미세먼지 농도도 검토하면서 이 문제를 좀 더 깊이 이해하고자 한다. 
 이렇게 서울시의 지리 정보에 근거해서 미세 먼지 문제에 접근해봄으로써 고농도 미세먼지에 대처하기 위한 방안 마련시 어떤 부분들을 고려해야할지 생각해본다.
 
 
## Design
* 색깔 선정 : 기상청에서 미세먼지/초미세먼지 농도를 평가하는 기준에 따라 색을 분류한다. 미세먼지/초미세먼지 문제가 중요한 문제로 인식되면서 정부 차원에서 미세 먼지 농도와 관련한 데이터를 제공해주기도 하고,
 미세먼지/초미세먼지 농도에 대한 정보를 찾으려는 사람들 또한 늘어나게 되면서 미세먼지 농도를 어떤 색상으로 표기할 것인지에 대해서 이미 사람들에게 익숙해진 표현이 있다고 생각하였다. 
 그래서 airkorea에서 제공하는 기준에 따라 미세먼지 농도의 단계를 분류하고, 각 단계에 대한 색상을 선택하였다.
* Overview, zoom and filter, details on demand: 처음에는 서울시 각 구의 일일 평균 미세먼지 농도를 해당 구를 나타낸 지도의 색깔을 통해서 전반적으로 파악할 수 있도록 하고,
보다 구의 영역 위에 마우스 커서를 올리거나 클릭했을 때 보다 자세한 정보를 제공한다.
* 슬라이더: 과거 - 현재 - 미래순으로 시간이 흐른다고 이야기하는 직관에 부합하게 왼쪽에서 오른쪽으로 핸들을 움직일 때 시간이 지나도록 한다. 
  
 
 ## 시나리오
 김청명 씨는 작년 한 해의 서울의 미세먼지 농도 데이터를 검토한 것을 바탕으로 시 차원에서 할 수 있는 미세먼지 대책을 제안하였다. 
 외곽에 가까운 구들에 비해 도심에 위치한 구들에서 미세먼지 농도가 높게 나타나는 것을 확인하였다. 
 이를 토대로 김청명 씨는 도심 지역의 경우 미세먼지 농도가 높게 나타나는 시기에 교통량을 조절할 대책이 필요하다는 가설을 세웠다. 
 또한 미세 먼지 농도가 다른 지역에 비해 높게 나타난 **구의 경우 인구 구성을 검토해본 결과 노인 인구 비율이 높다는 것을 확인하였다.
  거동이 불편한 노인들이 미세먼지 문제로 인해 진료를 받고자 할 때에 문제가 없도록 해당 구의 보건소에 상주하는 인력을 증원하고 시설을 확충해야 할 필요성에 대해서
  생각해볼 수 있었다. 
  
## 추가로 고려해볼 수 있는 부분
* 고농도 미세먼지 현상의 원인으로 지적되는 부분들을 직접 서울의 지리 정보와 연결해서 이해해볼 수 있도록 하면 좋을 것이다.
>- 예를 들어 서울 시내의 지점별 교통량, 인구 등의 요소를 고려해볼 수 있을 것이다.
* 계절별 분석
>- 봄의 경우 북서풍을 타고 중국으로부터 날아오는 중국발 미세먼지의 영향이 큰 것으로 알려져 있으나, 봄에 비해 북서풍이 약하게 부는 다른 계절의 경우 
 어떠한 추이를 보이는지 비교해해볼 수 있도록 하면 좋을 것이다.
 * 보다 자세한 지리 정보와의 결합
 >- 서울의 경우 구별로 측정소가 하나씩 있어서 보다 다양한 지점에서 수집한 데이터를 가지고 시각화하는 데에는 한계가 있겠으나, 공원, 숲, 산, 공단, 주택단지 등
 보다 다양한 지리 정보를 가지고 미세먼지 농도와의 관계에 대해서 생각해볼 수 있도록 하면 좋을 것이다. 