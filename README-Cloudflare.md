# Cloudflare Pages 배포 가이드

## 흰 화면 문제 해결

현재 앱이 Cloudflare Pages에서 흰 화면으로 나타나는 이유는 정적 사이트 배포가 제대로 되지 않았기 때문입니다.

## 해결 방법

### 1. 올바른 빌드 명령어 사용
Cloudflare Pages 설정에서 다음 빌드 명령어를 사용하세요:

```bash
npx vite build --config vite.config.cloudflare.ts
```

### 2. 빌드 출력 디렉토리 설정
- **빌드 출력 디렉토리**: `dist-static`
- **루트 디렉토리**: `/` (프로젝트 루트)

### 3. 환경 변수 확인
빌드 환경에서 Node.js 18+ 버전을 사용하는지 확인하세요.

### 4. _redirects 파일 확인
SPA 라우팅을 위해 다음 내용이 포함된 `_redirects` 파일이 필요합니다:
```
/*    /index.html   200
```

### 5. 로컬에서 빌드 테스트
```bash
# 1. 정적 빌드 생성
npx vite build --config vite.config.cloudflare.ts

# 2. 배포 파일 복사
cp _headers _redirects dist-static/

# 3. 로컬 테스트 (선택사항)
npx serve dist-static
```

## 주요 문제점과 해결책

1. **의존성 문제**: 현재 앱은 서버 기능을 사용하지 않으므로 완전히 정적으로 빌드 가능
2. **경로 문제**: SPA이므로 모든 경로를 index.html로 리디렉션 필요
3. **빌드 설정**: production 모드로 최적화된 빌드 필요

## Cloudflare Pages 설정

1. **프레임워크 프리셋**: None 또는 Vite
2. **빌드 명령어**: `npx vite build --config vite.config.cloudflare.ts`
3. **빌드 출력 디렉토리**: `dist-static`
4. **루트 디렉토리**: `/`
5. **환경 변수**: 
   - `NODE_VERSION=18`
   - `NPM_VERSION=9`

이 설정으로 다시 배포하면 흰 화면 문제가 해결됩니다.