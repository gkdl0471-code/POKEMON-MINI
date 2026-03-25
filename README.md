<div align="center">

# 포켓몬 도감 · Pokémon Mini


https://github.com/user-attachments/assets/f3812bcd-8c54-4364-9488-b5ce9d004bb2


**PokeAPI**를 사용해 1세대부터 수백 마리까지 한국어 이름·도감 설명으로 둘러보는 **React** 미니 도감 앱입니다.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)

</div>

---

## 주요 기능

| 구분 | 설명 |
|------|------|
| **메인** | 포켓몬 카드 그리드로 목록 탐색 |
| **상세** | 앞·뒤 스프라이트 플립 카드, 도감 텍스트, 찜하기 |
| **검색** | 상단 검색창 → `korean-regexp`로 **한글 초성·부분 일치** 검색 |
| **찜 목록** | Redux에 저장한 즐겨찾기만 모아 보기 |

- 라우트 기반 페이지: `react-router-dom` + 코드 스플리팅(`lazy` / `Suspense`)
- 상태: `@reduxjs/toolkit` — 비동기 데이터(`createAsyncThunk`) + 셀렉터로 검색·상세 연동
- UI: **Tailwind CSS v4**, **Sass**, **styled-components** 혼용

---

## 기술 스택

`React 19` · `Vite 7` · `Redux Toolkit` · `React Router` · `Tailwind CSS` · `styled-components` · `Sass`

---

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 (기본 http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

### 요구 사항

- **Node.js** — LTS 권장 (Vite 7 기준)

---

## 프로젝트 구조 (요약)

```
src/
├── App.jsx              # 라우팅·헤더·데이터 로드
├── component/           # Card, FlipCard, FavoriteButton 등
├── pages/               # Main, Detail, Search, Favorite
└── RTK/                 # store, slice, thunk, selector
```

---

## 데이터 출처

- **[PokeAPI](https://pokeapi.co/)** — 종 정보(`pokemon-species`) 및 스프라이트 URL
- 앱에서 표시하는 이름·도감 문구는 API가 제공하는 **한국어(ko)** 필드를 사용합니다.

---

## 라이선스

이 저장소는 `private` 프로젝트로 설정되어 있습니다.  
Pokémon 및 관련 자산은 각 권리자에게 귀속됩니다.
