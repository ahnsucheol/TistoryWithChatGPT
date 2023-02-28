# TistoryWithChatGPT

## 기본 기능

- openAI API를 사용하여 chatGPT에 질문을 함
- 받은 답변을 토대로 Tistory에 게시글 작성

---

## 필요한 정보

- Tistory API App ID, Secret Key
- openAI API Secret Key

---

## 디테일 기능

1. Tistory 로그인
2. 기능 사용을 위해 Tistory API App ID, Secret Key openAI API Secret Key 받기
3. chatGPT에 질문
4. 받은 답번을 토대로 Tistory에 게시글 작성

---

### 고려해야할 점

- 유저로부터 받은 ID, Secret Key는 모두 복호화 가능한 양방향 암호화 처리 후 저장 (crypto)
- 게시글의 퀄리티를 위해 내용 수정 권장
- 프론트엔드 코드를 어떻게 할 것인가, SvelteKit? 한명 구하기?

---

### Tistory API가 제공 안하는 기능

- 카테고리 만들기
- 게시글 삭제
