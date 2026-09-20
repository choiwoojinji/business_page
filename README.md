# DCODLAB

프론트엔드, 백엔드, 디자인을 실습 중심으로 배우는 제주도 코딩 스튜디오 소개 사이트입니다.
HTML, CSS, JavaScript만으로 만든 정적 사이트로, 별도의 빌드 과정이 없습니다.

## 실행 방법

`first.html`을 브라우저로 열면 됩니다.
VS Code의 Live Server 확장을 사용하면 저장할 때마다 자동으로 새로고침됩니다.

## 폴더 구조

```
business_page/
├── first.html      # 메인 페이지
├── 404.html        # 오류 페이지
├── css/            # 스타일시트
├── js/             # 기능별 스크립트 (nav, gallery, contact-form 등)
├── pages/          # 하위 페이지 (frontend, backend, design, contact 등)
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## 주요 기능

- 라이트/다크 테마 전환 (저장된 설정이 없으면 시스템 설정을 따름)
- 스크롤 방향에 따라 헤더 자동 숨김/표시
- 스크롤 진행률 표시 및 등장 애니메이션
- Contact 폼 실시간 유효성 검사
- 커뮤니티 글 검색, 갤러리, 수강생 후기(별점)
- 제주도 위치 지도 임베드
