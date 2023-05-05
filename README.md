<div align="center">
  <img src="https://user-images.githubusercontent.com/83197138/235145795-a6e62810-0e0c-4ff4-bd87-7460b42825a7.png"/>
  <h2>👨‍👨‍👧‍👦 TEAM 보람삼조</h2>
  <b>인턴십 기간동안 보람찬 3조가 되자!</b>

</div>
  <br/>
<div align="center">
  
| Name    | <center>황수현</center>|<center>이준호</center> |<center>박수현</center> |<center>이상민</center> |<center>유동혁</center> |
| ------- | --------------------------------------------- | ------------------------------------ | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | 
| Profile | <center> <img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/107838130?v=4" /> </center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/86146780?v=4" /></center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/55135881?v=4" /></center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/83197138?v=4" /></center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/95751232?v=4" /></center>|
| GitHub | <center>[@rjsej12](https://github.com/rjsej12)</center> | <center>[@wujuno](https://github.com/wujuno) </center>| <center>[@pySoo](https://github.com/pySoo) </center>|<center>[@sangminlee98](https://github.com/sangminlee98)</center> |<center>[@robin14dev](https://github.com/robin14dev)</center> |
  
</div>

<div align="center">
  
| Name    | <center>강명주</center>|<center>박겸영</center> |<center>정정수</center> |<center>고영욱</center> |<center>추헌재</center> |
| ------- | --------------------------------------------- | ------------------------------------ | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | 
| Profile | <center> <img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/96197310?v=4" /> </center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/91963656?v=4" /></center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/19286161?v=4" /></center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/47565280?v=4" /></center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/67093357?v=4" /></center>|
| GitHub | <center>[@myungju030](https://github.com/myungju030)</center> | <center>[@seoltang](https://github.com/seoltang) </center>| <center>[@wjdwjdtn92](https://github.com/wjdwjdtn92) </center>|<center>[@free-ko](https://github.com/free-ko)</center> |<center>[@Chuhj](https://github.com/Chuhj)</center> |

</div>

<br/>

# 원티드 **프리온보딩 프론트엔드 인턴십 2주차 과제**

> 검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현

진행 기간: 2023-05-02 ~ 2023-05-05

## 목차

- [🚀 배포 링크](#배포-링크)
- [🖥️ 동작 화면](#동작-화면)
- [📚 사용한 라이브러리](#사용한-라이브러리)
- [📂 프로젝트 구조](#프로젝트-구조)
- [🕹️ 프로젝트 실행 방법](#프로젝트-실행-방법)
- [📌 컨벤션](#컨벤션)
  - [Commit convention](#commit-convention)
- [🎯 과제 수행 내용](#과제-수행-내용)
  - [요약](#요약)
  - [질환명 검색시 API 호출 통해서 검색어 추천 기능 구현](#질환명-검색시-api-호출-통해서-검색어-추천-기능-구현)
  - [API 호출별로 로컬 캐싱 구현](#api-호출별로-로컬-캐싱-구현)
  - [입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 기능 구현](#입력마다-api-호출하지-않도록-api-호출-횟수를-줄이는-기능-구현)
  - [키보드만으로 추천 검색어들로 이동 가능하도록 구현](#키보드만으로-추천-검색어들로-이동-가능하도록-구현)
- [💭 고민했던 사항들](#고민했던-사항들)
  - [빌드 툴 선정에 관한 논의](#빌드-툴-선정에-관한-논의)
  - [CSS 라이브러리 선정에 관한 논의](#css-라이브러리-선정에-관한-논의)
  - [Redux 사용 여부에 관한 논의](#redux-사용-여부에-관한-논의)
  - [로컬 캐싱 방법에 관한 논의](#로컬-캐싱-방법에-관한-논의)
  - [Expire time 결정에 관한 논의](#expire-time-결정에-관한-논의)
  - [디바운싱(Debouncing) vs 쓰로틀링(Throttling)](<#디바운싱(debouncing)-vs-쓰로틀링(throttling)>)
  - [API 호출시 CORS 오류](#api-호출시-cors-오류)
  - [한글 입력 시 keyDown 이벤트 중복 발생 이슈](#한글-입력-시-keydown-이벤트-중복-발생-이슈)
  - [포커스 스타일링이 중복되는 이슈](#포커스-스타일링이-중복되는-이슈)
  - [영어 대문자로 검색 시 추천 검색어가 없는 이슈](#영어-대문자로-검색-시-추천-검색어가-없는-이슈)
  - [검색어를 빨리 입력했을 때 추천 검색어 리스트가 inputText로 나타나는 이슈](#검색어를-빨리-입력했을-때-추천-검색어-리스트가-inputtext로-나타나는-이슈)
  - [영어로 검색 시 추천 검색어의 inputText와 같은 부분은 모두 소문자로 보이는 이슈](#영어로-검색-시-추천-검색어의-inputtext와-같은-부분은-모두-소문자로-보이는-이슈)

<br/>

## 배포 링크

- [API 호출시 CORS 오류]
- 배포 환경에서는 proxy 설정이 제대로 적용되지 않아 CORS 오류가 발생하고 있습니다.

<br/>

## 동작 화면

<br/>

## 사용한 라이브러리

<div align =center>

|     Area     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Tech Stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Frontend** | <img src="https://img.shields.io/badge/-vite-FFD22A?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?&style=for-the-badge&logo=TailwindCSS&logoColor=white"> <img src="https://img.shields.io/badge/-PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/Axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/ESLINT-4B32C3?&style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/PRETTIER-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-285f77?&style=for-the-badge&logoColor=white"> <img src="https://img.shields.io/badge/lintStaged-4daad4?&style=for-the-badge&logoColor=white"> |

</div>

<br/>

## 프로젝트 구조

```
📦src
├── 📂components
│   └── 📂SearchSection
│       ├── 📂SearchBar
│       │   └── 📂DeleteButton
│       ├── 📂SearchIcon
│       └── 📂SearchWordBox
│           └── 📂SearchWord
├── 📂constants
├── 📂hooks
├── 📂services
├── 📂types
└── 📂utils
```

<br/>

## 프로젝트 실행 방법

레파지토리 클론

```bash
$ git clone https://github.com/WANTED-TEAM03/pre-onboarding-10th-2-3.git
```

패키지 설치

```bash
$ yarn
```

애플리케이션 실행

```bash
$ yarn dev
```

<br/>

## 컨벤션

### Commit convention

```markup
# <타입> : <제목> 형식으로 작성하며 제목은 최대 50글자 정도로만 입력
# 제목을 아랫줄에 작성, 제목 끝에 마침표 금지, 무엇을 했는지 명확하게 작성
```

| 구분     | 내용                                  |
| -------- | ------------------------------------- |
| FEAT     | 새로운 기능 추가                      |
| FIX      | 버그 수정                             |
| STYLE    | 코드 의미에 영향을 주지 않는 변경사항 |
| REFACTOR | 코드 리팩토링                         |
| DOCS     | 문서 수정                             |
| TEST     | 테스트 코드 추가                      |
| CHORE    | 빌드 부분 혹은 패키지 매니저 수정사항 |

### Git convention

- 이슈 템플릿

```markdown
---
name: "Custom issue template \U0001F60A"
about: 이슈생성시 이 템플릿을 사용해주세요:)
title: ''
labels: ''
assignees: ''
---

## 🐣 만들고자 하는 기능

기능 구현

## 🐣 해당 기능을 구현하기 위해 할 일

- [ ] todo1
- [ ] todo2

## 🐣 해당 기능에서 신경 쓸 부분

## 🐣 예상기간

0월00일 ~ 0월00일
```

- PR 템플릿

```markdown
## 🐣 개요

## 🐣 작업사항

-

## 🐣 공유사항

-
```

### 네이밍 컨벤션

- 컴포넌트 함수 선언은 export default function으로 시작해야 합니다.
- 페이지 컴포넌트의 함수명은 Page로 끝나야 합니다.
- 함수 네이밍은 handle로 시작해야 합니다.
- boolean 타입의 변수명은 is로 시작해야 합니다.

<br/>

## 과제 수행 내용

### Overview

- **`코드의 가독성 및 재사용성`**
  - **특정 키워드들은 상수화 하여 유지보수가 용이하도록 구현하였습니다.**
    - 추천검색어를 저장하는 캐시스토리지의 만료 시간과 key
    - API 주소와 에러메시지
    - 최신검색어를 저장하는 세션스토리지의 key
  - **재사용이 가능한 커스텀 훅을 구현하였습니다.**
    - 디바운스 기능이 담겨있는 `useDebounce`
    - 입력된 텍스트를 세션스토리지에 저장하는 `useRecentSearchWords`
    - 방향키 이벤트에 따라 인덱스를 변경해주는 `useKeyFocus`
- **`성능 최적화`**
  - 로컬 캐싱을 구현하여, 데이터를 요청하는 시간을 줄였습니다.
  - 디바운싱을 통해 API의 호출을 줄였습니다.
- **`사용자 경험`**
  - 입력시 빨간줄을 없애주는 `spellCheck`
  - 해당 컴포넌트가 렌더링되었을 때 자동으로 커서가 focus되는 `autoFocus`

### 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

- `input`에 입력되는 텍스트에 따라 API를 호출하도록 구현하였습니다.
- API 호출을 통해 받아온 데이터는 상태 업데이트 후, 추천검색어를 보여주는 UI에 `props`로 넘겨주도록 구현하였습니다.

  ```ts
   // src/components/SearchSection/index.tsx
     const [autocompleteWords, setAutocompleteWords] = useState<SearchWordType[]>([]);
     const [inputText, setInputText] = useState('');
      ~~

     useEffect(() => {
     	~~
     	const words = await searchAPI(inputText.trim());
     	 setAutocompleteWords(words.slice(0, MAX_DISPLAYED));
     	~~
       }, [inputText]);

       ~~
       return (
        <SearchWordBox
           ~~
            recentSearchWords={recentSearchWords}
           ~~
          />
       )

  ```

- API 호출여부를 알려주는 `console.info('calling api')` 를 추가하였습니다.

  ```ts
   // src/services.search.ts
    export const searchAPI = async (name: string) => {
      if (name === '') return [];
        ~~

      try {
        const { data } = await apiClient.get<SearchWordType[]>(
          API_URLS.search, config );

        console.info('calling api'); // api 호출 여부를 알려주는 콘솔 기록
        ~~
        return data;

      } catch (error) {
        ~
        alert(axiosError.response?.data.message || DEFAULT_ERROR_MESSAGE);

        return [];
      }
  };
  ```

### API 호출별로 로컬 캐싱 구현

로컬 캐싱을 구현하기 위해 Cache API를 사용하였습니다.

`캐시 Expire time을 구현하였습니다.`

`src/constants/cache.ts`에서 `EXPIRE_TIME`을 조정하여 만료 시간을 조정할 수 있습니다.

```tsx
export const EXPIRE_TIME = 1000 * 60 * 10; // 테스트 편의성을 위해 만료시간을 10분으로 설정했습니다.
```

아래 코드들은 `src/utils/cacheStorage.ts`에 위치하고 있습니다.



- _setCacheStorage_

  ```tsx
  export const setCacheStorage = async (
    url: string,
    queryStr: string,
    data: SearchWordType[],
  ) => {
    const cacheStorage = await caches.open(url);
    const response = new Response(JSON.stringify(data)); // 캐시에 저장할 데이터를 Response 객체로 생성

    // 캐시 Response에 Header로 현재 시간을 저장합
    const clonedResponse = response.clone();
    const newBody = await clonedResponse.blob();
    const newHeaders = new Headers(clonedResponse.headers);
    newHeaders.append(HEADER_FETCH_DATE, new Date().toISOString());

    // 캐시 저장날짜가 담긴 Header를 포함한 Response객체를 생성하여 캐시 스토리지에 저장
    const newResponse = new Response(newBody, {
      status: clonedResponse.status,
      statusText: clonedResponse.statusText,
      headers: newHeaders,
    });

    cacheStorage.put(queryStr, newResponse);
  };
  ```

  데이터를 캐시 스토리지에 저장하는 함수입니다.
  캐시 스토리지에 저장할 데이터를 Response 객체로 생성하고, 해당 Response Header에 `현재 시간`을 담습니다.
  이렇게 만들어진 Response를 캐시 스토리지에 저장합니다.

<br/>

- _getCachedResponse_

  ```tsx
  export const getCachedResponse = async (url: string, queryStr: string) => {
    // 캐시 스토리지에서 현재 검색한 데이터가 있는지 확인
    const cacheStorage = await caches.open(url);
    const cachedResponse = await cacheStorage.match(queryStr);

    if (cachedResponse) {
      if (!getIsCacheExpired(cachedResponse)) return cachedResponse; // 캐시 데이터가 있다면 캐시 데이터 반환

      // 캐시 데이터가 만료되었다면 캐시 데이터 삭제 후 null 반환
      await cacheStorage.delete(queryStr);
      return null;
    }

    // 캐시 데이터가 없는 경우 null 반환
    return null;
  };
  ```

  캐시 데이터를 캐시 스토리지에서 꺼내오는 함수입니다.
  사용자가 검색한 데이터인 `queryStr`를 캐시 스토리지에서 찾습니다.
  캐시 데이터가 존재한다면 해당 캐시 Response를 반환합니다.
  캐시 데이터가 존재하지만 만료된 캐시라면 캐시 데이터를 삭제하고 `null`을 반환합니다.
  캐시 데이터가 존재하지 않다면 `null`을 반환합니다.

<br/>

- _getIsCacheExpired_

  ```tsx
  export const getIsCacheExpired = (cacheResponse: Response) => {
    // 캐시 Response 헤더에 있는 캐시 저장 날짜 확인
    const cachedDate = cacheResponse.headers.get(HEADER_FETCH_DATE);

    if (!cachedDate) return;

    const fetchDate = new Date(cachedDate).getTime();
    const today = new Date().getTime();

    // (현재날짜 - 캐시 저장 날짜 > 만료날짜)를 비교하여 boolean값 반환
    return today - fetchDate > EXPIRE_TIME;
  };
  ```

  캐시 데이터가 만료되었는지 판단하여 boolean 값을 반환하는 함수입니다.
  인자로 Response를 받아 해당 Response의 Header에 담아있는 `캐시 저장 날짜`를 확인합니다.
  `현재 날짜`와 `캐시 저장 날짜`의 차이가 `만료 시간`보다 클 경우 해당 캐시는 만료된 캐시이므로 `false`를 반환합니다.

<br/>

- _추천 검색어 API 호출_

  ```tsx
  // src/services/search.ts
  	...

    const queryStr = new URLSearchParams(config.params).toString(); // 사용자가 검색한 단어 추출

    const responsedCache = await getCachedResponse(API_URLS.search, queryStr);

    if (responsedCache) return await responsedCache.json();

    try {
      const { data } = await apiClient.get<SearchWordType[]>(
        API_URLS.search,
        config,
      );
      console.info('calling api');

      setCacheStorage(API_URLS.search, queryStr, data);
      return data;
  	...
  ```

  실제 검색어 API를 호출하는 부분입니다.
  `getCachedResponse`함수를 호출해 해당 검색어의 캐시 데이터가 있는지 확인하고 캐시 데이터가 있다면 캐시 데이터를 반환합니다.
  캐시 데이터가 없다면 API 호출을 통해 데이터를 호출하고 `setCacheStorage`함수를 호출하여 캐시 스토리지에 캐시 데이터를 저장합니다.

### 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 기능 구현

- 이벤트를 그룹화하여 특정 시간이 지난 후 하나의 이벤트만 발생하도록 하는 **Debounce** 기술을 사용했습니다.

  1. `input` 창에 검색어를 입력할 때마다 검색어를 모아주는 기능을 담은 함수 `useDebounce` 에 전달합니다.

     ```ts
     // src/components/SearchSection/index.tsx

     const [inputText, setInputText] = useState('');
     ...
     const debouncedInputText = useDebounce(inputText);

     useEffect(() => {
     	...
     	const words = await searchAPI(debouncedInputText.trim());
     	 setAutocompleteWords(words.slice(0, MAX_DISPLAYED));
     	...

       }, [debouncedInputText]); //  축적된 텍스트의 변경 유무에 따라 useEffect가 호출됩니다.
     ```

  2. 특정 시간을 정해놓고, 해당 시간 내에 입력하는 모든 텍스트를 하나로 모은 다음에 해당 시간이 지나면 축적된 텍스트의 변경 유무에 따라 API를 호출하여 네트워크 비용을 줄이도록 구현하였습니다.

     ```ts
     // src/components/SearchSection/index.tsx

     useEffect(() => {
       const fetchAutocompleteWords = async () => {
         setIsLoading(true);
         const words = await searchAPI(debouncedInputText.trim());
         setIsLoading(false);
         setAutocompleteWords(words.slice(0, MAX_DISPLAYED));
       };

       fetchAutocompleteWords();
     }, [debouncedInputText]);
     ```

- 또한 해당 디바운스 작업을 유지, 보수가 용이하도록 커스텀 훅으로 분리하였습니다.
- 현재는 인자로 검색어를 받는 `string` 이지만 추후 재사용을 고려해 value의 타입을 generic `<T>` 로 선언하였습니다. _(그럼 delay도 숫자로 세팅하는 것도 일관성이 있지 않을까??)_

  ```ts
  // src/hooks/useDebounce.ts
  export default function useDebounce<T>(value: T, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timerId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(timerId);
      };
    }, [value, delay]);

    return debouncedValue;
  }
  ```

### 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- 위, 아래 방향키 및 `tab`키로 이동하여 추천 검색어들로 이동이 가능하도록 키보드 네비게이션을 구현하였습니다.
- 이동 후 Enter 입력 시, focus된 추천 검색어를 검색합니다.

#### `tab` 키로 이동: 추천 검색어를 대화형 요소 `<button>` 태그로 설정

시맨틱 마크업을 위해 추천 검색어를 `<li>` 태그로 설정하였으나, `<li>` 태그는 비대화형 요소이기 때문에 접근성 트리에 나타나지 않아 키보드 `tab` 키로 접근할 수 없었습니다.
접근성 트리에 포함될 수 있도록 비대화형 요소인 `<li>` 태그를 대화형 요소인 `<button>` 태그로 바꾸어 키보드 `tab` 키를 통해 접근 가능하도록 했습니다.

> #### tabindex 속성을 사용하지 않은 이유
>
> 비대화형 요소를 사용해 만든 대화형 컴포넌트는 접근성 트리에 나타나지 않으므로, 보조 기술이 해당 컴포넌트로 탐색하거나 조작하는 것을 방지합니다. 상호작용 가능한 항목은 대화형 요소를 사용해 적절한 의미와 함께 나타내야 합니다.
>
> 참고: [접근성 고려사항 - MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/tabindex#%EC%A0%91%EA%B7%BC%EC%84%B1_%EA%B3%A0%EB%A0%A4%EC%82%AC%ED%95%AD)

![May-05-2023 21-54-26](https://user-images.githubusercontent.com/91963656/236463328-6a77b69c-24d4-4919-97f4-5899b71da7b7.gif)

#### 방향키로 이동: `keyDown` 이벤트 이용한 `useKeyFocus` 커스텀 훅

- UI 단에서의 로직 코드를 줄이기 위해서 `useKeyFocus` 커스텀 훅으로 `keyDown` 이벤트를 처리하였고, 방향키 관련 문자열을 상수 처리하였습니다.

```ts
// src/hooks/useKeyFocus.ts
const KEY_NAME = {
  arrowDown: 'ArrowDown',
  arrowUp: 'ArrowUp',
  enter: 'Enter',
};

const useKeyFocus = (...) => {
  ...
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOnFocus) return;
      if (event.isComposing) return;

      if (event.key === KEY_NAME.arrowDown) {
        ~~setFocusIndex((currentIndex) =>
          Math.min(currentIndex + 1, searchWords.length - 1),
        );
        return;
      }

      if (event.key === KEY_NAME.arrowUp) {
        ~~setFocusIndex((currentIndex) => Math.max(-1, currentIndex - 1));
        return;
      }

      if (event.key === KEY_NAME.enter) {
        setInputText(searchWords[focusIndex].name);
        setIsOnFocus(false);
      }
    },
    ...
  );
  return { handleKeyDown };
}
```

- 한글과 같은 조합 문자는 문자를 변환하는 과정에서 OS와 브라우저 모두 이벤트를 처리하기 때문에 keyDown 이벤트가 중복으로 발생됩니다.

  - 따라서 KeyboardEvent의 isComposing 값을 이용하여 문자 변환 과정 중에는 이벤트가 수행되지 않도록 처리하여 중복 발생을 해결했습니다.

- Input 창이 blur인 상태에도 handleKeyDown 함수가 작동되어 focusIndex가 변경되는 문제가 있었습니다.

  - 따라서 isOnFocus 상태가 아닐 때는 수행되지 않도록 처리하였습니다.

## 고민했던 사항들

### 빌드 툴 선정에 관한 논의

#### CRA vs Vite

- Vite가 소규모 앱에 적합하고, 가벼워서 빌드 속도가 빠르다고 생각했습니다.
- CRA대신 Vite 사용을 권장하는 의견이 있어 학습을 위해 Vite를 선택했습니다.
- ['Create React App 권장을 Vite로 대체’ PR 대한 Dan Abramov의 답변](https://junghan92.medium.com/%EB%B2%88%EC%97%AD-create-react-app-%EA%B6%8C%EC%9E%A5%EC%9D%84-vite%EB%A1%9C-%EB%8C%80%EC%B2%B4-pr-%EB%8C%80%ED%95%9C-dan-abramov%EC%9D%98-%EB%8B%B5%EB%B3%80-3050b5678ac8)

### CSS 라이브러리 선정에 관한 논의

#### Tailwind

- 간편한 클래스명을 통한 마크업 작업이 가능하여 기능 구현에 집중 할 수 있다는 장점이 있습니다.
- 짧은 기간동안 마크업과 기능 모두 진행해야하는 기업 과제에 적합하다고 판단되었습니다.

### Redux 사용 여부에 관한 논의

- Redux에서 전역변수로 state를 관리하는 부분이 아니라면 Redux를 사용할 필요를 느끼지 못 했습니다.

- 특정한 방식으로 캐싱을 구현하지 않는다면 Redux를 사용할 필요를 느끼지 못 했습니다.

### 로컬 캐싱 방법에 관한 논의

**개별적으로 `로컬 스토리지`, `세션 스토리지`, `캐시 스토리지`, `Map`, `Redux`를 이용하여 과제를 진행하였습니다.**

**저희는 어떤 방식을 사용하는 것이 최적화와 사용성에 이점이 되는지 논의해 보았습니다.**
<br/>

#### 로컬 스토리지

- 동기 방식으로 동작하며 메인 스레드 연산을 중단시킵니다.
- 용량 제한은 5MB이며 문자열만 저장할 수 있습니다.

#### 세션 스토리지

- 탭 안에서만 유효하며 탭이 닫히면 스토리지도 종료합니다.
- 현재 탭에서만 사용하는 IndexedDB 키를 잠시 저장하는 것과 같이 작은 용량 데이터를 저장할 때는 좋습니다.
- 동기(synchronous) 방식으로 동작하기 때문에 메인 스레드 연산을 중단시킵니다.
- 용량 제한은 5MB이며 문자열만 저장할 수 있습니다.

#### Map

- 메모리상에 캐시 데이터를 관리하여 저장/삭제 및 설정이 비교적 자유롭습니다.
- 새로고침시 데이터가 휘발됩니다.

#### 캐시 스토리지

- 요청 및 응답에는 HTTP를 통해 전송할 수 있는 `모든 종류의 데이터가 포함될 수 있습니다.`
- 비동기 방식으로 동작하며 `메인 스레드 연산을 중단하지 않습니다`.
- `많이 저장할 수 있으며 적어도 수백 MB, 경우에 따라 수 GB 이상`까지도 될 수 있습니다.
  (브라우저 구현은 다를 수 있지만 사용 가능한 저장 공간의 양은 일반적으로 장치에서 사용 가능한 저장 공간의 양에 따라 결정)

#### 번외) Cache-Control

- **[웹 서비스 캐시 똑똑하게 다루기](https://toss.tech/article/smart-web-service-cache)**
- 서버 측에서 설정을 바꿔줘야 하기 때문에 현재 과제에서는 구현하기 힘들다고 생각했습니다.

#### 결론

네트워크로 불러온 리소스나 파일을 캐싱해야 한다면 캐시 스토리지를 사용하는 것이 좋다고 결론을 내렸습니다. 더불어, 최근 검색어 기능을 구현할 때는 세션 스토리지를 사용하는 방향으로 결정했습니다.

### Expire time 결정에 관한 논의

- API 호출에 따른 서버의 과부화 정도와 검색어에 따른 API 호출 결과가 변하는 기간에 따라 Expire time을 결정하는 것이 좋다고 생각했습니다.
- 하지만 이번 과제에서는 실제 API 관련 데이터를 알 수 없어, 테스트 편의성을 위해 만료시간을 10분으로 설정했습니다.

### 디바운싱(Debouncing) vs 쓰로틀링(Throttling)

- API 호출 횟수를 최소화 하기 위해서 검색창에 텍스트를 입력할 때 마다 연속적으로 발생하는 이벤트를 제어할 필요가 있었습니다.
- 이벤트를 제어하는 방법으로 디바운싱과 쓰로틀링이 있어 둘 중 적합한 기법이 무엇인지 결정해야 했습니다.
  - 디바운싱(Debouncing) : 연이어 발생한 이벤트를 하나의 그룹으로 묶어서 처리하는 방식으로, 주로 그룹에서 마지막, 혹은 처음에 처리된 함수를 처리하는 방식으로 사용됩니다.
  - 쓰로틀링(Throttling) : 연이어 발생한 이벤트에 대해, 일정한 delay 시간 동안 호출된 함수는 무시하는 방법입니다.
- 사용자의 입력이 언제 마무리 될 지 모르는 상황이기 때문에 디바운싱을 적용하는 것이 더 적합하다고 판단했습니다.

### API 호출시 CORS 오류

- API를 이용해 검색 데이터를 받아오기 위해 네트워크 요청 시 CORS 오류가 발생했습니다.
- vite.config.ts에 다음과 같은 코드를 통한 proxy 설정으로 문제를 해결했습니다.

  ```js
  export default defineConfig({
    server: {
      proxy: {
        '/api/v1': {
          target: 'API 주소',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/v1/, ''),
        },
      },
    },
  });
  ```

### 한글 입력 시 keyDown 이벤트 중복 발생 이슈

- **문제사항**
  - 한글과 같은 조합 문자는 문자를 변환하는 IME 과정에서 OS와 브라우저 모두 이벤트를 처리하기 때문에 keyDown 이벤트가 중복으로 발생되었습니다.
- **해결 방법**

  - 글자가 변환 중인지 알려주는 KeyboardEvent의 isComposing 값을 이용하여 이벤트 핸들러가 한 번만 호출되도록 개선하였습니다.

    <br />

  ```jsx
  const handleKeyDown = useCallback(
      ...
      if(e.isComposing) return;
  );
  ```

- **추가 설명**

  - `IME composition`

    IME는 영어가 아닌 언어들을 다양한 브라우저에서 지원하도록 언어를 변환시켜주기 위한 OS 단계의 어플리케이션입니다.
    IME 과정에서 keyDown 이벤트가 발생하면, OS와 브라우저에서 해당 이벤트를 모두 처리하기 때문에 이벤트가 중복으로 발생하게 됩니다.

  - `isComposing`

    한글과 같이 자음과 모음의 조합으로 한 음절을 이루는 조합 문자는 변환하는 과정에서 글자가 조합 중인지 끝난 상태인지를 알 수 없습니다. KeyboardEvent.isComposing 값을 이용하면 글자 조합 중에 이벤트가 발생했는지를 알 수 있습니다.

### 포커스 스타일링이 중복되는 이슈

- **문제사항**

  - 추천 검색어를 방향키로 이동했을 때와 마우스를 올렸을 때와 탭키로 이동했을 때의 포커싱이 모두 다른 문제가 있었습니다.
  - `tab`키로 검색어를 이동하였을 때 CSS가 적용되지 않았습니다.

- **해결 방법**

  - CSS의 `focus`속성을 이용하여 `tab`키로 포커스 시에도 CSS를 적용하도록 수정하였습니다.
  - 방향키로 포커스를 이동하던 중 마우스로 포커스를 이동할 시에는 기존의 방향키로 이동하던 포커스는 초기화 되도록 수정하였습니다.

### 영어 대문자로 검색 시 추천 검색어가 없는 이슈

- **문제사항**

  - API의 검색결과 응답 중에는 대문자가 있지만 소문자로만 검색이 가능했습니다.
  - API자체에서 대문자 검색어에 대해 빈 배열을 응답합니다.

- **해결 방법**

  - 검색하는 API를 호출할 때 입력한 input을 `String`의 `toLowerCase()`함수로 소문자로 변환 후 호출하도록 했습니다.

  ```tsx
  // components/SearchSection/index.tsx

  useEffect(() => {
    const fetchAutocompleteWords = async () => {
      ...
      const words = await searchAPI(debouncedInputText.trim().toLowerCase());
      ...
    };

    fetchAutocompleteWords();
  }, [debouncedInputText, setFocusIndex]);
  ```

### 검색어를 빨리 입력했을 때 추천 검색어 리스트가 inputText로 나타나는 이슈

- **문제사항**
  - 추천 검색어 리스트가 생성이 된 후 검색어를 빠르게 입력하면 추천 검색어 리스트가 현재 입력중인 inputText로 보여지는 문제가 있었습니다.
  - 추천 검색어 리스트는 debounced된 inputText에 대한 결과 값인데, 일치하지 않는 inputText로 slice를 하다보니 inputText만 보여지는 문제였습니다.
- **해결 방법**

  - 현재 입력 중인 inputText가 아닌 debounced된 inputText를 넘겨주어서 해결하였습니다.

    <br />

  ```jsx
  //  components/SearchSection/SearchBox/index.tsx
  {
    autocompleteWords.map(({ id, name }, index) => (
      <SearchWord
        key={id}
        inputText={debouncedInputText} // 전달하는 값을 debouncedInputText로 변경
        word={name}
        clickWord={clickWord}
        isFocused={focusIndex === index}
      />
    ));
  }
  ```

  ```jsx
  // components/SearchSection/SearchBox/SearchWord/index.tsx
  <span className="text-black">
    {inputText ? <span className="font-bold">{inputText}</span> : null}
    {word?.slice(inputText?.length)}
  </span>
  ```

### 영어로 검색 시 추천 검색어의 inputText와 같은 부분은 모두 소문자로 보이는 이슈

- **문제사항**

  - 영어를 검색했을 때 추천 검색어는 대문자인데 검색어의 입력한 글자는 모두 소문자로 보여지는 문제가 있었습니다.
  - `inputText`와 검색어 중 일치하는 부분을 강조하는 부분에서 `inputText`를 그대로 보여주게 되어있었습니다.

    ```tsx
    // components/SearchSection/SearchBox/SearchWord/index.tsx
    // string - input에 입력되는 string.
    // word - 검색결과 중 하나의 string.
    <span className="text-black">
      {inputText ? <span className="font-bold">{inputText}</span> : null}
      {word.slice(inputText?.length)}
    </span>
    ```

- **해결 방법**

  - `inputText`를 그대로 보여주지 않고, 검색결과에서 `inpuText`의 길이만큼을 잘라서 강조하도록 해서 해결했습니다.

    ```tsx
    <span className="text-black">
      {inputText && (
        <span className="font-bold">{word.slice(0, inputText.length)}</span>
      )}
      {word?.slice(inputText?.length)}
    </span>
    ```
