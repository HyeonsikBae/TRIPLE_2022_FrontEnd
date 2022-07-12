# TRIPLE_2022_FrontEnd
## How to run
### install
```shell
git clone https://github.com/HyeonsikBae/TRIPLE_2022_FrontEnd.git
cd TRIPLE_2022_FRONTEND
npm install
```
### run web
```shell
npm run dev
```
### run storybook
```shell
npm run storybook
```

<br>

## Tech Stacks
### Language
`TypeScript` : 타입 명시를 통해 컴파일 단계에서 타입 안정성을 높이기 위해 타입스크립트를 사용하였습니다.
### Bundler
`vite` : 기존의 번들러보다 빠른 속도로 종속성을 번들링하여 빌드 속도가 빠릅니다.
### Library
`React` : 공식 문서의 내용이 자세하고 사용자가 많아 레퍼런스를 찾기 용이합니다.<br><br>
`styled-components` : css 파일을 생성하지 않고 리액트 컴포넌트 형식으로 스타일링이 가능하고 가장 많이 사용되는 css-in-js입니다.<br><br>
`storybook` : Component 제작 시, 테스트케이스를 통한 렌더링 이미지를 확인하는 데 편리합니다.

<br>

## Need to improvement
- count animation을 원하는 수치까지 도달하게끔 구현하였습니다.<br>
  수행시간을 인자로 받아 해당 시간 내 애니메이션이 완료되는 함수로 구현했으면 보다 정밀한 애니메이션 관리가 가능하다고 생각합니다.<br>
  또한 인자로 애니메이션 함수와 수행시간을 받는 훅으로 관리하면 재사용성이 더욱 높아질 것이라고 생각합니다.
  
- 여러 개의 Section을 놓는 경우, Section 높이가 컨텐츠 하단의 마진이 적용되지 않습니다.<br>
  이를 개선하면 다른 Section에도 사용 가능한 컴포넌트가 될 것이라고 생각합니다.
 
- storybook의 다양한 기능들을 사용하지 못했습니다.<br>
  추가 학습을 통해 앞으로 프론트엔드 개발에 적용해 볼 예정입니다.
