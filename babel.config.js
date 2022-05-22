module.exports = {
    presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
  };

// @babel/preset-react : JSX로 작성된 코드들을 createElement 함수를 이용한 코드로 변환해 주는 바벨 플러그인이 내장(리액트를 변환하기 위한 프리셋)
// @babel/preset-typescript : 타입스크립트를 변환하기 위한 프리셋
// @babel/preset-env : preset-env는 ECMAScript2015+를 변환할 때 사용한다. 
// 바벨 7 이전 버전에는 연도별로 각 프리셋을 제공했지만(babel-reset-es2015, babel-reset-es2016, babel-reset-es2017, babel-reset-latest)
// 지금은 env 하나로 합쳐졌다. IE 지원을 위한 프리셋