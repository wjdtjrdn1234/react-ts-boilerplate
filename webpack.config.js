const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: prod ? 'production' : 'development',
  devtool: prod ? 'hidden-source-map' : 'eval',
  entry: './src/index.tsx',
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  plugins: [
	new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
//웹팩 설치
// npm i -D webpack webpack-cli webpack-dev-server
// npm i -D ts-loader css-loader style-loader file-loader html-webpack-plugin
// npm i dotenv


// webpack , webpack-cli가 필요하다. 생성된 html파일에 필요한 플러그인인 html-webpack-plugin과
// 개발 도중 변경사항을 확인할 수 있는 webpack-dev-server, 
// 그리고 타입스크립트 코드를 자바스크립트 코드로 변환해주는 ts-loader를 설치한다


// mode : 프로덕션 모드인지 개발 모드인지 확인하는 옵션이다.
// devtool : 프로덕션 모드인 경우엔 hidden-source-map을 권장한다. (외부에서 리액트 구조를 확인할 수 없다.)
// resolve : 확장자나 경로를 알아서 처리할 수 있도록 설정하는 옵션이다.
// module : 이 옵션에 설치한 ts-loader와 babel-loader를 설정하면 된다. loader들은 오른쪽에서 왼쪽 방향으로 적용되기 때문에 ts-loader를 babel-loader보다 오른쪽에 위치시켜야 한다.
// output : 번들화 된 파일을 export할 경로와 파일명을 설정한다.
// plugins : 설치한 플러그인을 적용하는 옵션이다

//webpack dev server
// historyApiFallback : 히스토리 API를 사용하는 SPA 개발 시 설정하며 404에러가 발생하면 index.html로 리다이렉트 한다.
// inline : inline모드를 활성화 해준다.
// port : 접속 포트를 설정한다.
// hot : webpack의 HMR기능을 활성화 한다. (리로드 기능)
// publicPath : 브라우저를 통해 접근하는 기본 주소값을 설정한다



// dotenv:
// 프로젝트에서 사용하는 환경변수를 별도의 파일(.env)로 관리하기 쉽게 해주는 도구
// .env 파일을 하나만 사용할 땐 단순히 config()
// production, development 모드 등 상황에 따라 환경 변수를 달리하려면 관련된 객체를 전달해야한다.
// 보일러플레이트가 지정해줄 영역은 아니기에 빈값을 디폴트로 한다.

// path.resolve vs path.join
// 둘 다 인자로 전달 받는 경로를 합쳐서 문자열 형태의 path를 반환한다.
// 차이점은 join은 전달받은 인자의 왼쪽부터, resolve는 오른쪽부터 합치면서 진행한다.
// resolve는 합치기를 진행하다가 "/" 를 만나면 절대 경로로 인식해서 나머지 경로 인자들을 무시한다.
// __dirname 은 현재 실행중인 경로를 의미한다


// resolve 필드는 어떤 역할을 할까?
// resolve는 웹팩이 알아서 경로, 확장자를 처리할 수 있게 도와주는 옵션이다
// modules에 node_modules를 지정해줘야 외부 라이브러리를 바로 가져올 수 있다(import Calender from "@jjunyjjuny/react-calendar")
// extensions에 넣은 확장자를 웹팩이 알아서 처리한다. 따라서 import시 파일명 뒤에 확장자를 붙일 필요가 없다. (import a from 'src/App')


// transpileOnly는 어떤 속성일까
// ts-loader는 기본적으로 TS->JS로 트랜스파일링 하는 작업과 type check 작업을 구분 하고 같은 스레드에서 동시에 실행한다.
// 해당 옵션을 true로 지정하면 타입체크를 수행하지 않고 트랜스파일링만 진행한다. 또한 d.ts 파일도 생성되지 않는다. 이를 통해 속도 향상을 노릴 수 있다.
// 즉 development 모드에서는 true로 설정해서 개발 속도를 높이고, production 모드로 빌드할 때는 타입체크와 d.ts 파일 생성을 허용함으로써 안정성을 높인다.
// 보통 속도 향상과 안정성 모두를 취하기 위해 transpileOnly는 true로하고 fork-ts-checker-webpack-plugin라는 플러그인으로 타입 체크를 한다


//
// historyApiFallback : 히스토리 API를 사용하는 SPA 개발 시 설정하며 404에러가 발생하면 index.html로 리다이렉트 한다.
// inline : inline모드를 활성화 해준다.
// port : 접속 포트를 설정한다.
// hot : webpack의 HMR기능을 활성화 한다. (리로드 기능)
// publicPath : 브라우저를 통해 접근하는 기본 주소값을 설정한다.


//  loader와 plugin 차이
//  단순히 비교하면 번들이 생성 되기 전(빌드 전)에 쓰이냐, 후에 쓰이냐로 구분할 수 있다
//  loader는 webpack으로 빌드를 진행하기 전/진행 중에 개별 파일들(빌드 과정에 포함되는 각 파일들)에게 적용하기 위해 사용된다
//  plugin은 번들이 생성 된 후 결과 파일에 적용하기 위해 사용된다. 번들된 js 난독화, 압축, 복사, 특정 텍스트 추출, 별칭 등 부가 작업 등등 후처리를 한다.
//  이것들 모두 프로덕션 배포 이전 빌드 단계에서만 사용되기 때문에 -D 옵션으로 설치한다. ->loader,plugin

//webpack-dev-server:발 도중 변경사항을 확인할 수 있음
//ts-loader: 타입스크립트 코드를 자바스크립트 코드로 변환해주줌


// webpack 실행시 NODE_ENV 값을 지정하기 위해 보통 --mode production/development 옵션을 추가해주는데, 이는 Mac에서만 동작한다
// 윈도우에서 NODE_ENV값을 변경하기 위해서는 cross-env 라이브러리를 설치, 사용해야한다. 


// scripts

// 위에서 설명했다시피 cross-env NODE_ENV=development/production 은 윈도우 용이다
// mac 환경이라면 --mode development/production 만으로 충분하다
// webpack-dev-server를 실행시키는 명령어가 webpack serve로 변경되었다. 오래된 블로그에는 여전히 webpack-dev-server 명령어가 남아있으니 주의하자.